import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../switch.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  switchType: string = '';
  constructor(private router: Router, private switchService: SwitchService, private fb: FormBuilder, private spinner: NgxSpinnerService) {

  }

  ngOnInit() {
    this.switchService.updateForm = false;
    if (this.switchService.currentUrl == "") {
      this.router.navigate(['']);
    }
    else {
      this.switchType = this.switchService.currentUrl.replace('/', '');
    }
  }

  openPage(page: string) {
    this.switchService.updateForm = true;
    this.router.navigate([this.switchType + '/' + page]);
  }
  submitDetails() {

  }
}
