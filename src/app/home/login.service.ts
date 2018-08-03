import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {

  }

  login(request) {
    this.spinner.show();
    return this.http.post('/api/login', request)
  }


}

