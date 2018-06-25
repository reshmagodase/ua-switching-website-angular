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
import { DetailComponent } from './switch-steps/detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from "angular-6-datatable";
import { ThankyouComponent } from './switch-steps/thankyou/thankyou.component';





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
    path: 'electricity/personal-details',
    component: PersonalDetailsComponent
  }
  , {
    path: 'electricity/address-details',
    component: AddressDetailsComponent
  }
  , {
    path: 'electricity/payment-details',
    component: PaymentDetailsComponent
  }
  , {
    path: 'gas/personal-details',
    component: PersonalDetailsComponent
  }
  , {
    path: 'gas/address-details',
    component: AddressDetailsComponent
  }
  , {
    path: 'gas/payment-details',
    component: PaymentDetailsComponent
  }
  , {
    path: 'electricity/details',
    component: DetailComponent
  }
  , {
    path: 'gas/details',
    component: DetailComponent
  }
  , {
    path: 'thankyou',
    component: ThankyouComponent
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
    PaymentDetailsComponent,
    DetailComponent,
    ThankyouComponent
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
