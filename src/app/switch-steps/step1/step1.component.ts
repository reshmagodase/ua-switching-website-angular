import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../switch.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html'
})
export class Step1Component implements OnInit {
  switchType: string = '';
  switchForm: FormGroup;
  addresses: any;
  MPANDivShow: boolean = false;
  MPANBottomLineNo: string = '';
  MPRNNo: string = '';
  showHideSupplyAddress: boolean = true;
  showHidePostCode: boolean = true;

  constructor(private router: Router, public switchService: SwitchService, private fb: FormBuilder, private spinner: NgxSpinnerService) {
    this.addresses = this.switchService.step1Obj.addresses;

    this.switchForm = fb.group({
      'postCode': [
        this.switchService.step1Obj.postCode ? this.switchService.step1Obj.postCode : '',
        Validators.compose([Validators.required, Validators.maxLength(8)])],
      'supplyAddress': [
        this.switchService.step1Obj.supplyAddress ? this.switchService.step1Obj.supplyAddress : ''
        , Validators.required]
    });

    this.showHideSupplyAddress = this.switchService.step1Obj.supplyAddress ? false : true;
  }

  ngOnInit() {
    console.log(this.switchService);
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
          alert("Unable to retreive post code. Please enter it manually!")
        }
        else {
          this.switchForm.controls['postCode'].setValue(data.postCode);
        }
      },
      err => this.spinner.hide(),
      () => this.spinner.hide()
    )
  }

  submitForm(value: any, step: number): void {
    console.log(value.supplyAddress);
    if (value.supplyAddress) {
      this.switchService.step1Obj.postCode = value.postCode;
      var supplyAddress = value.supplyAddress.split("AAA");
      
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
    this.MPANDivShow = true;
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      this.getSupplyAddress();
    }
  }
}
