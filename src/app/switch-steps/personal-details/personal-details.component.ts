import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../switch.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';



export const emailMatcher = (control: AbstractControl): { [key: string]: boolean } => {
  const email = control.get('emailAddress');
  const confirm = control.get('confirmEmailAddress');
  if (!email || !confirm) return null;
  return email.value === confirm.value ? null : { nomatch: true };
};
export const passwordMatcher = (control: AbstractControl): { [key: string]: boolean } => {
  const password = control.get('password');
  const confirm = control.get('confirmPassword');
  if (!password || !confirm) return null;
  return password.value === confirm.value ? null : { nomatch: true };
};


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  switchType: string = '';
  switchForm: FormGroup;
  currentStepObject: any = {};
  constructor(private router: Router, public switchService: SwitchService, private fb: FormBuilder, private spinner: NgxSpinnerService) {
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
        , Validators.compose([Validators.required])],

      'emailGroup': this.fb.group({
        'emailAddress': [
          this.switchService.personalObj.emailAddress ? this.switchService.personalObj.emailAddress : ''
          , Validators.compose([Validators.required, Validators.email])],
        'confirmEmailAddress': [
          this.switchService.personalObj.confirmEmailAddress ? this.switchService.personalObj.confirmEmailAddress : ''
          , Validators.compose([Validators.required, Validators.email])],
      }, { validator: emailMatcher }),
      'passwordGroup': this.fb.group({
        'password': [
          this.switchService.personalObj.password ? this.switchService.personalObj.password : ''
          , Validators.compose([Validators.required])],
        'confirmPassword': [
          this.switchService.personalObj.confirmPassword ? this.switchService.personalObj.confirmPassword : ''
          , Validators.compose([Validators.required])],
      }, { validator: passwordMatcher })

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
    this.switchService.personalObj.emailAddress = value.emailGroup.emailAddress;
    this.switchService.personalObj.confirmEmailAddress = value.emailGroup.confirmEmailAddress;
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
    this.switchService.personalObj.emailAddress = value.emailGroup.emailAddress;
    this.switchService.personalObj.confirmEmailAddress = value.emailGroup.confirmEmailAddress;
    this.switchService.personalObj.password = value.password;
    this.switchService.personalObj.confirmPassword = value.confirmPassword;
    this.router.navigate([this.switchType + '/details']);
  }
}


