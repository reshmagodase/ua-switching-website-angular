import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../../switch.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

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
  constructor(private router: Router, public switchService: SwitchService, public fb: FormBuilder, public spinner: NgxSpinnerService) {
    this.switchForm = this.fb.group({
      'name': ['', Validators.required],
      'companyName': ['', Validators.required],
      'companyType': ['', Validators.required],
      'companyRegNo': ['', Validators.required],
      'mobileNo': ['', Validators.compose([Validators.required])],
      'emailGroup': this.fb.group({
        'emailAddress': ['',
          Validators.compose([Validators.required, Validators.email])],
        'confirmEmailAddress': ['',
          Validators.compose([Validators.required, Validators.email])],
      }, { validator: emailMatcher }),
      'passwordGroup': this.fb.group({
        'password': ['', Validators.compose([Validators.required])],
        'confirmPassword': ['', Validators.compose([Validators.required])],
      }, { validator: passwordMatcher })

    });

    this.loginForm = this.fb.group({
      'emailAddress': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.required]
    });

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
          this.session = true;
          this.switchService.getUser({ userId: localStorage.getItem('userId') }).subscribe(
            (data: any) => {

              if (data) {
                this.switchService.personalObj = data;
                this.switchService.addressObj = data.addressObj ? data.addressObj : {};
                this.switchService.paymentObj = data.paymentObj ? data.paymentObj : {};
                this.switchForm = this.fb.group({
                  'name': [data.name ? data.name : '', Validators.required],
                  'companyName': [data.companyName ? data.companyName : '', Validators.required],
                  'companyType': [data.companyType ? data.companyType : '', Validators.required],
                  'companyRegNo': [data.companyRegNo ? data.companyRegNo : '', Validators.required],
                  'mobileNo': [data.mobileNo ? data.mobileNo : '', Validators.compose([Validators.required])]
                });
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



  submitForm(value: any): void {
    this.setValues(value);


    if (localStorage.getItem("userId") == null) {
      this.switchService.personalObj.emailAddress = value.emailGroup.emailAddress;
      this.switchService.personalObj.confirmEmailAddress = value.emailGroup.confirmEmailAddress;
      this.switchService.personalObj.password = value.passwordGroup.password;
      this.switchService.personalObj.confirmPassword = value.passwordGroup.confirmPassword;
      this.switchService.registerUser(this.switchService.personalObj).subscribe(
        (data: any) => {
          localStorage.setItem('userId', data._id);
          localStorage.setItem('name', data.name);
          this.router.navigate([this.switchType + '/address-details']);
          /*     this.emailError = "Email already registered. Please login to continue.";
              $("#loginModal").modal("show"); */
          this.spinner.hide();
        },
        err => {
          this.spinner.hide()
        },
        () => this.spinner.hide()
      )
    }
    else {
      this.switchService.personalObj.userId = localStorage.getItem("userId");
      this.switchService.updateUser(this.switchService.personalObj).subscribe(
        (data: any) => {
          this.router.navigate([this.switchType + '/address-details']);
          this.spinner.hide();
        },
        err => {
          this.spinner.hide()
        },
        () => this.spinner.hide()
      )

    }
  }


  updateForm(value: any): void {
    this.setValues(value)
    this.switchService.updateUser(this.switchService.personalObj).subscribe(
      (data: any) => {
        this.router.navigate([this.switchType + '/details']);
        this.spinner.hide();
      },
      err => {
        this.spinner.hide()
      },
      () => this.spinner.hide()
    )
  }

  setValues(value) {
    this.switchService.personalObj = {
      name: value.name,
      companyName: value.companyName,
      companyType: value.companyType,
      companyRegNo: value.companyRegNo,
      mobileNo: value.mobileNo,
      stepsId: localStorage.getItem("stepsId")
    }
  }


  login(value) {
    var request = {
      emailAddress: value.emailAddress,
      password: value.password
    }
    this.switchService.login(request).subscribe(
      (data: any) => {
        if (data.code == 200) {
          localStorage.setItem('userId', data.userId);
          localStorage.setItem('name', data.name);
          location.reload();
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


}


