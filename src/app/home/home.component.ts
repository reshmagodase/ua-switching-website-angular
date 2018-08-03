import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  error: String;
  session: Boolean = true;
  constructor(private router: Router, public loginService: LoginService, private fb: FormBuilder, private spinner: NgxSpinnerService) {
    this.loginForm = fb.group({
      'emailAddress': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
    if (localStorage.getItem("userId") !== null) {
      this.session = true;
    }
    else {
      this.session = false;
    }
  }


  login(value) {
    var request = {
      emailAddress: value.emailAddress,
      password: value.password
    }
    this.loginService.login(request).subscribe(
      (data: any) => {
        console.log(data);
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
