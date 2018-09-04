import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../../switch.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit {
  switchType: string = '';
  switchForm: FormGroup;

  constructor(private router: Router, public switchService: SwitchService, private fb: FormBuilder, private spinner: NgxSpinnerService) {
    var addressObj = this.switchService.addressObj;
    this.switchForm = fb.group({
      'residentialStatus': [addressObj.residentialStatus ? addressObj.residentialStatus : '', Validators.required],
      'yearsAtProperty': [addressObj.yearsAtProperty ? addressObj.yearsAtProperty : '', Validators.required],
      'monthsAtProperty': [addressObj.monthsAtProperty ? addressObj.monthsAtProperty : '', Validators.required],
      'prevAddressLine1': [addressObj.prevAddressLine1 ? addressObj.prevAddressLine1 : ''],
      'prevAddressLine2': [addressObj.prevAddressLine2 ? addressObj.prevAddressLine2 : ''],
      'prevCity': [addressObj.prevCity ? addressObj.prevCity : ''],
      'prevCountry': [addressObj.prevCountry ? addressObj.prevCountry : ''],
      'prevPostCode': [addressObj.prevPostCode ? addressObj.prevPostCode : ''],
      'checkBillingAddress': [addressObj.checkBillingAddress ? addressObj.checkBillingAddress : false],
      'billingAddressLine1': [addressObj.billingAddressLine1 ? addressObj.billingAddressLine1 : ''],
      'billingAddressLine2': [addressObj.billingAddressLine2 ? addressObj.billingAddressLine2 : ''],
      'billingCity': [addressObj.billingCity ? addressObj.billingCity : ''],
      'billingCountry': [addressObj.billingCountry ? addressObj.billingCountry : ''],
      'billingPostCode': [addressObj.billingPostCode ? addressObj.billingPostCode : '']
    });

  }

  ngOnInit() {
    if (localStorage.getItem("userId") !== null) {
      this.switchType = this.switchService.currentUrl;
    }
    else{
      this.router.navigate(['']);
    }
  }

  submitForm(value: any): void {
    var url=this.switchType + '/payment-details';
    this.setAddressObj(value,url);
 
  }
  updateForm(value: any): void {
    var url=this.switchType + '/details';
    this.setAddressObj(value,url);
 
  }

  setAddressObj(value,url) {
    this.switchService.addressObj = {
      residentialStatus: value.residentialStatus,
      yearsAtProperty: value.yearsAtProperty,
      monthsAtProperty: value.monthsAtProperty,
      prevAddressLine1: value.prevAddressLine1,
      prevAddressLine2: value.prevAddressLine2,
      prevCity: value.prevCity,
      prevCountry: value.prevCountry,
      prevPostCode: value.prevPostCode,
      checkBillingAddress: value.checkBillingAddress,
      billingAddressLine1: value.billingAddressLine1,
      billingAddressLine2: value.billingAddressLine2,
      billingCity: value.billingCity,
      billingCountry: value.billingCountry,
      billingPostCode: value.billingPostCode
    }
    this.switchService.addressObj.userId=localStorage.getItem("userId");
    this.switchService.updateUser(this.switchService.addressObj).subscribe(
      (data: any) => {
        this.router.navigate([url]);
        this.spinner.hide();
      },
      err => {
        this.spinner.hide()
      },
      () => this.spinner.hide()
    )
  }
}
