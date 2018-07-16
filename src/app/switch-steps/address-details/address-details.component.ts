import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../switch.service';
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
    console.log(this.switchService.addressObj);
    this.switchForm = fb.group({
      'residentialStatus': [
        this.switchService.addressObj.residentialStatus ? this.switchService.addressObj.residentialStatus : ''
        , Validators.required],
      'yearsAtProperty': [
        this.switchService.addressObj.yearsAtProperty ? this.switchService.addressObj.yearsAtProperty : ''
        , Validators.required],
      'monthsAtProperty': [
        this.switchService.addressObj.monthsAtProperty ? this.switchService.addressObj.monthsAtProperty : ''
        , Validators.required],
      'prevAddressLine1': [
        this.switchService.addressObj.prevAddressLine1 ? this.switchService.addressObj.prevAddressLine1 : ''],
      'prevAddressLine2': [
        this.switchService.addressObj.prevAddressLine2 ? this.switchService.addressObj.prevAddressLine2 : ''],
      'prevCity': [
        this.switchService.addressObj.prevCity ? this.switchService.addressObj.prevCity : ''],
      'prevCountry': [
        this.switchService.addressObj.prevCountry ? this.switchService.addressObj.prevCountry : ''],
      'prevPostCode': [
        this.switchService.addressObj.prevPostCode ? this.switchService.addressObj.prevPostCode : ''],
      'checkBillingAddress': [
        this.switchService.addressObj.checkBillingAddress ? this.switchService.addressObj.checkBillingAddress : false],
      'billingAddressLine1': [
        this.switchService.addressObj.billingAddressLine1 ? this.switchService.addressObj.billingAddressLine1 : ''],
      'billingAddressLine2': [
        this.switchService.addressObj.billingAddressLine2 ? this.switchService.addressObj.billingAddressLine2 : ''],
      'billingCity': [
        this.switchService.addressObj.billingCity ? this.switchService.addressObj.billingCity : ''],
      'billingCountry': [
        this.switchService.addressObj.billingCountry ? this.switchService.addressObj.billingCountry : ''],
      'billingPostCode': [
        this.switchService.addressObj.billingPostCode ? this.switchService.addressObj.billingPostCode : '']

    });

  }

  ngOnInit() {
    console.log(this.switchService.personalObj);
    if (this.switchService.currentUrl == "") {
      this.router.navigate(['']);
    }
    else {
      this.switchType = this.switchService.currentUrl;
    }

  }

  submitForm(value: any): void {
    this.switchService.addressObj.residentialStatus = value.residentialStatus;
    this.switchService.addressObj.yearsAtProperty = value.yearsAtProperty;
    this.switchService.addressObj.monthsAtProperty = value.monthsAtProperty;
    this.switchService.addressObj.prevAddressLine1 = value.prevAddressLine1;
    this.switchService.addressObj.prevAddressLine2 = value.prevAddressLine2;
    this.switchService.addressObj.prevCity = value.prevCity;
    this.switchService.addressObj.prevCountry = value.prevCountry;
    this.switchService.addressObj.prevPostCode = value.prevPostCode;
    this.switchService.addressObj.checkBillingAddress = value.checkBillingAddress;

    this.switchService.addressObj.billingAddressLine1 = value.billingAddressLine1;
    this.switchService.addressObj.billingAddressLine2 = value.billingAddressLine2;
    this.switchService.addressObj.billingCity = value.billingCity;
    this.switchService.addressObj.billingCountry = value.billingCountry;
    this.switchService.addressObj.billingPostCode = value.billingPostCode;
    this.router.navigate([this.switchType + '/payment-details']);
  }
  updateForm(value: any): void {
    this.switchService.addressObj.residentialStatus = value.residentialStatus;
    this.switchService.addressObj.yearsAtProperty = value.yearsAtProperty;
    this.switchService.addressObj.monthsAtProperty = value.monthsAtProperty;
    this.switchService.addressObj.prevAddressLine1 = value.prevAddressLine1;
    this.switchService.addressObj.prevAddressLine2 = value.prevAddressLine2;
    this.switchService.addressObj.prevCity = value.prevCity;
    this.switchService.addressObj.prevCountry = value.prevCountry;
    this.switchService.addressObj.prevPostCode = value.prevPostCode;
    this.switchService.addressObj.checkBillingAddress = value.checkBillingAddress;

    this.switchService.addressObj.billingAddressLine1 = value.billingAddressLine1;
    this.switchService.addressObj.billingAddressLine2 = value.billingAddressLine2;
    this.switchService.addressObj.billingCity = value.billingCity;
    this.switchService.addressObj.billingCountry = value.billingCountry;
    this.switchService.addressObj.billingPostCode = value.billingPostCode;
    this.router.navigate([this.switchType + '/details']);
  }
}
