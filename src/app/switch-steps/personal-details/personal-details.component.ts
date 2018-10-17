import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../../switch.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

declare var $: any;


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
  constructor(private router: Router, public switchService: SwitchService, private fb: FormBuilder, public spinner: NgxSpinnerService) {
    this.switchForm = this.fb.group({
      'name': ['', Validators.required],
      'companyName': ['', Validators.required],
      'companyType': ['', Validators.required],
      'companyRegNo': ['', Validators.required],
      'terms': [''],
      'mobileNo': ['', Validators.compose([Validators.required, Validators.maxLength(20),
      Validators.pattern(/^[\s\d]+$/)])],
      'emailGroup': this.fb.group({
        'emailAddress': ['',
          Validators.compose([Validators.required, Validators.email])],
        'confirmEmailAddress': ['',
          Validators.compose([Validators.required, Validators.email])],
      }, { validator: this.emailMatcher }),
      'passwordGroup': this.fb.group({
        'password': ['', Validators.compose([Validators.required])],
        'confirmPassword': ['', Validators.compose([Validators.required])],
      }, { validator: this.passwordMatcher })

    }, { validator: termsRequired });

    this.loginForm = this.fb.group({
      'emailAddress': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.required]
    });

  }
  emailMatcher = (control: AbstractControl): { [key: string]: boolean } => {
    const email = control.get('emailAddress');
    const confirm = control.get('confirmEmailAddress');
    if (!email || !confirm) {

      return null;
    }
    else if (email.value === confirm.value && email.touched) {
      this.switchService.checkEmail({ email: email.value }).subscribe(
        (data: any) => {
          this.spinner.hide();
          if (data.count > 0) {
            this.emailError = "Email - " + email.value + " already registered. Please login to continue.";
            $("#loginModal").modal("show");
            return { emailExists: true };
          }
          else {
            return null;
          }
        }
      )
    }
    else {
      return { nomatch: true }
    }

  };


  passwordMatcher = (control: AbstractControl): { [key: string]: boolean } => {
    const password = control.get('password');
    const confirm = control.get('confirmPassword');
    if (!password || !confirm) return null;
    return password.value === confirm.value ? null : { nomatch: true };
  };

  ngOnInit() {
    if (localStorage.getItem("stepsId") !== null) {
      this.switchService.getSteps({ stepsId: localStorage.getItem("stepsId") }).subscribe(
        (data: any) => {
          this.switchService.step1Obj = data.step1Obj;
          this.switchService.step2Obj = data.step2Obj;
          this.switchService.step3Obj = data.step3Obj;
          this.switchService.currentUrl = data.switchType;
          this.switchType = data.switchType;
          this.spinner.hide();
          if (localStorage.getItem("userId") !== null) {
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
                    'terms': [''],
                    'mobileNo': [data.mobileNo ? data.mobileNo : '',
                    Validators.compose([Validators.required, Validators.maxLength(20),
                    Validators.pattern(/^[\s\d]+$/)])]
                  }, { validator: termsRequired });
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
            this.session = false;
          }

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
          localStorage.setItem('token', data.token);
          location.reload();
          this.router.navigate([this.switchType + '/address-details']);

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
      stepsId: localStorage.getItem("stepsId"),
      userId: localStorage.getItem("userId")
    }
  }


  login(value) {
    var request = {
      emailAddress: value.emailAddress,
      password: value.password
    }
    this.switchService.login(request).subscribe(
      (data: any) => {
        localStorage.setItem('userId', data._id);
        localStorage.setItem('name', data.name);
        localStorage.setItem('token', data.token);
        location.reload();
      },
      err => {
        this.spinner.hide();
        this.error = "Email or password is invalid!";
      },
      () => this.spinner.hide()
    )
  }


}



