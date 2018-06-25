import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../switch.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

function passwordConfirming(c: AbstractControl): any {
  if (!c.parent || !c) return null;
  const pwd = c.parent.get('confirmPassword');
  const cpwd = c.parent.get('password')

  if (!pwd || !cpwd) return null;
  if (pwd.value === cpwd.value) {
    return null
  }
  else { return { confirm: false } };
}
function emailConfirming(c: AbstractControl): any {
  if (!c.parent || !c) return null;
  const eml = c.parent.get('emailAddress');
  const ceml = c.parent.get('confirmEmailAddress')

  if (!eml || !ceml) return null;


  if (eml.value === ceml.value) {
    return null
  }
  else { return { confirm: false } };

}
@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  switchType: string = '';
  switchForm: FormGroup;
  currentStepObject: any = {};
  constructor(private router: Router, private switchService: SwitchService, private fb: FormBuilder, private spinner: NgxSpinnerService) {
    this.switchForm = fb.group({
      'name': [
        this.switchService.personalObj.name ? this.switchService.personalObj.name : ''
        , Validators.required],
      'companyName': [
        this.switchService.personalObj.companyName ? this.switchService.personalObj.companyName : ''
        , Validators.required],
      'companyType': [
        this.switchService.personalObj.companyType ? this.switchService.personalObj.companyType : ''
        , Validators.required],
      'companyRegNo': [
        this.switchService.personalObj.companyRegNo ? this.switchService.personalObj.companyRegNo : ''
        , Validators.required],
      'mobileNo': [
        this.switchService.personalObj.mobileNo ? this.switchService.personalObj.mobileNo : ''
        , Validators.required],
      'emailAddress': [
        this.switchService.personalObj.emailAddress ? this.switchService.personalObj.emailAddress : ''
        , Validators.compose([Validators.required, Validators.email])],
      'confirmEmailAddress': [
        this.switchService.personalObj.confirmEmailAddress ? this.switchService.personalObj.confirmEmailAddress : ''
        , Validators.compose([Validators.required, Validators.email, emailConfirming])],
      'password': [
        this.switchService.personalObj.password ? this.switchService.personalObj.password : ''
        , Validators.compose([Validators.required])],
      'confirmPassword': [
        this.switchService.personalObj.confirmPassword ? this.switchService.personalObj.confirmPassword : ''
        , Validators.compose([Validators.required, passwordConfirming])],

    });

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
    console.log(this.switchForm);
    this.switchService.personalObj.name = value.name;
    this.switchService.personalObj.companyName = value.companyName;
    this.switchService.personalObj.companyType = value.companyType;
    this.switchService.personalObj.companyRegNo = value.companyRegNo;
    this.switchService.personalObj.mobileNo = value.mobileNo;
    this.switchService.personalObj.emailAddress = value.emailAddress;
    this.switchService.personalObj.confirmEmailAddress = value.confirmEmailAddress;
    this.switchService.personalObj.password = value.password;
    this.switchService.personalObj.confirmPassword = value.confirmPassword;
    this.router.navigate([this.switchType + '/address-details']);
  }

  updateForm(value: any): void {
    this.switchService.personalObj.name = value.name;
    this.switchService.personalObj.companyName = value.companyName;
    this.switchService.personalObj.companyType = value.companyType;
    this.switchService.personalObj.companyRegNo = value.companyRegNo;
    this.switchService.personalObj.mobileNo = value.mobileNo;
    this.switchService.personalObj.emailAddress = value.emailAddress;
    this.switchService.personalObj.confirmEmailAddress = value.confirmEmailAddress;
    this.switchService.personalObj.password = value.password;
    this.switchService.personalObj.confirmPassword = value.confirmPassword;
    this.router.navigate([this.switchType + '/details']);
  }
}


