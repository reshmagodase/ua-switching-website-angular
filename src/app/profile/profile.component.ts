import { Component, OnInit } from '@angular/core';
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
  switchingHistory: any;
  constructor(private router: Router, public switchService: SwitchService, private fb: FormBuilder, private spinner: NgxSpinnerService) {

  }

  ngOnInit() {
    if (localStorage.getItem('userId') !== null) {
      this.switchService.getUser({ userId: localStorage.getItem('userId') }).subscribe(
        (data: any) => {
          if (data) {
            this.switchService.personalObj = data;
            this.switchService.addressObj = data.addressObj ? data.addressObj : {};
            this.switchService.paymentObj = data.paymentObj ? data.paymentObj : {};
          }
          this.spinner.hide();
        },
        err => {
          this.spinner.hide()
        },
        () => this.spinner.hide()
      )
      this.switchService.getQuotations({ userId: localStorage.getItem('userId') }).subscribe(
        (data: any) => {
          if (data) {
            console.log("history", data)
            this.switchingHistory = data;
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

  downloadPDF(supplier, supplyType, refID) {
    var json = {
      supplier: supplier,
      supplyType: supplyType,
      refID: refID
    }
    this.switchService.getDocuSignPDF(json).subscribe(
      (pdfData: any) => {
        this.spinner.hide();


        var byteArray = new Uint8Array(pdfData);
        var blob = new Blob([byteArray], { type: "application/pdf" });
        var objectURL = URL.createObjectURL(blob);
        var a = document.createElement("a");
        var date = new Date();
        a.download = supplier + " - " + supplyType + " " + date.getFullYear() + (date.getMonth() + 1) + date.getDate() + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds() + ".pdf";
        a.href = objectURL;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

      })



  }
}