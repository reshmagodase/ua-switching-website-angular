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

  constructor(private router: Router, private switchService: SwitchService, private fb: FormBuilder, private spinner: NgxSpinnerService) {
    this.addresses = this.switchService.step1Obj.addresses;
    this.switchForm = fb.group({
      'postCode': [
        this.switchService.step1Obj.postCode ? this.switchService.step1Obj.postCode : '',
        Validators.compose([Validators.required, Validators.maxLength(7)])],
      'supplyAddress': [
        this.switchService.step1Obj.supplyAddress ? this.switchService.step1Obj.supplyAddress : ''
        , Validators.required]
    });

    this.showHideSupplyAddress = this.switchService.step1Obj.supplyAddress ? false : true;
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
        var elecAddressArr = [];
        var gasAddressArr = [];
        var addressJson = {};
        var bool = false;
        for (var i = 0; i < addressList.length; i++) {
          addressJson = {};
          for (var j = 0; j < addressList[i].length; j++) {
            addressJson[addressList[i][j].Key] = addressList[i][j].Value;
            if (addressList[i][j].Key == "MPANCore") {
              bool = true;
            }
          }
          if (bool == true) {
            bool = false;
            elecAddressArr.push(addressJson);
          }
          else {
            gasAddressArr.push(addressJson);
          }
        }
        if (this.switchType == "electricity") {
          this.addresses = elecAddressArr;
          this.switchService.step1Obj.addresses = elecAddressArr;
          this.showHideSupplyAddress = false;
        }
        else {
          this.addresses = gasAddressArr;
          this.switchService.step1Obj.addresses = gasAddressArr;
          this.showHideSupplyAddress = false;
        }
      },
      err => this.spinner.hide(),
      () => this.spinner.hide()
    );
  }


  submitForm(value: any, step: number): void {

    this.switchService.step1Obj.postCode = value.postCode;
    this.switchService.step1Obj.supplyAddress = value.supplyAddress;

    if (this.switchForm.valid && step == 2) {
      this.router.navigate([this.switchType + '/usage']);
      this.switchService.step1Obj.completed = true;
    }
    else if (this.switchService.step2Obj.completed && step == 3) {
      this.router.navigate([this.switchType + '/pricing-list']);
    }
  }

  onChange(value) {
    var code = value.split(",");
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
