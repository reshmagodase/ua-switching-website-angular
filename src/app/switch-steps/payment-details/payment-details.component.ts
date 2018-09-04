import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../../switch.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

export const bankRequired = (control: AbstractControl): { [key: string]: boolean } => {
  const bankName = control.get('bankName');
  const manualBankName = control.get('manualBankName');
  const checkManual = control.get('checkManual');
  if (!bankName.value && !manualBankName.value) {
    return { required: true };
  }
  else if (checkManual.value && !manualBankName.value) {
    return { required: true };
  }
  else if (!checkManual.value && !bankName.value) {
    return { required: true };
  }
  else {
    return null;
  }
};


export const termsRequired = (control: AbstractControl): { [key: string]: boolean } => {
  const terms = control.get('terms');
  if (!terms.value) {
    return { required: true };
  }
  else {
    return null;
  }
};

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
  switchType: string = '';
  switchForm: FormGroup;

  constructor(private router: Router, public switchService: SwitchService, private fb: FormBuilder, private spinner: NgxSpinnerService) {
    var paymentObj = this.switchService.paymentObj;
    this.switchForm = fb.group({
      'accountHolderName': [
        paymentObj.accountHolderName ? paymentObj.accountHolderName : ''
        , Validators.required],
      'sortCode': [
        paymentObj.sortCode ? paymentObj.sortCode : ''
        , [Validators.pattern(/^(?!(?:0{6}|00-00-00))(?:\d{6}|\d\d-\d\d-\d\d)$/), Validators.required]],
      'accountNumber': [
        paymentObj.accountNumber ? paymentObj.accountNumber : ''
        , [Validators.pattern(/^(\d){8}$/), Validators.required]],
      'terms': [paymentObj.terms ? paymentObj.terms : ''],
      'bankGroup': this.fb.group({
        'bankName': [
          paymentObj.bankName ? paymentObj.bankName : ''],
        'checkManual': [
          paymentObj.checkManual ? paymentObj.checkManual : false],
        'manualBankName': [
          paymentObj.manualBankName ? paymentObj.manualBankName : ''],
      }, { validator: bankRequired })
    }, { validator: termsRequired });


  }


  ngOnInit() {
    if (localStorage.getItem("userId") !== null) {
      this.switchType = this.switchService.currentUrl;
    }
    else {
      this.router.navigate(['']);
    }
  }

  submitForm(value: any): void {
    var url=this.switchType + '/details';
    this.setValues(value,url);
  }

  updateForm(value: any): void {
    var url=this.switchType + '/details';
    this.setValues(value,url);
  }

  setValues(value: any,url) {
    this.switchService.paymentObj.accountHolderName = value.accountHolderName;
    this.switchService.paymentObj.sortCode = value.sortCode;
    this.switchService.paymentObj.accountNumber = "0" + value.accountNumber;
    this.switchService.paymentObj.bankName = value.bankGroup.bankName;
    this.switchService.paymentObj.checkManual = value.bankGroup.checkManual;
    this.switchService.paymentObj.terms = value.terms;
    this.switchService.paymentObj.manualBankName = value.bankGroup.manualBankName;
    this.switchService.paymentObj.userId=localStorage.getItem("userId");
    this.switchService.updateUser(this.switchService.paymentObj).subscribe(
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
