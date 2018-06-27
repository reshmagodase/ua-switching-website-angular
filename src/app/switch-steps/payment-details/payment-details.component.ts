import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../switch.service';
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

  constructor(private router: Router, private switchService: SwitchService, private fb: FormBuilder, private spinner: NgxSpinnerService) {
    this.switchForm = fb.group({
      'accountHolderName': [
        this.switchService.paymentObj.accountHolderName ? this.switchService.paymentObj.accountHolderName : ''
        , Validators.required],
      'directDebitDay': [
        this.switchService.paymentObj.directDebitDay ? this.switchService.paymentObj.directDebitDay : ''
        , Validators.required],
      'sortCode': [
        this.switchService.paymentObj.sortCode ? this.switchService.paymentObj.sortCode : ''
        , [Validators.pattern(/^(?!(?:0{6}|00-00-00))(?:\d{6}|\d\d-\d\d-\d\d)$/), Validators.required]],
      'accountNumber': [
        this.switchService.paymentObj.accountNumber ? this.switchService.paymentObj.accountNumber : ''
        , [Validators.pattern(/^(\d){8}$/), Validators.required]],
      'terms': [this.switchService.paymentObj.terms ? this.switchService.paymentObj.terms : ''],
      'bankGroup': this.fb.group({
        'bankName': [
          this.switchService.paymentObj.bankName ? this.switchService.paymentObj.bankName : ''],
        'checkManual': [
          this.switchService.paymentObj.checkManual ? this.switchService.paymentObj.checkManual : false],
        'manualBankName': [
          this.switchService.paymentObj.manualBankName ? this.switchService.paymentObj.manualBankName : ''],
      }, { validator: bankRequired })
    }, { validator: termsRequired });


  }


  ngOnInit() {
    if (this.switchService.currentUrl == "") {
      this.router.navigate(['']);
    }
    else {
      this.switchType = this.switchService.currentUrl;
    }
  }

  submitForm(value: any): void {
    this.switchService.paymentObj.accountHolderName = value.accountHolderName;
    this.switchService.paymentObj.directDebitDay = value.directDebitDay;
    this.switchService.paymentObj.sortCode = value.sortCode;
    this.switchService.paymentObj.accountNumber = value.accountNumber;
    this.switchService.paymentObj.bankName = value.bankGroup.bankName;
    this.switchService.paymentObj.checkManual = value.bankGroup.checkManual;
    this.switchService.paymentObj.terms = value.terms;
    this.switchService.paymentObj.manualBankName = value.bankGroup.manualBankName;
    this.router.navigate([this.switchType + '/details']);
  }

  updateForm(value: any): void {
    this.switchService.paymentObj.accountHolderName = value.accountHolderName;
    this.switchService.paymentObj.directDebitDay = value.directDebitDay;
    this.switchService.paymentObj.sortCode = value.sortCode;
    this.switchService.paymentObj.accountNumber = value.accountNumber;
    this.switchService.paymentObj.bankName = value.bankName;
    this.switchService.paymentObj.checkManual = value.checkManual;
    this.switchService.paymentObj.terms = value.terms;
    this.switchService.paymentObj.manualBankName = value.manualBankName;
    this.router.navigate([this.switchType + '/details']);
  }
}
