import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../switch.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';


declare var $: any;
export const passwordMatcher = (control: AbstractControl): { [key: string]: boolean } => {
  const oldPassword = control.get('oldPassword');
  const password = control.get('password');
  const confirm = control.get('confirmPassword');
  if (!password || !confirm || !oldPassword) return null;
  if (oldPassword.value == password.value) {
    return { match: true };
  }
  else if (password.value !== confirm.value) {
    return { nomatch: true };
  }
  else {
    return null;
  }
};
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  loginForm: FormGroup;
  error: String;
  session: Boolean = true;
  name: String;
  changePasswordForm: FormGroup;
  constructor(private router: Router, public switchService: SwitchService, private fb: FormBuilder, private spinner: NgxSpinnerService) {
    this.changePasswordForm = this.fb.group({
      'passwordGroup': this.fb.group({
        'oldPassword': ['', Validators.compose([Validators.required])],
        'password': ['', Validators.compose([Validators.required])],
        'confirmPassword': ['', Validators.compose([Validators.required])]
      }, { validator: passwordMatcher })
    });

    this.loginForm = fb.group({
      'emailAddress': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.required]
    });
  }


  ngOnInit() {
    if (localStorage.getItem("userId")) {
      this.session = true;
      this.name = localStorage.getItem("name");
      $(".session").show();
      $(".alreadyLoggedIn").hide();
    }
    else {
      this.session = false;
      $(".session").hide();
      $(".alreadyLoggedIn").show();
    }
    this.switchService.getSuppliers().subscribe(
      (data: any) => {
        localStorage.setItem('suppliers', JSON.stringify(data));
        console.log(JSON.parse(localStorage.getItem("suppliers")))
        this.spinner.hide();
      },
      err => {
        this.spinner.hide()
      },
      () => this.spinner.hide()
    )
  }

  logout() {
    this.switchService.logout().subscribe(
      (data: any) => {
        location.reload();
        this.router.navigate(['']);
        this.spinner.hide();
      },
      err => {
        this.spinner.hide()
      },
      () => this.spinner.hide()
    )


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

  changePassword(value) {
    var request = {
      userId: localStorage.getItem("userId"),
      oldPassword: value.passwordGroup.oldPassword,
      newPassword: value.passwordGroup.password
    }

    this.switchService.changePassword(request).subscribe(
      (data: any) => {
        if (data.code == 200) {
          Swal("", "Password changed successfully! Please login to continue.", "success")

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
