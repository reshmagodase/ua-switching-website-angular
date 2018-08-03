import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../switch.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from '../../home/login.service';
import { ProfileService } from '../../profile/profile.service';
import { NavbarComponent } from '../../navbar/navbar.component';

declare var $: any;

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
  loginForm: FormGroup;
  currentStepObject: any = {};
  error: String;
  session: Boolean;
  emailError: String;
  constructor(private router: Router, public loginService: LoginService, public profileService: ProfileService, public switchService: SwitchService, public fb: FormBuilder, private spinner: NgxSpinnerService) {
    if (localStorage.getItem('userId') && !this.switchService.updateForm) {
      this.getProfile();
    }
    this.setValues();
    this.loginForm = fb.group({
      'emailAddress': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.required]
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

  setValues() {
    this.switchForm = this.fb.group({
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

  clearSession() {
    if (localStorage.getItem("userId") !== null) {
      this.session = true;
    }
    else {
      this.session = false;
    }
  }


  submitForm(value: any): void {



    this.switchService.personalObj.name = value.name;
    this.switchService.personalObj.companyName = value.companyName;
    this.switchService.personalObj.companyType = value.companyType;
    this.switchService.personalObj.companyRegNo = value.companyRegNo;
    this.switchService.personalObj.mobileNo = value.mobileNo;
    this.switchService.personalObj.emailAddress = value.emailGroup.emailAddress;
    this.switchService.personalObj.confirmEmailAddress = value.emailGroup.confirmEmailAddress;
    this.switchService.personalObj.password = value.passwordGroup.password;
    this.switchService.personalObj.confirmPassword = value.passwordGroup.confirmPassword;

    if (localStorage.getItem("userId") == null) {
      this.switchService.registerUser(this.switchService.personalObj).subscribe(
        (data: any) => {
          if (data) {
            if (data.count == 0) {
              localStorage.setItem('userId', data.userId);
              localStorage.setItem('name', data.name);
              $('#loginModal').modal('hide');
              let obj = new NavbarComponent(this.router);
              obj.clearSession();
              this.getProfile();
              this.router.navigate([this.switchType + '/address-details']);
            }
            else {
              this.emailError = "Email already registered. Please login to continue.";
              $("#loginModal").modal("show");
            }


          }
          this.spinner.hide();
        },
        err => {
          this.spinner.hide()
        },
        () => this.spinner.hide()
      )
    }
    else {
      this.router.navigate([this.switchType + '/address-details']);

    }
  }

  updateForm(value: any): void {
    this.switchService.personalObj.name = value.name;
    this.switchService.personalObj.companyName = value.companyName;
    this.switchService.personalObj.companyType = value.companyType;
    this.switchService.personalObj.companyRegNo = value.companyRegNo;
    this.switchService.personalObj.mobileNo = value.mobileNo;
    this.switchService.personalObj.emailAddress = value.emailGroup.emailAddress;
    this.switchService.personalObj.confirmEmailAddress = value.emailGroup.confirmEmailAddress;
    this.switchService.personalObj.password = value.passwordGroup.password;
    this.switchService.personalObj.confirmPassword = value.passwordGroup.confirmPassword;
    this.router.navigate([this.switchType + '/details']);
  }


  login(value) {
    var request = {
      emailAddress: value.emailAddress,
      password: value.password
    }
    this.loginService.login(request).subscribe(
      (data: any) => {
        if (data.code == 200) {
          localStorage.setItem('userId', data.userId);
          localStorage.setItem('name', data.name);
          $('#loginModal').modal('hide');
          let obj = new NavbarComponent(this.router);
          obj.clearSession();
          this.getProfile();
        }
        else {
          this.error = data.message;
        }
        this.spinner.hide();
      },
      err => {
        this.spinner.hide()
      },
      () => this.spinner.hide()
    )
  }
  getProfile() {
    this.clearSession();
    var request = {
      userId: localStorage.getItem('userId')
    }
    this.profileService.getProfile(request).subscribe(
      (data: any) => {
        this.switchService.personalObj = data.details;
        this.switchService.personalObj.confirmPassword = data.details.password;
        this.switchService.personalObj.confirmEmailAddress = data.details.emailAddress;
        this.switchService.addressObj = data.details.addressDetails ? data.details.addressDetails : {};
        this.switchService.paymentObj = data.details.paymentDetails ? data.details.paymentDetails : {};
        this.setValues();
        this.spinner.hide();
      },
      err => {
        this.spinner.hide()
      },
      () => this.spinner.hide()
    )
  }


}


