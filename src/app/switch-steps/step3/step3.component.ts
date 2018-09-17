import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../../switch.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html'
})
export class Step3Component implements OnInit {
  currentStepObject: any = {};
  switchType: string = '';
  prices: any;
  spendAmount: string;
  supplierList: any;
  constructor(private router: Router, public switchService: SwitchService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.supplierList = JSON.parse(localStorage.getItem("suppliers"));
    this.spendAmount = this.switchService.step2Obj.spendAmount;
    if (this.switchService.currentUrl == "") {
      this.router.navigate(['']);
    }
    else {
      this.switchType = this.switchService.currentUrl;
    }
    this.getPriceList();
  }


  getPriceList() {
    var request = {};
    if (this.switchType == 'electricity') {
      request = {
        ElectricSupply: {
          DayConsumption: { Amount: this.switchService.step2Obj.consumption, Type: "Day" },
          MPANTop: this.switchService.step1Obj.MPANTopLineNo,
          MPANBottom: this.switchService.step1Obj.MPANBottomLineNo
        },
        PaymentMethod: this.switchService.step2Obj.billingType
      }
      this.switchService.getElectricPricesList(request).subscribe(
        (data: any) => {
          if (data.GetElectricRatesResult.Rates.length > 1) {
            this.prices = data.GetElectricRatesResult.Rates;
            this.switchService.step3Obj.prices = this.prices;
          }
          else {
            Swal("No rates found for this meter. Please check that you have entered the correct details.");
            this.spinner.hide()
          }
        },
        err => this.spinner.hide(),
        () => this.spinner.hide()
      );
    }
    else {
      request = {
        GasSupply: {
          Consumption: { Amount: this.switchService.step2Obj.consumption, Type: "Day" },
          MPR: this.switchService.step1Obj.MPRNNo
        },
        PaymentMethod: this.switchService.step2Obj.billingType,
        PostCode: this.switchService.step1Obj.postCode
      }
      this.switchService.getGasPricesList(request).subscribe(
        (data: any) => {
          if (data.GetGasRatesResult.Rates.length > 1) {
            this.prices = data.GetGasRatesResult.Rates;
            this.switchService.step3Obj.prices = this.prices;
          }
          else {
            Swal("No rates found for this meter. Please check that you have entered the correct details.");
            this.spinner.hide()
          }
        },
        err => this.spinner.hide(),
        () => this.spinner.hide()
      );
    }


  }


  viewMidStep() {
    this.router.navigate([this.switchType + '/usage']);
  }

  viewFirstStep() {
    this.router.navigate([this.switchType]);
  }

  switchNow(supplier,supplierDetails) {
    console.log(supplierDetails);
    this.switchService.step3Obj.supplier = supplier;
    var request = {
      step1Obj: this.switchService.step1Obj,
      step2Obj: this.switchService.step2Obj,
      step3Obj: this.switchService.step3Obj,
      switchType: this.switchType
    }
    if (localStorage.getItem("userId") !== null) {
      request["userId"] = localStorage.getItem("userId")
    }
    this.switchService.saveSteps(request).subscribe(
      (data: any) => {
        localStorage.removeItem("stepsId");
        localStorage.setItem('stepsId', data._id);
        this.spinner.hide();
        this.router.navigate([this.switchType + '/personal-details']);
      },
      err => {
        this.spinner.hide()
      },
      () => this.spinner.hide()
    )

  }
}
