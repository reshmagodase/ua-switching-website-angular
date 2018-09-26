import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../switch.service';
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
  constructor(private router: Router, public switchService: SwitchService,
    private fb: FormBuilder, private spinner: NgxSpinnerService) {
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
