import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../environments/environment';





const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SwitchService {
  stepsId: string = '';
  step1Obj: any = {};
  step2Obj: any = {};
  step3Obj: any = {};
  personalObj: any = {};
  addressObj: any = {};
  paymentObj: any = {};
  currentUrl: string = '';
  updateForm: boolean = false;
  salesforceEnvironment = "live";

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {
  }

  getSupplyAddresses(request) {
    this.spinner.show();
    return this.http.post(this.baseUrl + '/api/getSupplyAddresses', request).pipe(
      map(data => data),
      catchError((error: any) => throwError(error)));
  }
  getElectricPricesList(request) {
    this.spinner.show();
    return this.http.post(this.baseUrl + '/api/getElectricPrices', request).pipe(
      map(data => data),
      catchError((error: any) => throwError(error)));
  }
  getGasPricesList(request) {
    this.spinner.show();
    return this.http.post(this.baseUrl + '/api/getGasPrices', request).pipe(
      map(data => data),
      catchError((error: any) => throwError(error)));
  }

  sendDocuSign(request) {
    this.spinner.show();
    return this.http.post(this.baseUrl + '/api/sendDocuSign', request).pipe(
      map(data => data),
      catchError((error: any) => throwError(error)));
  }


  getLocation() {
    this.spinner.show();
    return this.http.get(this.baseUrl + '/api/getLocation').pipe(
      map(data => data),
      catchError((error: any) => throwError(error)));
  }

  getDocuSignPDF(request) {
    this.spinner.show();
    return this.http.post(this.baseUrl + '/api/getDocuSignPDF', request).pipe(
      map(data => data),
      catchError((error: any) => {
        return throwError(error);
      }))
  }

  checkEmail(request) {
    this.spinner.show();
    return this.http.get(this.baseUrl + '/api/checkEmail?email=' + request.email).pipe(
      map(data => data),
      catchError((error: any) => throwError(error)))
  }


  verifyBankAccountNumber(request) {
    this.spinner.show();
    return this.http.post(this.baseUrl + '/api/verifyBankAccountNumber', request).pipe(
      map(data => data),
      catchError((error: any) => throwError(error)))
  }




  login(request) {
    this.spinner.show();
    return this.http.post(this.baseUrl + '/api/login', request).pipe(
      map(data => data),
      catchError((error: any) => throwError(error)))
  }

  logout() {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("stepsId");
    localStorage.removeItem("name");
    this.spinner.show();
    return this.http.get(this.baseUrl + '/api/logout').pipe(
      map(data => data),
      catchError((error: any) => throwError(error)))
  }


  saveSteps(request) {
    this.spinner.show();
    return this.http.post(this.baseUrl + '/api/steps', request).pipe(
      map(data => data),
      catchError((error: any) => throwError(error)))
  }

  getSteps(request) {
    this.spinner.show();
    return this.http.get(this.baseUrl + '/api/steps/' + request.stepsId).pipe(
      map(data => data),
      catchError((error: any) => throwError(error)))
  }

  updateSteps(request) {
    this.spinner.show();
    return this.http.put(this.baseUrl + '/api/steps/' + request.stepsId,request).pipe(
      map(data => data),
      catchError((error: any) => throwError(error)))
  }

  registerUser(request) {
    this.spinner.show();
    return this.http.post(this.baseUrl + '/api/users', request).pipe(
      map(data => data),
      catchError((error: any) => throwError(error)))
  }

  updateUser(request) {
    this.spinner.show();
    return this.http.put(this.baseUrl + '/api/users/' + request.userId, request).pipe(
      map(data => data),
      catchError((error: any) => throwError(error)))
  }

  getUser(request) {
    this.spinner.show();
    return this.http.get(this.baseUrl + '/api/users/' + request.userId).pipe(
      map(data => data),
      catchError((error: any) => throwError(error)));
  }

  getQuotations(request) {
    this.spinner.show();
    return this.http.get(this.baseUrl + '/api/quotations?sort=-created_at&userId=' + request.userId).pipe(
      map(data => data),
      catchError((error: any) => throwError(error)))
  }

  changePassword(request) {
    this.spinner.show();
    return this.http.post(this.baseUrl + '/api/changePassword', request)
  }

  getUnitRate() {
    return this.http.get(this.baseUrl + '/api/unitrate').pipe(
      map(data => data),
      catchError((error: any) => throwError(error)))
  }

  getSuppliers() {
    return this.http.get(this.baseUrl + '/api/suppliers').pipe(
      map(data => data),
      catchError((error: any) => throwError(error)))
  }



}

