import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Step1Component } from './switch-steps/step1/step1.component';
import { Step2Component } from './switch-steps/step2/step2.component';
import { Step3Component } from './switch-steps/step3/step3.component';
import { PersonalDetailsComponent } from './switch-steps/personal-details/personal-details.component';
import { AddressDetailsComponent } from './switch-steps/address-details/address-details.component';
import { PaymentDetailsComponent } from './switch-steps/payment-details/payment-details.component';
import {HttpClientModule} from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DataTableModule} from "angular-6-datatable";



 
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'gas',
    component: Step1Component
  },
  {
    path: 'electricity',
    component: Step1Component
  },
  {
    path: 'electricity/usage',
    component: Step2Component
  }
  , {
    path: 'electricity/pricing-list',
    component: Step3Component
  }
  ,
  {
    path: 'gas/usage',
    component: Step2Component
  }
  , {
    path: 'gas/pricing-list',
    component: Step3Component
  }
  , {
    path: 'personal-details',
    component: PersonalDetailsComponent
  }
  , {
    path: 'address-details',
    component: AddressDetailsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    PersonalDetailsComponent,
    AddressDetailsComponent,
    PaymentDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgxSpinnerModule,
    NgbModule.forRoot(),
    DataTableModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
