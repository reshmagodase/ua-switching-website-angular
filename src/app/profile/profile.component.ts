import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { SwitchService } from '../switch.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private router: Router, public profileService: ProfileService, public switchService: SwitchService, private fb: FormBuilder, private spinner: NgxSpinnerService) {
    if (localStorage.getItem('userId')) {
      this.getProfile();

    }
  }

  ngOnInit() {
  }



  getProfile() {
    var request = {
      userId: localStorage.getItem('userId')
    }
    this.profileService.getProfile(request).subscribe(
      (data: any) => {
        console.log(data);
        this.switchService.personalObj = data.details;
        this.switchService.addressObj = data.details.addressDetails ? data.details.addressDetails : {}
        this.switchService.paymentObj = data.details.paymentDetails ? data.details.paymentDetails : {};
        console.log(this.switchService);
        this.spinner.hide();
      },
      err => {
        this.spinner.hide()
      },
      () => this.spinner.hide()
    )
  }


}
