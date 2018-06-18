import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SwitchService {
  step1Obj: any = {};
  step2Obj: any = {};
  step3Obj: any = {};
  personalObj: any = {};
  addressObj: any = {};
  paymentObj: any = {};
  currentUrl: string = '';
  updateForm: boolean = false;
  constructor(private http: HttpClient, private spinner: NgxSpinnerService) { }

  getSupplyAddresses(request) {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 2000)
    return this.http.post('/api/getSupplyAddresses', request)
    //return this.http.get('/assets/address.json', httpOptions)
  }
  getElectricPricesList(request) {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 2000)
    return this.http.post('/api/getElectricPrices', request)
    //  return this.http.get('/assets/prices.json', httpOptions)
  }
  getGasPricesList(request) {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 2000)
    return this.http.post('/api/getGasPrices', request)
    //return this.http.get('/assets/prices.json', httpOptions)
  }
}

