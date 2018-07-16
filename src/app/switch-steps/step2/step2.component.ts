import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../switch.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';
import { NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';


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
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }]
})


export class Step2Component implements OnInit {

  switchType: string = '';
  switchForm: FormGroup;
  annualSpend: string;
  annualUsage: string;

  constructor(private router: Router, public switchService: SwitchService, private fb: FormBuilder) {
    this.switchForm = fb.group({

      'contractStartDate': [
        this.switchService.step2Obj.contractStartDate ? this.switchService.step2Obj.contractStartDate : ''
        , Validators.required],

      'billingType': [
        this.switchService.step2Obj.billingType ? this.switchService.step2Obj.billingType : ''
        , Validators.required],
      'smartMeter': [
        this.switchService.step2Obj.smartMeter ? this.switchService.step2Obj.smartMeter : ''],
      'usageGroup': this.fb.group({
        'annualSpend': [
          this.switchService.step2Obj.annualSpend ? this.switchService.step2Obj.annualSpend : ''],
        'annualUsage': [
          this.switchService.step2Obj.annualUsage ? this.switchService.step2Obj.annualUsage : ''],
      }, { validator: usageRequired }),
      'supplierGroup': this.fb.group({
        'currentSupplier': [
          this.switchService.step2Obj.currentSupplier ? this.switchService.step2Obj.currentSupplier : ''],
        'checkManual': [this.switchService.step2Obj.checkManual ? this.switchService.step2Obj.checkManual : false],
        'manualCurrentSupplier': [
          this.switchService.step2Obj.manualCurrentSupplier ? this.switchService.step2Obj.manualCurrentSupplier : ''],
      }, { validator: supplierRequired })
    });
    this.annualSpend = this.switchService.step2Obj.annualSpend ? this.switchService.step2Obj.annualSpend : '';
    this.annualUsage = this.switchService.step2Obj.annualUsage ? this.switchService.step2Obj.annualUsage : '';

  }


  submitForm(value: any, step: number): void {
    this.switchService.step2Obj.annualSpend = value.usageGroup.annualSpend ? value.usageGroup.annualSpend : '';
    this.switchService.step2Obj.annualUsage = value.usageGroup.annualUsage ? value.usageGroup.annualUsage : '';
    this.switchService.step2Obj.contractStartDate = value.contractStartDate;
    this.switchService.step2Obj.currentSupplier = value.supplierGroup.currentSupplier;
    this.switchService.step2Obj.manualCurrentSupplier = value.supplierGroup.manualCurrentSupplier;
    this.switchService.step2Obj.checkManual = value.supplierGroup.checkManual;
    this.switchService.step2Obj.billingType = value.billingType;
    this.switchService.step2Obj.smartMeter = value.smartMeter;
    var pence = 0;
    if (this.switchType == "electricity") {
      pence = 13;
    }
    else {
      pence = 3.5;
    }
    this.switchService.step2Obj.consumption = value.usageGroup.annualSpend ? (value.usageGroup.annualSpend / (pence / 100)).toFixed(0) : value.usageGroup.annualUsage;
    this.switchService.step2Obj.spendAmount = value.usageGroup.annualSpend ? value.usageGroup.annualSpend : ((value.usageGroup.annualUsage * pence) / 100).toFixed(0);

    if (this.switchForm.valid && step == 3) {
      this.router.navigate([this.switchType + '/pricing-list']);
      this.switchService.step2Obj.completed = true;
    }
    else if (step == 1) {
      this.router.navigate([this.switchType]);
    }
  }


  ngOnInit() {
    if (this.switchService.currentUrl == "") {
      this.router.navigate(['']);
    }
    else {
      this.switchType = this.switchService.currentUrl;
    }
  }


}
