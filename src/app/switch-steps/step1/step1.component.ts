import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../../switch.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html'
})
export class Step1Component implements OnInit {
  switchType: string = '';
  switchForm: FormGroup;
  addresses: any;
  MPANDiv: boolean = true; //hidden
  MPANBottomLineNo: string = '';
  MPRNNo: string = '';
  showHideSupplyAddress: boolean = true;
  showHidePostCode: boolean = true;

  constructor(private router: Router, public switchService: SwitchService, private fb: FormBuilder, private spinner: NgxSpinnerService) {
    var step1Obj = this.switchService.step1Obj;
    this.addresses = step1Obj.addresses;

    this.switchForm = fb.group({
      'postCode': [step1Obj.postCode ? step1Obj.postCode : '',
      Validators.compose([Validators.required, Validators.maxLength(8)])],
      'supplyAddress': [step1Obj.formattedSupplyAddress ? step1Obj.formattedSupplyAddress : '', Validators.required]
    });
    this.showHideSupplyAddress = step1Obj.formattedSupplyAddress ? false : true;
    this.MPANDiv = step1Obj.MPANBottomLineNo ? false : true;
    this.MPANBottomLineNo = step1Obj.MPANBottomLineNo ? step1Obj.MPANBottomLineNo : '';
    this.MPRNNo = step1Obj.MPRNNo ? step1Obj.MPRNNo : '';
  }

  ngOnInit() {
    this.switchService.currentUrl = this.router.url.replace('/', '');
    this.switchType = this.switchService.currentUrl;
  }

  getSupplyAddress() {
    this.showHideSupplyAddress = true;
    var request = {
      postCode: this.switchForm.controls['postCode'].value
    }
    this.switchService.getSupplyAddresses(request).subscribe(
      (data: any) => {
        var addressList = data.GetAddressesResult.Addresses;
        if (addressList.length > 0) {
          var jsonAddress = {};
          var addressArr = [];

          var switchType = this.switchType;
          for (var i = 0; i < addressList.length; i++) {
            jsonAddress = {};
            var address = addressList[i].map(function (obj) {
              jsonAddress[obj.Key] = obj.Value
              if (obj.Key == "MPANCore") {
                jsonAddress["supplyType"] = "electricity";
              }
              else if (obj.Key == "MPRN") {
                jsonAddress["supplyType"] = "gas";
              }
              return jsonAddress;
            })
            if (address[0].supplyType == "electricity" && switchType == "electricity") {
              addressArr.push(address[0]);
            }
            else if (address[0].supplyType == "gas" && switchType == "gas") {
              addressArr.push(address[0]);
            }
          }
          this.addresses = addressArr;
          this.switchService.step1Obj.addresses = addressArr;
          this.showHideSupplyAddress = false;

          this.showHidePostCode = true;
        }
        else {
          this.showHidePostCode = false;
          this.spinner.hide();
        }

      },
      err => this.spinner.hide(),
      () => this.spinner.hide()
    );
  }


  getPostCode() {
    this.switchService.getPostCode().subscribe(
      (data: any) => {
        this.spinner.hide();
        if (data.postCode == "") {
          Swal("Unable to retreive post code. Please enter it manually!")
        }
        else {
          this.switchForm.controls['postCode'].setValue(data.postCode);
        }
      },
      err => { Swal("Unable to retreive post code. Please enter it manually!"); this.spinner.hide() },
      () => this.spinner.hide()
    )
  }

  submitForm(value: any, step: number): void {

    if (value.supplyAddress) {

      var supplyAddress = value.supplyAddress.split("AAA");

      this.switchService.step1Obj.postCode = value.postCode;
      this.switchService.step1Obj.formattedSupplyAddress = value.supplyAddress;
      this.switchService.step1Obj.supplyAddress = supplyAddress[0];

      if (this.switchForm.valid && step == 2) {
        this.router.navigate([this.switchType + '/usage']);
        this.switchService.step1Obj.completed = true;
      }
      else if (this.switchService.step2Obj.completed && step == 3) {
        this.router.navigate([this.switchType + '/pricing-list']);
      }
    }

  }

  onChange(value) {
    var code = value.split("AAA");
    if (this.switchType == "electricity") {
      this.switchService.step1Obj.MPANBottomLineNo = code[1];
      this.switchService.step1Obj.MPANTopLineNo = code[2];
      this.MPANBottomLineNo = code[1];
    }
    else {
      this.switchService.step1Obj.MPRNNo = code[1];
      this.MPRNNo = code[1];
    }
    this.MPANDiv = false; //unhide
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      this.getSupplyAddress();
    }
  }
}
