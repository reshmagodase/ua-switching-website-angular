import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../switch.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

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
  else{
    return null;
  }
};
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  session: Boolean = true;
  name: String;
  changePasswordForm: FormGroup;
  error: String;
  constructor(private router: Router, public switchService: SwitchService, private fb: FormBuilder, private spinner: NgxSpinnerService) {
    this.changePasswordForm = this.fb.group({
      'passwordGroup': this.fb.group({
        'oldPassword': ['', Validators.compose([Validators.required])],
        'password': ['', Validators.compose([Validators.required])],
        'confirmPassword': ['', Validators.compose([Validators.required])]
      }, { validator: passwordMatcher })
    });
  }


  ngOnInit() {
    if (localStorage.getItem("userId") !== null) {
      this.session = true;
      this.name = localStorage.getItem("name");
      $(".session").show();
    }
    else {
      this.session = false;
      $(".session").hide();
    }
  }

  logout() {
    this.switchService.logout().subscribe(
      (data: any) => {
        location.reload();
        this.router.navigate(['/']);
        this.spinner.hide();
      },
      err => {
        this.spinner.hide()
      },
      () => this.spinner.hide()
    )

   
  }



  changePassword(value) {
    var request = {
      emailAddress: value.emailAddress,
      password: value.password
    }
    this.switchService.login(request).subscribe(
      (data: any) => {
        if (data.code == 200) {
          localStorage.setItem('userId', data.userId);
          localStorage.setItem('name', data.name);
          this.logout();
          
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
