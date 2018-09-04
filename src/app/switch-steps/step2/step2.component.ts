import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../../switch.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';
import { DatePipe } from '@angular/common';

export const usageRequired = (control: AbstractControl): { [key: string]: boolean } => {
  const annualSpend = control.get('annualSpend');
  const annualUsage = control.get('annualUsage');
  if (!annualSpend.value && !annualUsage.value) {
    return { required: true };
  }
  else {
    return null;
  }
};

export const supplierRequired = (control: AbstractControl): { [key: string]: boolean } => {
  const currentSupplier = control.get('currentSupplier');
  const manualCurrentSupplier = control.get('manualCurrentSupplier');
  const checkManual = control.get('checkManual');

  if (!currentSupplier.value && !manualCurrentSupplier.value) {
    return { required: true };
  }
  else if (checkManual.value && !manualCurrentSupplier.value) {
    return { required: true };
  }
  else if (!checkManual.value && !currentSupplier.value) {
    return { required: true };
  }
  else {
    return null;
  }
};

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  providers: [DatePipe]
})


export class Step2Component implements OnInit {

  switchType: string = '';
  switchForm: FormGroup;
  annualSpend: string;
  annualUsage: string;

  constructor(private router: Router, public switchService: SwitchService, private fb: FormBuilder, private datePipe: DatePipe) {
    var step2Obj = this.switchService.step2Obj;
    this.switchForm = fb.group({
      'contractEndDate': [step2Obj.contractEndDate ? new Date(step2Obj.contractEndDate) : '', Validators.required],
      'billingType': [step2Obj.billingType ? step2Obj.billingType : '', Validators.required],
      'smartMeter': [step2Obj.smartMeter ? step2Obj.smartMeter : ''],
      'usageGroup': this.fb.group({
        'annualSpend': [step2Obj.annualSpend ? step2Obj.annualSpend : ''],
        'annualUsage': [step2Obj.annualUsage ? step2Obj.annualUsage : ''],
      }, { validator: usageRequired }),
      'supplierGroup': this.fb.group({
        'currentSupplier': [step2Obj.currentSupplier ? step2Obj.currentSupplier : ''],
        'checkManual': [step2Obj.checkManual ? step2Obj.checkManual : false],
        'manualCurrentSupplier': [step2Obj.manualCurrentSupplier ? step2Obj.manualCurrentSupplier : ''],
      }, { validator: supplierRequired })
    });
    this.annualSpend = step2Obj.annualSpend ? step2Obj.annualSpend : '';
    this.annualUsage = step2Obj.annualUsage ? step2Obj.annualUsage : '';
  }

  ngOnInit() {
    if (this.switchService.currentUrl == "") {
      this.router.navigate(['']);
    }
    else {
      this.switchType = this.switchService.currentUrl;
    }
  }


  submitForm(value: any, step: number): void {
    var pence = 0;
    if (this.switchType == "electricity") {
      pence = 13;
    }
    else {
      pence = 3.5;
    }
    this.switchService.step2Obj = {
      annualSpend: value.usageGroup.annualSpend ? value.usageGroup.annualSpend : '',
      annualUsage: value.usageGroup.annualUsage ? value.usageGroup.annualUsage : '',
      contractEndDate: value.contractEndDate,
      currentSupplier: value.supplierGroup.currentSupplier,
      manualCurrentSupplier: value.supplierGroup.manualCurrentSupplier,
      checkManual: value.supplierGroup.checkManual,
      billingType: value.billingType,
      smartMeter: value.smartMeter,
      consumption: value.usageGroup.annualSpend ? (value.usageGroup.annualSpend / (pence / 100)).toFixed(0) : value.usageGroup.annualUsage,
      spendAmount: value.usageGroup.annualSpend ? value.usageGroup.annualSpend : ((value.usageGroup.annualUsage * pence) / 100).toFixed(0)
    }
    if (this.switchForm.valid && step == 3) {
      this.router.navigate([this.switchType + '/pricing-list']);
    }
    else if (step == 1) {
      this.router.navigate([this.switchType]);
    }
  }




}
