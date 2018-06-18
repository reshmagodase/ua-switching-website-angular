import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../switch.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

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
        , [Validators.pattern(/^(?!(?:0{6}|00-00-00))(?:\d{6}|\d\d-\d\d-\d\d)$/),Validators.required]],
      'accountNumber': [
        this.switchService.paymentObj.accountNumber ? this.switchService.paymentObj.accountNumber : ''
        , [Validators.pattern(/^(\d){8}$/),Validators.required]],
      'bankName': [
        this.switchService.paymentObj.bankName ? this.switchService.paymentObj.bankName : ''],
      'checkManual': [
        this.switchService.paymentObj.checkManual ? this.switchService.paymentObj.checkManual : false],
      'terms': [
        this.switchService.paymentObj.terms ? this.switchService.paymentObj.terms : '', Validators.required],
      'manualBankName': [
        this.switchService.paymentObj.manualBankName ? this.switchService.paymentObj.manualBankName : '']
    });


  }


  ngOnInit() {
     if (this.switchService.currentUrl == "") {
       this.router.navigate(['']);
     }
     else {
       this.switchType = this.switchService.currentUrl.replace('/', '');
     }
  }

  submitForm(value: any): void {
    alert(value.directDebitDay);
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
