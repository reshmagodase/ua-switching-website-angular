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
    this.switchForm = fb.group({
      'residentialStatus': ['', Validators.required],
      'yearsAtProperty': ['', Validators.required],
      'monthsAtProperty': ['', Validators.required],
      'prevAddressLine1': [''],
      'prevAddressLine2': [''],
      'prevCity': [''],
      'prevCountry': [''],
      'prevPostCode': [''],
      'checkBillingAddress': [false],
      'billingAddressLine1': [''],
      'billingAddressLine2': [''],
      'billingCity': [''],
      'billingCountry': [''],
      'billingPostCode': ['']
    });

  }

  ngOnInit() {
    if (localStorage.getItem("stepsId") !== null && localStorage.getItem("userId") !== null) {
      this.switchService.getSteps({ stepsId: localStorage.getItem("stepsId") }).subscribe(
        (data: any) => {
          this.switchService.step1Obj = data.step1Obj;
          this.switchService.step2Obj = data.step2Obj;
          this.switchService.step3Obj = data.step3Obj;
          this.switchService.currentUrl = data.switchType;
          this.switchType = data.switchType;
          this.spinner.hide();
          this.switchService.getUser({ userId: localStorage.getItem('userId') }).subscribe(
            (data: any) => {
              this.switchService.personalObj = data;
              this.switchService.addressObj = data.addressObj ? data.addressObj : {};
              this.switchService.paymentObj = data.paymentObj ? data.paymentObj : {};

              if (data.addressObj) {
                this.switchForm = this.fb.group({
                  'residentialStatus': [data.addressObj.residentialStatus ? data.addressObj.residentialStatus : '', Validators.required],
                  'yearsAtProperty': [data.addressObj.yearsAtProperty ? data.addressObj.yearsAtProperty : '', Validators.required],
                  'monthsAtProperty': [data.addressObj.monthsAtProperty ? data.addressObj.monthsAtProperty : '', Validators.required],
                  'prevAddressLine1': [data.addressObj.prevAddressLine1 ? data.addressObj.prevAddressLine1 : ''],
                  'prevAddressLine2': [data.addressObj.prevAddressLine2 ? data.addressObj.prevAddressLine2 : ''],
                  'prevCity': [data.addressObj.prevCity ? data.addressObj.prevCity : ''],
                  'prevCountry': [data.addressObj.prevCountry ? data.addressObj.prevCountry : ''],
                  'prevPostCode': [data.addressObj.prevPostCode ? data.addressObj.prevPostCode : ''],
                  'checkBillingAddress': [data.addressObj.checkBillingAddress ? data.addressObj.checkBillingAddress : false],
                  'billingAddressLine1': [data.addressObj.billingAddressLine1 ? data.addressObj.billingAddressLine1 : ''],
                  'billingAddressLine2': [data.addressObj.billingAddressLine2 ? data.addressObj.billingAddressLine2 : ''],
                  'billingCity': [data.addressObj.billingCity ? data.addressObj.billingCity : ''],
                  'billingCountry': [data.addressObj.billingCountry ? data.addressObj.billingCountry : ''],
                  'billingPostCode': [data.addressObj.billingPostCode ? data.addressObj.billingPostCode : '']
                });
              }

              this.spinner.hide();
            },
            err => {
              this.spinner.hide()
            },
            () => this.spinner.hide()
          )

        },
        err => {
          this.spinner.hide()
        },
        () => this.spinner.hide()
      )
    }
    else {
      this.router.navigate(['']);
    }


  }


  submitForm(value: any): void {
    var request = {
      stepsId: localStorage.getItem("stepsId"),
      lastStageReached: 'Address Details'
    }
    this.switchService.updateSteps(request).subscribe();

    var url = this.switchType + '/payment-details';
    this.setAddressObj(value, url);

  }
  updateForm(value: any): void {
    var url = this.switchType + '/details';
    this.setAddressObj(value, url);

  }

  setAddressObj(value, url) {
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
    this.switchService.updateUser({ addressObj: this.switchService.addressObj, userId: localStorage.getItem("userId") }).subscribe(
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
