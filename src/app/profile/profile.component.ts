import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../switch.service';
import { Router, NavigationEnd, RoutesRecognized } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { filter, pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  switchingHistory: any = [];
  personalObj: any = {};
  hasSwitched: Boolean = false;
  previousUrl: any = [];
  constructor(private router: Router, public switchService: SwitchService, private fb: FormBuilder, private spinner: NgxSpinnerService) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(({ urlAfterRedirects }: NavigationEnd) => {
      this.previousUrl = [...this.previousUrl, urlAfterRedirects];
      console.log("previous url", localStorage.getItem('previousUrl'));
    });

  }

  ngOnInit() {
    this.personalObj.addressObj = {};
    this.personalObj.paymentObj = {};
    if (localStorage.getItem('previousUrl')) {
      this.previousUrl = localStorage.getItem('previousUrl').toString();
      var filename = this.previousUrl.substring(this.previousUrl.lastIndexOf('/') + 1);
      if (filename == "details") {
        this.hasSwitched = true;
        localStorage.removeItem("previousUrl");
      }
    }

    if (localStorage.getItem('userId') !== null) {
      this.switchService.getUser({ userId: localStorage.getItem('userId') }).subscribe(
        (data: any) => {
          if (data) {
            this.personalObj = data;
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

  switchanotherSupply() {
    //localStorage.removeItem("previousUrl");
    this.router.navigate([""]);
  }
}