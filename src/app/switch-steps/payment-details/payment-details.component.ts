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
  invalidBank: boolean = false;

  constructor(private router: Router, public switchService: SwitchService, private fb: FormBuilder, private spinner: NgxSpinnerService) {
    this.switchForm = fb.group({
      'accountHolderName': ['', Validators.required],
      'sortCode': ['', [Validators.pattern(/^(?!(?:0{6}|00-00-00))(?:\d{6}|\d\d-\d\d-\d\d)$/), Validators.required]],
      'accountNumber': ['', [Validators.pattern(/^(\d){7,9}$/), Validators.required]],
      'terms': [''],
      'bankGroup': this.fb.group({
        'bankName': [''],
        'checkManual': [false],
        'manualBankName': [''],
      }, { validator: bankRequired })
    }, { validator: termsRequired });


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
              if (data.paymentObj) {
                this.switchForm = this.fb.group({
                  'accountHolderName': [data.paymentObj.accountHolderName ? data.paymentObj.accountHolderName : '', Validators.required],
                  'sortCode': [data.paymentObj.sortCode ? data.paymentObj.sortCode : ''
                    , [Validators.pattern(/^(?!(?:0{6}|00-00-00))(?:\d{6}|\d\d-\d\d-\d\d)$/), Validators.required]],
                  'accountNumber': [data.paymentObj.accountNumber ? data.paymentObj.accountNumber : ''
                    , [Validators.pattern(/^(\d){7,9}$/), Validators.required]],
                  'terms': [''],
                  'bankGroup': this.fb.group({
                    'bankName': [data.paymentObj.bankName ? data.paymentObj.bankName : ''],
                    'checkManual': [data.paymentObj.checkManual ? data.paymentObj.checkManual : false],
                    'manualBankName': [data.paymentObj.manualBankName ? data.paymentObj.manualBankName : ''],
                  }, { validator: bankRequired })
                }, { validator: termsRequired });
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

  /* onChangeAccountNumber(event) {
    this.switchService.verifyBankAccountNumber({
      sortCode: this.switchForm.controls['sortCode'].value,
      accountNumber: event.value
    }).subscribe(
      (data: any) => {
        this.invalidBank = true;
        console.log(data);

      },
      err => {
        this.spinner.hide()
      },
      () => this.spinner.hide()
    )
  } */

  submitForm(value: any): void {

    var request = {
      stepsId: localStorage.getItem("stepsId"),
      lastStageReached: 'Payment Details'
    }
    this.switchService.updateSteps(request).subscribe();

    var url = this.switchType + '/details';
    this.setValues(value, url);
  }

  updateForm(value: any): void {
    var url = this.switchType + '/details';
    this.setValues(value, url);
  }

  setValues(value: any, url) {
    this.switchService.paymentObj.accountHolderName = value.accountHolderName;
    this.switchService.paymentObj.sortCode = value.sortCode;
    this.switchService.paymentObj.accountNumber = value.accountNumber;
    this.switchService.paymentObj.bankName = value.bankGroup.bankName;
    this.switchService.paymentObj.checkManual = value.bankGroup.checkManual;
    this.switchService.paymentObj.terms = value.terms;
    this.switchService.paymentObj.manualBankName = value.bankGroup.manualBankName;
    this.switchService.paymentObj.userId = localStorage.getItem("userId");
    this.switchService.updateUser({ paymentObj: this.switchService.paymentObj, userId: localStorage.getItem("userId") }).subscribe(

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
