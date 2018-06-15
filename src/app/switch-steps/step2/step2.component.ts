import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../switch.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';
import {NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})


export class Step2Component implements OnInit {

  switchType: string = '';
  switchForm: FormGroup;
  showhideCurrentSupplier: boolean;
  annualSpend: string;
  annualUsage: string;

  constructor(private router: Router, private switchService: SwitchService, private fb: FormBuilder) {
    this.switchForm = fb.group({
      'annualSpend': [
        this.switchService.step2Obj.annualSpend ? this.switchService.step2Obj.annualSpend : '']
      ,
      'annualUsage': [
        this.switchService.step2Obj.annualUsage ? this.switchService.step2Obj.annualUsage : ''],
      'contractStartDate': [
        this.switchService.step2Obj.contractStartDate ? this.switchService.step2Obj.contractStartDate : ''
        , Validators.required],
      'currentSupplier': [
        this.switchService.step2Obj.currentSupplier ? this.switchService.step2Obj.currentSupplier : ''],
      'manualCurrentSupplier': [
        this.switchService.step2Obj.manualCurrentSupplier ? this.switchService.step2Obj.manualCurrentSupplier : ''],
      'billingType': [
        this.switchService.step2Obj.billingType ? this.switchService.step2Obj.billingType : ''
        , Validators.required],
      'smartMeter': [
        this.switchService.step2Obj.smartMeter ? this.switchService.step2Obj.smartMeter : ''],
      'checkManual': [this.switchService.step2Obj.checkManual ? this.switchService.step2Obj.checkManual : false]
    });
    this.annualSpend= this.switchService.step2Obj.annualSpend ? this.switchService.step2Obj.annualSpend : '';
    this.annualUsage= this.switchService.step2Obj.annualUsage ? this.switchService.step2Obj.annualUsage : '';
    
    this.showhideCurrentSupplier = this.switchService.step2Obj.checkManual ? this.switchService.step2Obj.checkManual : false;
  }


  submitForm(value: any, step: number): void {
    this.switchService.step2Obj.annualSpend = value.annualSpend ? value.annualSpend : '';
    this.switchService.step2Obj.annualUsage = value.annualUsage ? value.annualUsage : '';
    this.switchService.step2Obj.contractStartDate = value.contractStartDate;
    this.switchService.step2Obj.currentSupplier = value.currentSupplier;
    this.switchService.step2Obj.manualCurrentSupplier = value.manualCurrentSupplier;
    this.switchService.step2Obj.checkManual = value.checkManual;
    this.switchService.step2Obj.billingType = value.billingType;
    this.switchService.step2Obj.smartMeter = value.smartMeter;
    this.switchService.step2Obj.consumption = value.annualSpend ? value.annualSpend * 100 : value.annualUsage;
    this.switchService.step2Obj.spendAmount = value.annualSpend ? value.annualSpend : value.annualUsage / 100;

    if (this.switchForm.valid && step == 3) {
      this.router.navigate([this.switchType + '/pricing-list']);
      this.switchService.step2Obj.completed = true;
    }
    else if (step == 1) {
      this.router.navigate([this.switchType]);
    }
  }


  ngOnInit() {
    console.log(this.switchService.step2Obj.annualSpend);
    if (this.switchService.currentUrl == "") {
      this.router.navigate(['']);
    }
    else {
      this.switchType = this.switchService.currentUrl.replace('/', '');
    }
  }


}
