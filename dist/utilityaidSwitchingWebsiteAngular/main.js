(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<ngx-spinner\nbdColor = \"rgba(51, 51, 51, 0.8)\"\nsize = \"large\"\ncolor = \"#fff\"\ntype = \"ball-circus\"\n></ngx-spinner>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            var scrollToTop = window.setInterval(function () {
                var pos = window.pageYOffset;
                if (pos > 0) {
                    window.scrollTo(0, pos - 20); // how far to scroll on each step
                }
                else {
                    window.clearInterval(scrollToTop);
                }
            }, 16); // how fast to scroll (this equals roughly 60 fps)
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _switch_steps_step1_step1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./switch-steps/step1/step1.component */ "./src/app/switch-steps/step1/step1.component.ts");
/* harmony import */ var _switch_steps_step2_step2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./switch-steps/step2/step2.component */ "./src/app/switch-steps/step2/step2.component.ts");
/* harmony import */ var _switch_steps_step3_step3_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./switch-steps/step3/step3.component */ "./src/app/switch-steps/step3/step3.component.ts");
/* harmony import */ var _switch_steps_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./switch-steps/personal-details/personal-details.component */ "./src/app/switch-steps/personal-details/personal-details.component.ts");
/* harmony import */ var _switch_steps_address_details_address_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./switch-steps/address-details/address-details.component */ "./src/app/switch-steps/address-details/address-details.component.ts");
/* harmony import */ var _switch_steps_payment_details_payment_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./switch-steps/payment-details/payment-details.component */ "./src/app/switch-steps/payment-details/payment-details.component.ts");
/* harmony import */ var _switch_steps_detail_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./switch-steps/detail/detail.component */ "./src/app/switch-steps/detail/detail.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-6-datatable */ "./node_modules/angular-6-datatable/index.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(angular_6_datatable__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _switch_steps_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./switch-steps/thankyou/thankyou.component */ "./src/app/switch-steps/thankyou/thankyou.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRoutes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    },
    {
        path: 'gas',
        component: _switch_steps_step1_step1_component__WEBPACK_IMPORTED_MODULE_7__["Step1Component"]
    },
    {
        path: 'electricity',
        component: _switch_steps_step1_step1_component__WEBPACK_IMPORTED_MODULE_7__["Step1Component"]
    },
    {
        path: 'electricity/usage',
        component: _switch_steps_step2_step2_component__WEBPACK_IMPORTED_MODULE_8__["Step2Component"]
    },
    {
        path: 'electricity/pricing-list',
        component: _switch_steps_step3_step3_component__WEBPACK_IMPORTED_MODULE_9__["Step3Component"]
    },
    {
        path: 'gas/usage',
        component: _switch_steps_step2_step2_component__WEBPACK_IMPORTED_MODULE_8__["Step2Component"]
    },
    {
        path: 'gas/pricing-list',
        component: _switch_steps_step3_step3_component__WEBPACK_IMPORTED_MODULE_9__["Step3Component"]
    },
    {
        path: 'electricity/personal-details',
        component: _switch_steps_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_10__["PersonalDetailsComponent"]
    },
    {
        path: 'electricity/address-details',
        component: _switch_steps_address_details_address_details_component__WEBPACK_IMPORTED_MODULE_11__["AddressDetailsComponent"]
    },
    {
        path: 'electricity/payment-details',
        component: _switch_steps_payment_details_payment_details_component__WEBPACK_IMPORTED_MODULE_12__["PaymentDetailsComponent"]
    },
    {
        path: 'gas/personal-details',
        component: _switch_steps_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_10__["PersonalDetailsComponent"]
    },
    {
        path: 'gas/address-details',
        component: _switch_steps_address_details_address_details_component__WEBPACK_IMPORTED_MODULE_11__["AddressDetailsComponent"]
    },
    {
        path: 'gas/payment-details',
        component: _switch_steps_payment_details_payment_details_component__WEBPACK_IMPORTED_MODULE_12__["PaymentDetailsComponent"]
    },
    {
        path: 'electricity/details',
        component: _switch_steps_detail_detail_component__WEBPACK_IMPORTED_MODULE_13__["DetailComponent"]
    },
    {
        path: 'gas/details',
        component: _switch_steps_detail_detail_component__WEBPACK_IMPORTED_MODULE_13__["DetailComponent"]
    },
    {
        path: 'thankyou',
        component: _switch_steps_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_18__["ThankyouComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _switch_steps_step1_step1_component__WEBPACK_IMPORTED_MODULE_7__["Step1Component"],
                _switch_steps_step2_step2_component__WEBPACK_IMPORTED_MODULE_8__["Step2Component"],
                _switch_steps_step3_step3_component__WEBPACK_IMPORTED_MODULE_9__["Step3Component"],
                _switch_steps_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_10__["PersonalDetailsComponent"],
                _switch_steps_address_details_address_details_component__WEBPACK_IMPORTED_MODULE_11__["AddressDetailsComponent"],
                _switch_steps_payment_details_payment_details_component__WEBPACK_IMPORTED_MODULE_12__["PaymentDetailsComponent"],
                _switch_steps_detail_detail_component__WEBPACK_IMPORTED_MODULE_13__["DetailComponent"],
                _switch_steps_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_18__["ThankyouComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_15__["NgxSpinnerModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"].forRoot(),
                angular_6_datatable__WEBPACK_IMPORTED_MODULE_17__["DataTableModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid text-center\">\n  <div style=\"padding: 20px 0px\">\n    <h1 class=\"fontBold\">Compare your gas &amp; electricity\n    </h1>\n\n    <h2>\n      You can start by simply completing the step-by-step process\n    </h2>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3 \">\n        <div class=\"steps\">\n          <img src=\"assets/images/step_1.png\">\n          <br>\n\n          <h3>Your Current Supplier\n          </h3>Tell us about your current energy supplier(s)\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"steps\">\n          <img src=\"assets/images/step_2.png\">\n          <br>\n\n          <h3>The Options\n          </h3>We'll let you know all the best deals suitable and available in your area\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"steps\">\n          <img src=\"assets/images/step_3.png\">\n          <br>\n\n          <h3>Switching Provider\n          </h3>Let us help you switch to the best tariff for you and your organisation\n        </div>\n      </div>\n      <div class=\"col-md-3 \">\n        <div class=\"steps\">\n          <img src=\"assets/images/step_4.png\">\n          <br>\n\n          <h3>Confirm and Relax\n          </h3>Sit back, relax and start to save money\n        </div>\n      </div>\n    </div>\n  </div>\n  <div style=\"padding: 20px 0px\">\n    <h2>Start comparing prices and tariffs now</h2>\n  </div>\n  <div class=\"container text-center compare\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <a href=\"/gas\">\n          <img src=\"assets/images/icon_gas.png\">\n          <div class=\"switchTypeBtn\">Gas</div>\n          <br>\n        </a>\n      </div>\n      <div class=\"col-sm-6\">\n        <a href=\"/electricity\">\n          <img src=\"assets/images/icon_electricity.png\">\n          <div class=\"switchTypeBtn\">Electricity</div>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.navbar-brand {\n    display: inline-block;\n    padding-top: 0px;\n    margin-right: 1rem;\n    font-size: 1.25rem;\n    line-height: inherit;\n    white-space: nowrap;\n    height: auto;\n}\n\n.navbar {\n    padding-top: 15px;\n    border: 0;\n    border-radius: 0;\n    margin-bottom: 0;\n    font-size: 12px;\n    letter-spacing: 1px;\n    background: #17252a !important;\n    color: #ffffff;\n    fill: #132026;\n}\n\n.logo {\n    max-width: 100%;\n    height: auto;\n}\n\n.freephone {\n    font-family: vag_roundedbold;\n    font-size: 20.7px;\n    padding: 8px;\n}\n\n.freephone span {\n    color: #3697c2;\n}\n\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<nav class=\"navbar navbar-expand-md bg-dark navbar-dark\">\n    <a class=\"navbar-brand\" href=\"/\">\n        <img src=\"assets/images/ua_logo.png\" class=\"logo\" />\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n        <ul class=\"navbar-nav ml-auto\">\n            <li class=\"freephone\">\n                freephone:\n                <span>0808 1788 170</span>\n            </li>\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/switch-steps/address-details/address-details.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/switch-steps/address-details/address-details.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/switch-steps/address-details/address-details.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/switch-steps/address-details/address-details.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- First Container -->\n<form [formGroup]=\"switchForm\" (ngSubmit)=\"submitForm(switchForm.value)\">\n  <div class=\"details switchforms\">\n    <div class=\"container\">\n      <div class=\"row headDetails\">\n        <div class=\"col-md-8\">\n          <h3>Address Details</h3>\n          <p>Please complete the form below. If we already hold the information, it is pre-filled for your convenience.</p>\n        </div>\n        <div class=\"col-md-4 text-center\">\n          <img src=\"assets/images/energyLogo.png\">\n          <h3>{{switchService.step3Obj.supplier.Supplier}}</h3>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"container detailsForm\">\n      <div class=\"row headFormDetails\">\n        <h3>About Your Address and Billing</h3>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>Current Address:</label>\n            {{switchService.step1Obj.supplyAddress}}\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label>Post Code:</label>\n            {{switchService.step1Obj.postCode}}\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"row\" [hidden]=\"!(switchService.personalObj.companyType=='Sole Trader')\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>Residential Status</label>\n            <select class=\"form-control\" formControlName=\"residentialStatus\">\n              <option value=\"\" selected=\"selected\">Select Status</option>\n              <option value=\"Council Tenant\">Council Tenant</option>\n              <option value=\"Housing Association Tenant\">Housing Association Tenant</option>\n              <option value=\"Joint Owner\">Joint Owner</option>\n              <option value=\"Landlord\">Landlord</option>\n              <option value=\"Owner\">Owner</option>\n              <option value=\"Tenant\">Tenant</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label>Years at Property</label>\n            <input placeholder=\"Years at Property\" class=\"form-control\" type=\"number\" formControlName=\"yearsAtProperty\">\n          </div>\n\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label>Months at Property</label>\n            <input placeholder=\"Months at Property\" class=\"form-control\" type=\"number\" formControlName=\"monthsAtProperty\">\n          </div>\n        </div>\n      </div>\n      <hr>\n      <div class=\"row\" [hidden]=\"!(switchForm.controls['yearsAtProperty'].value<3 && switchForm.controls['yearsAtProperty'].value!=='')\">\n        <h4 class=\"col-md-12\">Previous Address</h4>\n\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label>Address Line 1</label>\n            <input placeholder=\"Address Line 1\" class=\"form-control\" formControlName=\"prevAddressLine1\">\n          </div>\n\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label>Address Line 2</label>\n            <input placeholder=\"Address Line 2\" class=\"form-control\" formControlName=\"prevAddressLine2\">\n          </div>\n\n        </div>\n\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label>City</label>\n            <input placeholder=\"City\" class=\"form-control\" formControlName=\"prevCity\">\n          </div>\n\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label>Country</label>\n            <input placeholder=\"Country\" class=\"form-control\" formControlName=\"prevCountry\">\n          </div>\n\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label>Post Code</label>\n            <input placeholder=\"Post Code\" class=\"form-control\" formControlName=\"prevPostCode\">\n          </div>\n\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n\n\n          <input type=\"checkbox\" name=\"checkBillingAddress\" id=\"checkBillingAddress\" formControlName=\"checkBillingAddress\">\n          <label for=\"checkBillingAddress\" style=\"font-weight:normal\">My Billing Address is different to my current address.</label>\n        </div>\n\n      </div>\n      <div class=\"row\" [hidden]=\"!switchForm.controls['checkBillingAddress'].value\">\n        <h4 class=\"col-md-12\">Billing Address</h4>\n\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label>Address Line 1</label>\n            <input placeholder=\"Address Line 1\" class=\"form-control\" formControlName=\"billingAddressLine1\">\n          </div>\n\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label>Address Line 2</label>\n            <input placeholder=\"Address Line 2\" class=\"form-control\" formControlName=\"billingAddressLine2\">\n          </div>\n\n        </div>\n\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label>City</label>\n            <input placeholder=\"City\" class=\"form-control\" formControlName=\"billingCity\">\n          </div>\n\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label>Country</label>\n            <input placeholder=\"Country\" class=\"form-control\" formControlName=\"billingCountry\">\n          </div>\n\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label>Post Code</label>\n            <input placeholder=\"Post Code\" class=\"form-control\" formControlName=\"billingPostCode\">\n          </div>\n\n        </div>\n      </div>\n      <hr>\n\n\n      <footer style=\"TEXT-ALIGN: RIGHT; MARGIN-TOP: 2%;margin-bottom:5px;\">\n        <button class=\"btn btn-secondary customBtn\" *ngIf=\"!switchService.updateForm\" type=\"submit\">\n          CONTINUE\n        </button>\n        <button class=\"btn btn-secondary customBtn\" *ngIf=\"switchService.updateForm\" (click)=\"updateForm(switchForm.value)\">\n          Update\n        </button>\n      </footer>\n    </div>\n\n\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/switch-steps/address-details/address-details.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/switch-steps/address-details/address-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddressDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressDetailsComponent", function() { return AddressDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _switch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../switch.service */ "./src/app/switch-steps/switch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddressDetailsComponent = /** @class */ (function () {
    function AddressDetailsComponent(router, switchService, fb, spinner) {
        this.router = router;
        this.switchService = switchService;
        this.fb = fb;
        this.spinner = spinner;
        this.switchType = '';
        console.log(this.switchService.addressObj);
        this.switchForm = fb.group({
            'residentialStatus': [
                this.switchService.addressObj.residentialStatus ? this.switchService.addressObj.residentialStatus : '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ],
            'yearsAtProperty': [
                this.switchService.addressObj.yearsAtProperty ? this.switchService.addressObj.yearsAtProperty : '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ],
            'monthsAtProperty': [
                this.switchService.addressObj.monthsAtProperty ? this.switchService.addressObj.monthsAtProperty : '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ],
            'prevAddressLine1': [
                this.switchService.addressObj.prevAddressLine1 ? this.switchService.addressObj.prevAddressLine1 : ''
            ],
            'prevAddressLine2': [
                this.switchService.addressObj.prevAddressLine2 ? this.switchService.addressObj.prevAddressLine2 : ''
            ],
            'prevCity': [
                this.switchService.addressObj.prevCity ? this.switchService.addressObj.prevCity : ''
            ],
            'prevCountry': [
                this.switchService.addressObj.prevCountry ? this.switchService.addressObj.prevCountry : ''
            ],
            'prevPostCode': [
                this.switchService.addressObj.prevPostCode ? this.switchService.addressObj.prevPostCode : ''
            ],
            'checkBillingAddress': [
                this.switchService.addressObj.checkBillingAddress ? this.switchService.addressObj.checkBillingAddress : false
            ],
            'billingAddressLine1': [
                this.switchService.addressObj.billingAddressLine1 ? this.switchService.addressObj.billingAddressLine1 : ''
            ],
            'billingAddressLine2': [
                this.switchService.addressObj.billingAddressLine2 ? this.switchService.addressObj.billingAddressLine2 : ''
            ],
            'billingCity': [
                this.switchService.addressObj.billingCity ? this.switchService.addressObj.billingCity : ''
            ],
            'billingCountry': [
                this.switchService.addressObj.billingCountry ? this.switchService.addressObj.billingCountry : ''
            ],
            'billingPostCode': [
                this.switchService.addressObj.billingPostCode ? this.switchService.addressObj.billingPostCode : ''
            ]
        });
    }
    AddressDetailsComponent.prototype.ngOnInit = function () {
        console.log(this.switchService.personalObj);
        if (this.switchService.currentUrl == "") {
            this.router.navigate(['']);
        }
        else {
            this.switchType = this.switchService.currentUrl;
        }
    };
    AddressDetailsComponent.prototype.submitForm = function (value) {
        this.switchService.addressObj.residentialStatus = value.residentialStatus;
        this.switchService.addressObj.yearsAtProperty = value.yearsAtProperty;
        this.switchService.addressObj.monthsAtProperty = value.monthsAtProperty;
        this.switchService.addressObj.prevAddressLine1 = value.prevAddressLine1;
        this.switchService.addressObj.prevAddressLine2 = value.prevAddressLine2;
        this.switchService.addressObj.prevCity = value.prevCity;
        this.switchService.addressObj.prevCountry = value.prevCountry;
        this.switchService.addressObj.prevPostCode = value.prevPostCode;
        this.switchService.addressObj.checkBillingAddress = value.checkBillingAddress;
        this.switchService.addressObj.billingAddressLine1 = value.billingAddressLine1;
        this.switchService.addressObj.billingAddressLine2 = value.billingAddressLine2;
        this.switchService.addressObj.billingCity = value.billingCity;
        this.switchService.addressObj.billingCountry = value.billingCountry;
        this.switchService.addressObj.billingPostCode = value.billingPostCode;
        this.router.navigate([this.switchType + '/payment-details']);
    };
    AddressDetailsComponent.prototype.updateForm = function (value) {
        this.switchService.addressObj.residentialStatus = value.residentialStatus;
        this.switchService.addressObj.yearsAtProperty = value.yearsAtProperty;
        this.switchService.addressObj.monthsAtProperty = value.monthsAtProperty;
        this.switchService.addressObj.prevAddressLine1 = value.prevAddressLine1;
        this.switchService.addressObj.prevAddressLine2 = value.prevAddressLine2;
        this.switchService.addressObj.prevCity = value.prevCity;
        this.switchService.addressObj.prevCountry = value.prevCountry;
        this.switchService.addressObj.prevPostCode = value.prevPostCode;
        this.switchService.addressObj.checkBillingAddress = value.checkBillingAddress;
        this.switchService.addressObj.billingAddressLine1 = value.billingAddressLine1;
        this.switchService.addressObj.billingAddressLine2 = value.billingAddressLine2;
        this.switchService.addressObj.billingCity = value.billingCity;
        this.switchService.addressObj.billingCountry = value.billingCountry;
        this.switchService.addressObj.billingPostCode = value.billingPostCode;
        this.router.navigate([this.switchType + '/details']);
    };
    AddressDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-address-details',
            template: __webpack_require__(/*! ./address-details.component.html */ "./src/app/switch-steps/address-details/address-details.component.html"),
            styles: [__webpack_require__(/*! ./address-details.component.css */ "./src/app/switch-steps/address-details/address-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _switch_service__WEBPACK_IMPORTED_MODULE_1__["SwitchService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], AddressDetailsComponent);
    return AddressDetailsComponent;
}());



/***/ }),

/***/ "./src/app/switch-steps/detail/detail.component.css":
/*!**********************************************************!*\
  !*** ./src/app/switch-steps/detail/detail.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/switch-steps/detail/detail.component.html":
/*!***********************************************************!*\
  !*** ./src/app/switch-steps/detail/detail.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- First Container -->\n<div class=\"details switchforms\">\n\n  <div class=\"container detailsForm\">\n    <div class=\"row headFormDetails\">\n      <h3>Please check that you are happy with your details</h3>\n    </div>\n    <div class=\"row\">\n      <h4 class=\"col-md-12\" style=\"margin-top:10px\">Personal Details</h4>\n      <div class=\"col-md-12\">\n\n        <div class=\"form-group\" style=\"background-color: #eef0f1;padding:5px;\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <label>Name:</label> {{switchService.personalObj.name}}\n            </div>\n            <div class=\"col-md-6\">\n              <label>Company Name:</label> {{switchService.personalObj.companyName}}\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <label>Company Type:</label> {{switchService.personalObj.companyType}}\n            </div>\n            <div class=\"col-md-6\">\n              <label>Company Registration / Charity Number:</label> {{switchService.personalObj.companyRegNo}}\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <label>Mobile Number:</label> {{switchService.personalObj.mobileNo}}\n            </div>\n\n          </div>\n        </div>\n\n        <div style=\"TEXT-ALIGN: RIGHT; MARGIN-TOP: 2%;margin-bottom:5px;\">\n          <button class=\"btn\" (click)=\"openPage('personal-details')\">\n            Edit/Update\n          </button>\n        </div>\n\n      </div>\n\n    </div>\n    <hr>\n    <div class=\"row\">\n      <h4 class=\"col-md-12\" style=\"margin-top:10px\">Address Details</h4>\n      <div class=\"col-md-12\">\n\n        <div class=\"form-group\" style=\"background-color: #eef0f1;padding:5px;\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <label>Supply Address:</label> {{switchService.step1Obj.supplyAddress}}\n            </div>\n            <div class=\"col-md-12\">\n              <label>Post Code:</label> {{switchService.step1Obj.postCode}}\n            </div>\n            <div class=\"col-md-12\">\n              <label> {{switchType==\"electricity\" ? \"MPAN\" : \"MPRN\"}}: </label>\n              {{switchType==\"electricity\" ? switchService.step1Obj.MPANBottomLineNo : switchService.step1Obj.MPRNNo}}\n            </div>\n\n\n            <div class=\"col-md-12\" [hidden]=\"!(switchService.addressObj.yearsAtProperty<3 && switchService.addressObj.yearsAtProperty!=='')\">\n              <label> Previous Address: </label>\n              {{this.switchService.addressObj.prevAddressLine1 + ' ' + this.switchService.addressObj.prevAddressLine2 + ' ' + this.switchService.addressObj.prevCity\n              + ' ' + this.switchService.addressObj.prevCountry + ' ' + this.switchService.addressObj.prevPostCode}}\n            </div>\n            <div class=\"col-md-12\" [hidden]=\"!switchService.addressObj.checkBillingAddress\">\n              <label> Billing Address: </label>\n              {{this.switchService.addressObj.billingAddressLine1 + ' ' + this.switchService.addressObj.billingAddressLine2 + ' ' + this.switchService.addressObj.billingCity\n              + ' ' + this.switchService.addressObj.billingCountry + ' ' + this.switchService.addressObj.billingPostCode}}\n            </div>\n\n          </div>\n        </div>\n\n\n\n        <div style=\"TEXT-ALIGN: RIGHT; MARGIN-TOP: 2%;margin-bottom:5px;\">\n          <button class=\"btn\" (click)=\"openPage('address-details')\">\n            Edit/Update\n          </button>\n        </div>\n\n      </div>\n\n    </div>\n    <hr>\n    <div class=\"row\">\n      <h4 class=\"col-md-12\" style=\"margin-top:10px\">Bank Details</h4>\n      <div class=\"col-md-12\">\n\n        <div class=\"form-group\" style=\"background-color: #eef0f1;padding:5px;\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <label>Account Holder Name:</label> {{switchService.paymentObj.accountHolderName}}\n            </div>\n            <div class=\"col-md-6\">\n              <label>Preferred Direct Debit Day:</label> {{switchService.paymentObj.directDebitDay}}\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <label>Sort Code:</label> {{switchService.paymentObj.sortCode}}\n            </div>\n            <div class=\"col-md-6\">\n              <label>Account Number:</label> {{switchService.paymentObj.accountNumber}}\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n\n              <label>Bank Name:</label> {{switchService.paymentObj.checkManual ? switchService.paymentObj.manualBankName : switchService.paymentObj.bankName}}\n            </div>\n          </div>\n        </div>\n\n        <div style=\"TEXT-ALIGN: RIGHT; MARGIN-TOP: 2%;margin-bottom:5px;\">\n          <button class=\"btn\" (click)=\"openPage('payment-details')\">\n            Edit/Update\n          </button>\n        </div>\n\n      </div>\n\n    </div>\n    <hr>\n    <footer style=\"TEXT-ALIGN: RIGHT; MARGIN-TOP: 2%;margin-bottom:5px;\">\n      <button class=\"btn btn-secondary customBtn\" type=\"submit\" (click)=\"submitDetails()\">\n        Submit\n      </button>\n    </footer>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/switch-steps/detail/detail.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/switch-steps/detail/detail.component.ts ***!
  \*********************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _switch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../switch.service */ "./src/app/switch-steps/switch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailComponent = /** @class */ (function () {
    function DetailComponent(router, switchService, fb, spinner) {
        this.router = router;
        this.switchService = switchService;
        this.fb = fb;
        this.spinner = spinner;
        this.switchType = '';
    }
    DetailComponent.prototype.ngOnInit = function () {
        this.switchService.updateForm = false;
        if (this.switchService.currentUrl == "") {
            this.router.navigate(['']);
        }
        else {
            this.switchType = this.switchService.currentUrl;
        }
    };
    DetailComponent.prototype.openPage = function (page) {
        this.switchService.updateForm = true;
        this.router.navigate([this.switchType + '/' + page]);
    };
    DetailComponent.prototype.submitDetails = function () {
        var _this = this;
        var MainDetailsData = [
            {
                "Key": "address 1",
                "Value": this.switchService.step1Obj.supplyAddress
            },
            {
                "Key": "address 2",
                "Value": ""
            },
            {
                "Key": "address 3",
                "Value": ""
            },
            {
                "Key": "address 4",
                "Value": ""
            },
            {
                "Key": "post code",
                "Value": this.switchService.step1Obj.postCode
            },
            {
                "Key": "billing address1",
                "Value": this.switchService.addressObj.billingAddressLine1 ? this.switchService.addressObj.billingAddressLine1 : ''
            },
            {
                "Key": "billing address2",
                "Value": this.switchService.addressObj.billingAddressLine2 ? this.switchService.addressObj.billingAddressLine2 : ''
            },
            {
                "Key": "billing address3",
                "Value": (this.switchService.addressObj.billingCity ? this.switchService.addressObj.billingCity : '') + " " + (this.switchService.addressObj.billingCountry ? this.switchService.addressObj.billingCountry : '')
            },
            {
                "Key": "billing postcode",
                "Value": this.switchService.addressObj.billingPostCode ? this.switchService.addressObj.billingPostCode : ''
            },
            {
                "Key": "bank name",
                "Value": this.switchService.paymentObj.checkManual ? this.switchService.paymentObj.manualBankName : this.switchService.paymentObj.bankName
            },
            {
                "Key": "bank account name",
                "Value": this.switchService.paymentObj.accountHolderName
            },
            {
                "Key": "account number",
                "Value": this.switchService.paymentObj.accountNumber
            },
            {
                "Key": "sort code",
                "Value": this.switchService.paymentObj.sortCode
            },
            {
                "Key": "email",
                "Value": this.switchService.personalObj.emailAddress
            },
            {
                "Key": "mobile",
                "Value": this.switchService.personalObj.mobileNo
            },
            {
                "Key": "business type",
                "Value": this.switchService.personalObj.companyType
            },
            {
                "Key": "contact name",
                "Value": this.switchService.personalObj.name
            },
            {
                "Key": "premises name",
                "Value": this.switchService.personalObj.companyName
            },
            {
                "Key": "previous address1",
                "Value": this.switchService.addressObj.prevAddressLine1 ? this.switchService.addressObj.prevAddressLine1 : ''
            },
            {
                "Key": "previous address2",
                "Value": this.switchService.addressObj.prevAddressLine2 ? this.switchService.addressObj.prevAddressLine2 : ''
            },
            {
                "Key": "previous address3",
                "Value": (this.switchService.addressObj.prevCity ? this.switchService.addressObj.prevCity : '') + " " + (this.switchService.addressObj.prevCountry ? this.switchService.addressObj.prevCountry : '')
            },
            {
                "Key": "previous postcode",
                "Value": this.switchService.addressObj.prevPostCode ? this.switchService.addressObj.prevPostCode : ''
            },
            {
                "Key": "company number",
                "Value": this.switchService.personalObj.companyRegNo
            },
            {
                "Key": "payment method",
                "Value": this.switchService.step2Obj.billingType
            }
        ];
        var ItsAGasContract = false;
        if (this.switchType == "electricity") {
            ItsAGasContract = false;
            MainDetailsData.push({
                "Key": "current electric supplier 1",
                "Value": this.switchService.step2Obj.checkManual ? this.switchService.step2Obj.manualCurrentSupplier : this.switchService.step2Obj.currentSupplier
            });
            MainDetailsData.push({
                "Key": "mpan top line 1",
                "Value": this.switchService.step1Obj.MPANTopLineNo
            });
            MainDetailsData.push({
                "Key": "mpan bottom line 1",
                "Value": this.switchService.step1Obj.MPANBottomLineNo
            });
            MainDetailsData.push({
                "Key": "new supplier electricity",
                "Value": this.switchService.step3Obj.supplier.Supplier
            });
        }
        else {
            ItsAGasContract = true;
            MainDetailsData.push({
                "Key": "current gas supplier 1",
                "Value": this.switchService.step2Obj.currentSupplier ? this.switchService.step2Obj.currentSupplier : this.switchService.step2Obj.manualCurrentSupplier
            });
            MainDetailsData.push({
                "Key": "mpr 1",
                "Value": this.switchService.step1Obj.MPRNNo
            });
            MainDetailsData.push({
                "Key": "new supplier gas",
                "Value": this.switchService.step3Obj.supplier.Supplier
            });
        }
        var UsageRatesData = [
            {
                "Key": "daycharge",
                "Value": this.switchService.step3Obj.supplier.DayUnitrate
            },
            {
                "Key": "nightcharge",
                "Value": this.switchService.step3Obj.supplier.NightUnitrate
            },
            {
                "Key": "eveandwendcharge",
                "Value": "0"
            },
            {
                "Key": "standing charge",
                "Value": this.switchService.step3Obj.supplier.StandingCharge
            },
            {
                "Key": "dayusage",
                "Value": this.switchService.step2Obj.consumption
            },
            {
                "Key": "nightusage",
                "Value": "0"
            },
            {
                "Key": "eveandwendusage",
                "Value": "0"
            }
        ];
        var request = {
            ItsAGasContract: ItsAGasContract,
            MainDetailsData: MainDetailsData,
            UsageRatesData: UsageRatesData
        };
        this.switchService.sendDocuSign(request).subscribe(function (data) {
            _this.spinner.hide();
            if (data.SendDocusignResult.Error == null) {
                _this.router.navigate(['thankyou']);
            }
            else {
                alert(data.SendDocusignResult.Error.Message);
            }
        }, function (err) { return _this.spinner.hide(); }, function () { return _this.spinner.hide(); });
    };
    DetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/switch-steps/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.css */ "./src/app/switch-steps/detail/detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _switch_service__WEBPACK_IMPORTED_MODULE_1__["SwitchService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/switch-steps/payment-details/payment-details.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/switch-steps/payment-details/payment-details.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/switch-steps/payment-details/payment-details.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/switch-steps/payment-details/payment-details.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- First Container -->\n<form [formGroup]=\"switchForm\" (ngSubmit)=\"submitForm(switchForm.value)\">\n  <div class=\"details switchforms\">\n    <div class=\"container\">\n      <div class=\"row headDetails\">\n        <div class=\"col-md-8\">\n          <h3>Payment Details</h3>\n          <p>Please complete the form below. If we already hold the information, it is pre-filled for your convenience.</p>\n        </div>\n        <div class=\"col-md-4 text-center\">\n          <img src=\"assets/images/energyLogo.png\">\n          <h3>{{switchService.step3Obj.supplier.Supplier}}</h3>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"container detailsForm\">\n      <div class=\"row headFormDetails\">\n        <h3>About Your Bank and Building Society</h3>\n      </div>\n      <div class=\"row\">\n        <h4 class=\"col-md-12\" style=\"margin-top:10px\">Your Account</h4>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>Name of Account Holder</label>\n            <input placeholder=\"Name of Account Holder\" class=\"form-control\" formControlName=\"accountHolderName\">\n            <div class=\" alert-danger\" *ngIf=\"switchForm.controls['accountHolderName'].touched && !switchForm.controls['accountHolderName'].valid\">\n              <span *ngIf=\"switchForm.controls['accountHolderName'].hasError('required')\">\n                Account Holder Name is required!\n              </span>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>Preferred Direct Debit Day</label>\n            <select class=\"form-control\" formControlName=\"directDebitDay\">\n              <option value=\"\">--Select--</option>\n              <option value=\"1\">01 - First</option>`\n              <option value=\"2\">02 - Second</option>\n              <option value=\"3\">03 - Third</option>\n              <option value=\"4\">04 - Fourth</option>\n              <option value=\"5\">05 - Fifth</option>\n              <option value=\"6\">06 - Sixth</option>\n              <option value=\"7\">07 - Seventh</option>\n              <option value=\"8\">08 - Eight</option>\n              <option value=\"9\">09 - Ninth</option>\n              <option value=\"10\">10 - Tenth</option>\n              <option value=\"11\">11 - Eleventh</option>\n              <option value=\"12\">12 - Twelfth</option>\n              <option value=\"13\">13 - Thirteenth</option>\n              <option value=\"14\">14 - Fourteenth</option>\n              <option value=\"15\">15 - Fifteenth</option>\n              <option value=\"16\">16 - Sixteenth</option>\n              <option value=\"17\">17 - Seventeenth</option>\n              <option value=\"18\">18 - Eighteenth</option>\n              <option value=\"19\">19 - Nineteenth</option>\n              <option value=\"20\">20 - Twentieth</option>\n              <option value=\"21\">21 - Twenty-First</option>\n              <option value=\"22\">22 - Twenty-Second</option>\n              <option value=\"23\">23 - Twenty-Third</option>\n              <option value=\"24\">24 - Twenty-Fourth</option>\n              <option value=\"25\">25 - Twenty-Fifth</option>\n              <option value=\"26\">26 - Twenty-Sixth</option>\n              <option value=\"27\">27 - Twenty-Seventh</option>\n              <option value=\"28\">28 - Twenty-Eight</option>\n            </select>\n            <div class=\" alert-danger\" *ngIf=\"switchForm.controls['directDebitDay'].touched && !switchForm.controls['directDebitDay'].valid\">\n              <span *ngIf=\"switchForm.controls['directDebitDay'].hasError('required') \">\n                Preferred Direct Debit Day is required!\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>Sort Code</label>\n            <input placeholder=\"00-00-00\" class=\"form-control\" formControlName=\"sortCode\">\n            <div class=\" alert-danger\" *ngIf=\"switchForm.controls['sortCode'].touched && !switchForm.controls['sortCode'].valid\">\n              <span *ngIf=\"switchForm.controls['sortCode'].hasError('required') \">\n                Sort Code is required!\n              </span>\n              <span *ngIf=\"switchForm.controls['sortCode'].hasError('pattern')\" class=\"help-block\">\n                Please enter valid Sort Code\n              </span>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>Account Number</label>\n            <input placeholder=\"Account Number\" class=\"form-control\" formControlName=\"accountNumber\">\n            <div class=\" alert-danger\" *ngIf=\"switchForm.controls['accountNumber'].touched && !switchForm.controls['accountNumber'].valid\">\n              <span *ngIf=\"switchForm.controls['accountNumber'].hasError('required') \">\n                Account Number is required!\n              </span>\n              <span *ngIf=\"switchForm.controls['accountNumber'].hasError('pattern')\" class=\"help-block\">\n                Please enter valid Account Number\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <hr>\n      <div formGroupName=\"bankGroup\">\n        <div class=\"row\">\n          <h4 class=\"col-md-12\" style=\"margin-top:10px\">Your Bank or Building Society.</h4>\n          <div class=\"col-md-6\" [hidden]=\"switchForm.get('bankGroup').get('checkManual').value\">\n            <div class=\"form-group\">\n              <label>Bank/Building or Society Name</label>\n              <select class=\"form-control\" formControlName=\"bankName\">\n                <option value=\"\">--Select--</option>\n                <option value=\"Alliance &amp; Leicester Commercial Bank\">Alliance &amp; Leicester Commercial Bank</option>\n                <option value=\"Allied Irish Banks\">Allied Irish Banks</option>\n                <option value=\"Bank of England\">Bank of England</option>\n                <option value=\"Bank of Ireland\">Bank of Ireland</option>\n                <option value=\"Bank of Scotland\">Bank of Scotland</option>\n                <option value=\"Barclays Bank\">Barclays Bank</option>\n                <option value=\"Citibank\">Citibank</option>\n                <option value=\"Clydesdale Bank\">Clydesdale Bank</option>\n                <option value=\"HSBC Bank\">HSBC Bank</option>\n                <option value=\"Lloyds TSB Bank\">Lloyds TSB Bank</option>\n                <option value=\"National Westminster Bank\">National Westminster Bank</option>\n                <option value=\"Nationwide Building Society\">Nationwide Building Society</option>\n                <option value=\"Northern Bank\">Northern Bank</option>\n                <option value=\"Royal Bank of Scotland\">Royal Bank of Scotland</option>\n                <option value=\"Santander UK\">Santander UK</option>\n                <option value=\"The Co-operatve Bank\">The Co-operatve Bank</option>\n                <option value=\"Ulster Bank\">Ulster Bank</option>\n\n              </select>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <input type=\"checkbox\" name=\"checkManual\" id=\"checkManual\" formControlName=\"checkManual\">\n            <label for=\"checkManual\" style=\"font-weight:normal\">My current bank is not listed so I will prefer to enter it manually.</label>\n\n          </div>\n          <div class=\"col-md-6\" [hidden]=\"!switchForm.get('bankGroup').get('checkManual').value\">\n            <div class=\"form-group\">\n              <label>Bank/Building or Society Name</label>\n              <input placeholder=\"Bank Name\" class=\"form-control\" formControlName=\"manualBankName\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\" alert-danger\" *ngIf=\"(switchForm.controls['bankGroup'].touched && !switchForm.controls['bankGroup'].valid)\">\n          <span *ngIf=\"switchForm.controls['bankGroup'].hasError('required')\">\n            Bank/Building or Society Name is required!\n          </span>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <ul style=\"font-size:14px;margin-top:20px\">\n            <li>\n              This Guarantee is offered by all Banks and Building Societies that accept instructions to pay Direct Debits\n            </li>\n            <li>\n              If there are any changes to the amount, date or frequency of your Direct Debit, First Utility will notify you 10 working\n              days in advance of your account being debited or as otherwise agreed\n            </li>\n            <li>\n              If you request First Utility to collect a payment, confirmation of the amount and date will be given to you at the time of\n              the request\n            </li>\n            <li>\n              If an error is made in the payment of your Direct Debit, by First Utility or your Bank or Building Society, you are entitled\n              to a full and immediate refund of the amount paid from your Bank or Building Society If you receive a refund\n              you are not entitled to, you must pay it back when First Utility asks you to\n            </li>\n            <li>\n              You can cancel a Direct Debit at any time by simply contacting your Bank or Building Society Written confirmation may be\n              required. Please also notify First Utility\n            </li>\n          </ul>\n\n\n\n\n          <input type=\"checkbox\" name=\"terms\" id=\"terms\" formControlName=\"terms\">\n          <label for=\"terms\" style=\"font-weight:normal\"> I agree to the Terms and Conditions.</label>\n\n\n\n          <div class=\" alert-danger\" *ngIf=\"switchForm.controls['terms'].touched && !switchForm.controls['terms'].valid\">\n            <span *ngIf=\"switchForm.controls['terms'].hasError('required') \">\n              You must agree to the terms and conditions\n            </span>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <img src=\"assets/images/debitLogo.png\">\n        </div>\n      </div>\n      <hr>\n      <footer style=\"TEXT-ALIGN: RIGHT; MARGIN-TOP: 2%;margin-bottom:5px;\">\n        <button class=\"btn btn-secondary customBtn\" *ngIf=\"!switchService.updateForm\" type=\"submit\" [disabled]='!switchForm.valid'>\n          CONTINUE\n        </button>\n        <button class=\"btn btn-secondary customBtn\" *ngIf=\"switchService.updateForm\" (click)=\"updateForm(switchForm.value)\" [disabled]='!switchForm.valid'>\n          Update\n        </button>\n      </footer>\n    </div>\n\n\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/switch-steps/payment-details/payment-details.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/switch-steps/payment-details/payment-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: bankRequired, termsRequired, PaymentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bankRequired", function() { return bankRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "termsRequired", function() { return termsRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailsComponent", function() { return PaymentDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _switch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../switch.service */ "./src/app/switch-steps/switch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var bankRequired = function (control) {
    var bankName = control.get('bankName');
    var manualBankName = control.get('manualBankName');
    var checkManual = control.get('checkManual');
    if (!bankName.value && !manualBankName.value) {
        return { required: true };
    }
    else if (checkManual.value && !manualBankName.value) {
        return { required: true };
    }
    else if (!checkManual.value && !bankName.value) {
        return { required: true };
    }
    else {
        return null;
    }
};
var termsRequired = function (control) {
    var terms = control.get('terms');
    if (!terms.value) {
        return { required: true };
    }
    else {
        return null;
    }
};
var PaymentDetailsComponent = /** @class */ (function () {
    function PaymentDetailsComponent(router, switchService, fb, spinner) {
        this.router = router;
        this.switchService = switchService;
        this.fb = fb;
        this.spinner = spinner;
        this.switchType = '';
        this.switchForm = fb.group({
            'accountHolderName': [
                this.switchService.paymentObj.accountHolderName ? this.switchService.paymentObj.accountHolderName : '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ],
            'directDebitDay': [
                this.switchService.paymentObj.directDebitDay ? this.switchService.paymentObj.directDebitDay : '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ],
            'sortCode': [
                this.switchService.paymentObj.sortCode ? this.switchService.paymentObj.sortCode : '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^(?!(?:0{6}|00-00-00))(?:\d{6}|\d\d-\d\d-\d\d)$/), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            ],
            'accountNumber': [
                this.switchService.paymentObj.accountNumber ? this.switchService.paymentObj.accountNumber : '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^(\d){8}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            ],
            'terms': [this.switchService.paymentObj.terms ? this.switchService.paymentObj.terms : ''],
            'bankGroup': this.fb.group({
                'bankName': [
                    this.switchService.paymentObj.bankName ? this.switchService.paymentObj.bankName : ''
                ],
                'checkManual': [
                    this.switchService.paymentObj.checkManual ? this.switchService.paymentObj.checkManual : false
                ],
                'manualBankName': [
                    this.switchService.paymentObj.manualBankName ? this.switchService.paymentObj.manualBankName : ''
                ],
            }, { validator: bankRequired })
        }, { validator: termsRequired });
    }
    PaymentDetailsComponent.prototype.ngOnInit = function () {
        if (this.switchService.currentUrl == "") {
            this.router.navigate(['']);
        }
        else {
            this.switchType = this.switchService.currentUrl;
        }
    };
    PaymentDetailsComponent.prototype.submitForm = function (value) {
        this.setValues(value);
        this.router.navigate([this.switchType + '/details']);
    };
    PaymentDetailsComponent.prototype.updateForm = function (value) {
        this.setValues(value);
        this.router.navigate([this.switchType + '/details']);
    };
    PaymentDetailsComponent.prototype.setValues = function (value) {
        console.log("fgh", value);
        this.switchService.paymentObj.accountHolderName = value.accountHolderName;
        this.switchService.paymentObj.directDebitDay = value.directDebitDay;
        this.switchService.paymentObj.sortCode = value.sortCode;
        this.switchService.paymentObj.accountNumber = value.accountNumber;
        this.switchService.paymentObj.bankName = value.bankGroup.bankName;
        this.switchService.paymentObj.checkManual = value.bankGroup.checkManual;
        this.switchService.paymentObj.terms = value.terms;
        this.switchService.paymentObj.manualBankName = value.bankGroup.manualBankName;
    };
    PaymentDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-details',
            template: __webpack_require__(/*! ./payment-details.component.html */ "./src/app/switch-steps/payment-details/payment-details.component.html"),
            styles: [__webpack_require__(/*! ./payment-details.component.css */ "./src/app/switch-steps/payment-details/payment-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _switch_service__WEBPACK_IMPORTED_MODULE_1__["SwitchService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], PaymentDetailsComponent);
    return PaymentDetailsComponent;
}());



/***/ }),

/***/ "./src/app/switch-steps/personal-details/personal-details.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/switch-steps/personal-details/personal-details.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/switch-steps/personal-details/personal-details.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/switch-steps/personal-details/personal-details.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- First Container -->\n<form [formGroup]=\"switchForm\" (ngSubmit)=\"submitForm(switchForm.value)\">\n  <div class=\"details switchforms\">\n    <div class=\"container\">\n      <div class=\"row headDetails\">\n        <div class=\"col-md-8\">\n          <h3>Personal Details</h3>\n          <p>Please complete the form below. If we already hold the information, it is pre-filled for your convenience.</p>\n        </div>\n        <div class=\"col-md-4 text-center\">\n          <img src=\"assets/images/energyLogo.png\">\n          <h3>{{switchService.step3Obj.supplier.Supplier}}</h3>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"container detailsForm\">\n      <div class=\"row headFormDetails\">\n        <h3>About You</h3>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>Name</label>\n            <input placeholder=\"Name\" class=\"form-control\" formControlName=\"name\">\n            <div class=\" alert-danger\" *ngIf=\"switchForm.controls['name'].touched && !switchForm.controls['name'].valid\">\n              <span *ngIf=\"switchForm.controls['name'].hasError('required') \">\n                Name is required!\n              </span>\n            </div>\n\n          </div>\n\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>Company Name</label>\n            <input placeholder=\"Company Name\" class=\"form-control\" formControlName=\"companyName\">\n            <div class=\" alert-danger\" *ngIf=\"switchForm.controls['companyName'].touched && !switchForm.controls['companyName'].valid\">\n              <span *ngIf=\"switchForm.controls['companyName'].hasError('required') \">\n                Company Name is required!\n              </span>\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>Company Type</label>\n            <select class=\"form-control \" formControlName=\"companyType\">\n              <option value=\"\">--Select--</option>\n              <option value=\"Sole Trader\">Sole Trader</option>\n              <option value=\"Public Limited Company\">Public Limited Company</option>\n              <option value=\"Private Limited Company by Shares\">Private Limited Company by Shares</option>\n              <option value=\"Company Limited by Guarantee\">Company Limited by Guarantee</option>\n              <option value=\"Charity\">Charity</option>\n            </select>\n            <div class=\" alert-danger\" *ngIf=\"switchForm.controls['companyType'].touched && !switchForm.controls['companyType'].valid\">\n              <span *ngIf=\"switchForm.controls['companyType'].hasError('required') \">\n                Company Type is required!\n              </span>\n            </div>\n\n          </div>\n\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>Company Registration Number</label>\n            <input placeholder=\"Company Registration Number\" formControlName=\"companyRegNo\" class=\"form-control\">\n            <div class=\" alert-danger\" *ngIf=\"switchForm.controls['companyRegNo'].touched && !switchForm.controls['companyRegNo'].valid\">\n              <span *ngIf=\"switchForm.controls['companyRegNo'].hasError('required') \">\n                Company Registration Number is required!\n              </span>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>Mobile Number</label>\n            <input placeholder=\"Mobile Number\" class=\"form-control\" formControlName=\"mobileNo\">\n            <div class=\" alert-danger\" *ngIf=\"switchForm.controls['mobileNo'].touched && !switchForm.controls['mobileNo'].valid\">\n              <span *ngIf=\"switchForm.controls['mobileNo'].hasError('required') \">\n                Mobile Number is required!\n              </span>\n              <span *ngIf=\"switchForm.controls['mobileNo'].hasError('pattern') \">\n                Invalid Mobile Number!\n              </span>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n      <div class=\"row\" formGroupName=\"emailGroup\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>Email Address</label>\n            <input placeholder=\"Email Address\" type=\"email\" class=\"form-control\" formControlName=\"emailAddress\">\n            <div class=\" alert-danger\" *ngIf=\"switchForm.controls['emailGroup'].touched && !switchForm.controls['emailGroup'].valid\">\n              <span *ngIf=\"switchForm.get('emailGroup').get('emailAddress').hasError('required') \">\n                Email Address is required!\n              </span>\n              <span *ngIf=\"switchForm.get('emailGroup').get('emailAddress').hasError('email') \">\n                Invalid Email Address!\n              </span>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>Confirm Email Address</label>\n            <input placeholder=\"Confirm Email Address\" class=\"form-control\" type=\"email\" formControlName=\"confirmEmailAddress\">\n            <div class=\" alert-danger\" *ngIf=\"switchForm.controls['emailGroup'].touched && !switchForm.controls['emailGroup'].valid\">\n              <span *ngIf=\"switchForm.get('emailGroup').get('confirmEmailAddress').hasError('required') \">\n                Confirm Email Address is required!\n              </span>\n              <span *ngIf=\"switchForm.get('emailGroup').get('confirmEmailAddress').hasError('email') \">\n                Invalid Email Address!\n              </span>\n              <span *ngIf=\"!switchForm.get('emailGroup').get('confirmEmailAddress').hasError('required')  && !switchForm.get('emailGroup').get('confirmEmailAddress').hasError('email')  && switchForm.controls['emailGroup'].hasError('nomatch')\">\n                Email Address doesn't match!\n              </span>\n            </div>\n\n\n\n          </div>\n\n        </div>\n      </div>\n      <div class=\"row\" formGroupName=\"passwordGroup\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>Password</label>\n            <input placeholder=\"Password\" class=\"form-control\" type=\"password\" formControlName=\"password\" style=\"font-family:Arial\">\n            <div class=\" alert-danger\" *ngIf=\"switchForm.controls['passwordGroup'].touched && !switchForm.controls['passwordGroup'].valid\">\n              <span *ngIf=\"switchForm.get('passwordGroup').get('password').hasError('required') \">\n                Password is required!\n              </span>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>Confirm Password</label>\n            <input placeholder=\"Confirm Password\" class=\"form-control\" type=\"password\" formControlName=\"confirmPassword\" style=\"font-family:Arial\">\n\n            <div class=\" alert-danger\" *ngIf=\"switchForm.controls['passwordGroup'].touched && !switchForm.controls['passwordGroup'].valid\">\n              <span *ngIf=\"switchForm.get('passwordGroup').get('confirmPassword').hasError('required') \">\n                Confirm Password is required!\n              </span>\n              <span *ngIf=\"!switchForm.get('passwordGroup').get('confirmPassword').hasError('required') && switchForm.controls['passwordGroup'].hasError('nomatch')\">\n                Password doesn't match!\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <hr>\n      <footer style=\"TEXT-ALIGN: RIGHT; MARGIN-TOP: 2%;margin-bottom:5px;\">\n        <button class=\"btn btn-secondary customBtn\" *ngIf=\"!switchService.updateForm\" type=\"submit\" [disabled]='!switchForm.valid'>\n          CONTINUE\n        </button>\n        <button class=\"btn btn-secondary customBtn\" *ngIf=\"switchService.updateForm\" (click)=\"updateForm(switchForm.value)\" [disabled]='!switchForm.valid'>\n          Update\n        </button>\n      </footer>\n    </div>\n\n\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/switch-steps/personal-details/personal-details.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/switch-steps/personal-details/personal-details.component.ts ***!
  \*****************************************************************************/
/*! exports provided: emailMatcher, passwordMatcher, PersonalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailMatcher", function() { return emailMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordMatcher", function() { return passwordMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDetailsComponent", function() { return PersonalDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _switch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../switch.service */ "./src/app/switch-steps/switch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var emailMatcher = function (control) {
    var email = control.get('emailAddress');
    var confirm = control.get('confirmEmailAddress');
    if (!email || !confirm)
        return null;
    return email.value === confirm.value ? null : { nomatch: true };
};
var passwordMatcher = function (control) {
    var password = control.get('password');
    var confirm = control.get('confirmPassword');
    if (!password || !confirm)
        return null;
    return password.value === confirm.value ? null : { nomatch: true };
};
var PersonalDetailsComponent = /** @class */ (function () {
    function PersonalDetailsComponent(router, switchService, fb, spinner) {
        this.router = router;
        this.switchService = switchService;
        this.fb = fb;
        this.spinner = spinner;
        this.switchType = '';
        this.currentStepObject = {};
        this.switchForm = fb.group({
            'name': [
                this.switchService.personalObj.name ? this.switchService.personalObj.name : '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ],
            'companyName': [
                this.switchService.personalObj.companyName ? this.switchService.personalObj.companyName : '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ],
            'companyType': [
                this.switchService.personalObj.companyType ? this.switchService.personalObj.companyType : '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ],
            'companyRegNo': [
                this.switchService.personalObj.companyRegNo ? this.switchService.personalObj.companyRegNo : '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ],
            'mobileNo': [
                this.switchService.personalObj.mobileNo ? this.switchService.personalObj.mobileNo : '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
            ],
            'emailGroup': this.fb.group({
                'emailAddress': [
                    this.switchService.personalObj.emailAddress ? this.switchService.personalObj.emailAddress : '',
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email])
                ],
                'confirmEmailAddress': [
                    this.switchService.personalObj.confirmEmailAddress ? this.switchService.personalObj.confirmEmailAddress : '',
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email])
                ],
            }, { validator: emailMatcher }),
            'passwordGroup': this.fb.group({
                'password': [
                    this.switchService.personalObj.password ? this.switchService.personalObj.password : '',
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
                ],
                'confirmPassword': [
                    this.switchService.personalObj.confirmPassword ? this.switchService.personalObj.confirmPassword : '',
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
                ],
            }, { validator: passwordMatcher })
        });
    }
    PersonalDetailsComponent.prototype.ngOnInit = function () {
        if (this.switchService.currentUrl == "") {
            this.router.navigate(['']);
        }
        else {
            this.switchType = this.switchService.currentUrl;
        }
    };
    PersonalDetailsComponent.prototype.submitForm = function (value) {
        console.log(this.switchForm);
        this.switchService.personalObj.name = value.name;
        this.switchService.personalObj.companyName = value.companyName;
        this.switchService.personalObj.companyType = value.companyType;
        this.switchService.personalObj.companyRegNo = value.companyRegNo;
        this.switchService.personalObj.mobileNo = value.mobileNo;
        this.switchService.personalObj.emailAddress = value.emailGroup.emailAddress;
        this.switchService.personalObj.confirmEmailAddress = value.emailGroup.confirmEmailAddress;
        this.switchService.personalObj.password = value.password;
        this.switchService.personalObj.confirmPassword = value.confirmPassword;
        this.router.navigate([this.switchType + '/address-details']);
    };
    PersonalDetailsComponent.prototype.updateForm = function (value) {
        this.switchService.personalObj.name = value.name;
        this.switchService.personalObj.companyName = value.companyName;
        this.switchService.personalObj.companyType = value.companyType;
        this.switchService.personalObj.companyRegNo = value.companyRegNo;
        this.switchService.personalObj.mobileNo = value.mobileNo;
        this.switchService.personalObj.emailAddress = value.emailGroup.emailAddress;
        this.switchService.personalObj.confirmEmailAddress = value.emailGroup.confirmEmailAddress;
        this.switchService.personalObj.password = value.password;
        this.switchService.personalObj.confirmPassword = value.confirmPassword;
        this.router.navigate([this.switchType + '/details']);
    };
    PersonalDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personal-details',
            template: __webpack_require__(/*! ./personal-details.component.html */ "./src/app/switch-steps/personal-details/personal-details.component.html"),
            styles: [__webpack_require__(/*! ./personal-details.component.css */ "./src/app/switch-steps/personal-details/personal-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _switch_service__WEBPACK_IMPORTED_MODULE_1__["SwitchService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], PersonalDetailsComponent);
    return PersonalDetailsComponent;
}());



/***/ }),

/***/ "./src/app/switch-steps/step1/step1.component.html":
/*!*********************************************************!*\
  !*** ./src/app/switch-steps/step1/step1.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"switchForm\" (ngSubmit)=\"submitForm(switchForm.value,2)\">\n  <!-- First Container -->\n  <div class=\"container-fluid text-center\">\n    <div style=\"padding: 20px 0px\">\n      <h1 class=\"fontBold\">Compare your {{switchType}}\n\n      </h1>\n    </div>\n\n  </div>\n\n  <!-- Circles which indicates the steps of the form: -->\n  <div class=\" container \" style=\"text-align:center;margin-top:40px;max-width: 700px; \">\n    <div class=\"row\">\n      <div class=\"col-4 \">\n        <span class=\"step firststep active\">1</span>\n        <br>Select Supply Address</div>\n      <div class=\"col-4 \">\n        <span class=\"step midstep\" (click)=\"submitForm(switchForm.value,2)\">2</span>\n        <br>Usage</div>\n      <div class=\"col-4 \">\n        <span class=\"step laststep \" (click)=\"submitForm(switchForm.value,3)\">3</span>\n        <br>Supplier List</div>\n    </div>\n  </div>\n\n\n\n  <div class=\"container switchforms \" style=\"text-align:center;margin-top:40px;max-width: 1000px; \">\n    <div class=\"tab \">\n      <div class=\"row form-group \">\n        <div class=\"col-sm-3 labelTag \">\n          <label>Post Code *</label>\n        </div>\n        <div class=\"col-sm-6 \">\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Post Code\" formControlName=\"postCode\" (keydown)=\"onKeydown($event)\">\n\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\" style=\"cursor: pointer;\" (click)=\"getSupplyAddress()\">Enter</span>\n            </div>\n          </div>\n\n\n          <div class=\" alert-danger\" *ngIf=\"switchForm.controls['postCode'].touched && !switchForm.controls['postCode'].valid\">\n            <span *ngIf=\"switchForm.controls['postCode'].hasError('required') \">\n              Post Code is required!\n            </span>\n            <span *ngIf=\"switchForm.controls['postCode'].hasError('maxlength') \">\n              Post Code max length is 7\n            </span>\n          </div>\n\n        </div>\n        <div class=\"col-sm-3 \" style=\"text-align:left \">\n          <span (click)=\"getPostCode()\" style=\"cursor:pointer;color:#3693cd;font-weight: bold\"> Use current location</span>\n        </div>\n      </div>\n      <div class=\"text-center\" [hidden]=\"showHidePostCode\">\n        <div class=\" alert-danger\">\n          Supply Address for the post code is not available. Please call us at\n          <span style=\"color:#3697c2;font-weight:bold\">0808 1788 170</span> if you have any queries.\n        </div>\n      </div>\n\n      <div class=\"row form-group \" [hidden]=\"showHideSupplyAddress\">\n        <div class=\"col-sm-3 labelTag \">\n          <label>Supply Address*</label>\n        </div>\n        <div class=\"col-sm-6 \">\n          <select class=\"form-control \" formControlName=\"supplyAddress\" (change)=\"onChange($event.target.value)\">\n            <option value=\"\">--Select--</option>\n            <ng-container *ngIf=\"switchType === 'gas';else viewElectricitySupplyAddress\">\n              <option *ngFor=\"let address of addresses\" value='{{address.AddressAsLine + \"AAA\" + address.MPRN}}'>\n                {{address.AddressAsLine}}\n              </option>\n            </ng-container>\n            <ng-template #viewElectricitySupplyAddress>\n              <option *ngFor=\"let address of addresses\" value='{{address.AddressAsLine + \"AAA\" + address.MPANCore + \"AAA\" + address.profileclass + address.metertimeswitchclass + address.linelossfactor}}'>\n                {{address.AddressAsLine}}\n              </option>\n            </ng-template>\n          </select>\n          <div class=\"alert-danger\" *ngIf=\"switchForm.controls['supplyAddress'].touched && !switchForm.controls['supplyAddress'].valid\">\n            <span *ngIf=\"switchForm.controls['supplyAddress'].hasError('required') \">\n              Supply Address is required!\n            </span>\n          </div>\n\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"text-center\">\n            <div class=\" alert-danger\">\n              If your Supply Address is not listed, please call us at\n              <span style=\"color:#3697c2;font-weight:bold\">0808 1788 170</span>.\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row form-group\" [hidden]=\"!MPANDivShow\">\n        <div class=\"col-sm-3 labelTag \">\n          <label>\n            {{switchType==\"electricity\" ? \"MPAN\" : \"MPRN\"}}\n          </label>\n        </div>\n        <div class=\"col-sm-6 text-left\">\n          <label>\n            {{switchType==\"electricity\" ? MPANBottomLineNo : MPRNNo}}\n          </label>\n        </div>\n      </div>\n      <div class=\"row \">\n        <div class=\"btnRow \">\n          <button class=\"next1 btn btn-secondary customBtn\" type=\"submit\" [disabled]='!switchForm.valid'>Next </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/switch-steps/step1/step1.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/switch-steps/step1/step1.component.ts ***!
  \*******************************************************/
/*! exports provided: Step1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step1Component", function() { return Step1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _switch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../switch.service */ "./src/app/switch-steps/switch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Step1Component = /** @class */ (function () {
    function Step1Component(router, switchService, fb, spinner) {
        this.router = router;
        this.switchService = switchService;
        this.fb = fb;
        this.spinner = spinner;
        this.switchType = '';
        this.MPANDivShow = false;
        this.MPANBottomLineNo = '';
        this.MPRNNo = '';
        this.showHideSupplyAddress = true;
        this.showHidePostCode = true;
        this.addresses = this.switchService.step1Obj.addresses;
        this.switchForm = fb.group({
            'postCode': [
                this.switchService.step1Obj.postCode ? this.switchService.step1Obj.postCode : '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(7)])
            ],
            'supplyAddress': [
                this.switchService.step1Obj.supplyAddress ? this.switchService.step1Obj.supplyAddress : '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]
        });
        this.showHideSupplyAddress = this.switchService.step1Obj.supplyAddress ? false : true;
    }
    Step1Component.prototype.ngOnInit = function () {
        this.switchService.currentUrl = this.router.url.replace('/', '');
        this.switchType = this.switchService.currentUrl;
    };
    Step1Component.prototype.getSupplyAddress = function () {
        var _this = this;
        this.showHideSupplyAddress = true;
        var request = {
            postCode: this.switchForm.controls['postCode'].value
        };
        this.switchService.getSupplyAddresses(request).subscribe(function (data) {
            var addressList = data.GetAddressesResult.Addresses;
            if (addressList.length > 0) {
                var elecAddressArr = [];
                var gasAddressArr = [];
                var addressJson = {};
                var bool = false;
                for (var i = 0; i < addressList.length; i++) {
                    addressJson = {};
                    for (var j = 0; j < addressList[i].length; j++) {
                        addressJson[addressList[i][j].Key] = addressList[i][j].Value;
                        if (addressList[i][j].Key == "MPANCore") {
                            bool = true;
                        }
                    }
                    if (bool == true) {
                        bool = false;
                        elecAddressArr.push(addressJson);
                    }
                    else {
                        gasAddressArr.push(addressJson);
                    }
                }
                if (_this.switchType == "electricity") {
                    _this.addresses = elecAddressArr;
                    _this.switchService.step1Obj.addresses = elecAddressArr;
                    _this.showHideSupplyAddress = false;
                }
                else {
                    _this.addresses = gasAddressArr;
                    _this.switchService.step1Obj.addresses = gasAddressArr;
                    _this.showHideSupplyAddress = false;
                }
                _this.showHidePostCode = true;
            }
            else {
                _this.showHidePostCode = false;
                _this.spinner.hide();
            }
        }, function (err) { return _this.spinner.hide(); }, function () { return _this.spinner.hide(); });
    };
    Step1Component.prototype.getPostCode = function () {
        var _this = this;
        this.switchService.getPostCode().subscribe(function (data) {
            _this.spinner.hide();
            if (data.postCode == "") {
                alert("Unable to retreive post code. Please enter it manually!");
            }
            else {
                _this.switchForm.controls['postCode'].setValue(data.postCode);
            }
        }, function (err) { return _this.spinner.hide(); }, function () { return _this.spinner.hide(); });
    };
    Step1Component.prototype.submitForm = function (value, step) {
        this.switchService.step1Obj.postCode = value.postCode;
        this.switchService.step1Obj.supplyAddress = value.supplyAddress;
        if (this.switchForm.valid && step == 2) {
            this.router.navigate([this.switchType + '/usage']);
            this.switchService.step1Obj.completed = true;
        }
        else if (this.switchService.step2Obj.completed && step == 3) {
            this.router.navigate([this.switchType + '/pricing-list']);
        }
    };
    Step1Component.prototype.onChange = function (value) {
        var code = value.split("AAA");
        if (this.switchType == "electricity") {
            this.switchService.step1Obj.MPANBottomLineNo = code[1];
            this.switchService.step1Obj.MPANTopLineNo = code[2];
            this.MPANBottomLineNo = code[1];
        }
        else {
            this.switchService.step1Obj.MPRNNo = code[1];
            this.MPRNNo = code[1];
        }
        this.MPANDivShow = true;
    };
    Step1Component.prototype.onKeydown = function (event) {
        if (event.key === "Enter") {
            this.getSupplyAddress();
        }
    };
    Step1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-step1',
            template: __webpack_require__(/*! ./step1.component.html */ "./src/app/switch-steps/step1/step1.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _switch_service__WEBPACK_IMPORTED_MODULE_1__["SwitchService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], Step1Component);
    return Step1Component;
}());



/***/ }),

/***/ "./src/app/switch-steps/step2/step2.component.html":
/*!*********************************************************!*\
  !*** ./src/app/switch-steps/step2/step2.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"switchForm\" (ngSubmit)=\"submitForm(switchForm.value,3)\">\n  <!-- First Container -->\n  <div class=\"container-fluid text-center\">\n    <div style=\"padding: 20px 0px\">\n      <h1 class=\"fontBold\">Compare your {{switchType}}\n\n\n      </h1>\n    </div>\n\n  </div>\n\n  <!-- Circles which indicates the steps of the form: -->\n  <div class=\"container\" style=\"text-align:center;margin-top:40px;max-width: 700px;\">\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <span class=\"step firststep active\" (click)=\"submitForm(switchForm.value,1)\">1</span>\n        <br>Select Supply Address</div>\n      <div class=\"col-4\">\n        <span class=\"step midstep active\">2</span>\n        <br>Usage</div>\n      <div class=\"col-4\">\n        <span class=\"step laststep\" (click)=\"submitForm(switchForm.value,3)\">3</span>\n        <br>Supplier List</div>\n    </div>\n  </div>\n\n  <div class=\"container switchforms\" style=\"text-align:center;margin-top:40px;max-width: 1000px;\">\n    <div class=\"tab\">\n      <div formGroupName=\"usageGroup\">\n        <div class=\"row form-group\">\n          <div class=\"col-sm-3 labelTag\">\n            <label>Annual Spend*</label>\n          </div>\n          <div class=\"col-sm-6\">\n\n\n\n            <div class=\"input-group mb-3\">\n              <input placeholder=\"Annual Spend\" class=\"form-control\" type=\"number\" [(ngModel)]=\"annualSpend\" (keypress)=\"annualUsage=''\"\n                formControlName=\"annualSpend\">\n\n              <div class=\"input-group-append\">\n                <span class=\"input-group-text\" style=\"font-size:20px\">&#163;</span>\n              </div>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"row form-group\">\n          <div class=\"col-sm-3 labelTag\">\n          </div>\n          <div class=\"col-sm-6 text-center\">\n            OR\n          </div>\n        </div>\n        <div class=\"row form-group\">\n          <div class=\"col-sm-3 labelTag\">\n            <label>Annual Usage*</label>\n          </div>\n          <div class=\"col-sm-6\">\n\n            <div class=\"input-group mb-3\">\n              <input placeholder=\"Annual Usage\" class=\"form-control\" type=\"number\" [(ngModel)]=\"annualUsage\" (keypress)=\"annualSpend=''\"\n                formControlName=\"annualUsage\">\n\n              <div class=\"input-group-append\">\n                <span class=\"input-group-text\" style=\"font-size:20px\">kWh</span>\n              </div>\n            </div>\n\n            <div class=\" alert-danger\" *ngIf=\"(switchForm.controls['usageGroup'].touched && !switchForm.controls['usageGroup'].valid)\">\n              <span *ngIf=\"switchForm.controls['usageGroup'].hasError('required')\">\n                Annual Usage or Annual Spend is required!\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row form-group\">\n        <div class=\"col-sm-3 labelTag\">\n          <label>Contract Start Date*</label>\n        </div>\n        <div class=\"col-sm-6\">\n\n\n          <div class=\"input-group\">\n            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"d2\" ngbDatepicker #d2=\"ngbDatepicker\" formControlName=\"contractStartDate\">\n            <div class=\"input-group-append\">\n              <button class=\"btn \" (click)=\"d2.toggle()\" type=\"button\">\n                <img src=\"assets/images/calendar.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\n              </button>\n            </div>\n          </div>\n          <div class=\" alert-danger\" *ngIf=\"switchForm.controls['contractStartDate'].touched && !switchForm.controls['contractStartDate'].valid\">\n            <span *ngIf=\"switchForm.controls['contractStartDate'].hasError('required') \">\n              Contract Start Date is required!\n            </span>\n          </div>\n\n        </div>\n\n      </div>\n\n      <div formGroupName=\"supplierGroup\">\n        <div class=\"row form-group\" *ngIf=\"!switchForm.get('supplierGroup').get('checkManual').value\">\n          <div class=\"col-sm-3 labelTag\">\n            <label>Current Supplier*</label>\n          </div>\n          <div class=\"col-sm-6\">\n            <select class=\"form-control\" formControlName=\"currentSupplier\">\n              <option value=\"\">--Select Supplier--</option>\n              <option value=\"Axis\">Axis</option>\n              <option value=\"Bristol Energy\">Bristol Energy</option>\n              <option value=\"Brook Green\">Brook Green</option>\n              <option value=\"Clear Business\">Clear Business</option>\n              <option value=\"Corona Energy\">Corona Energy</option>\n              <option value=\"D-Energi\">D-Energi</option>\n              <option value=\"Dual Energy\">Dual Energy</option>\n              <option value=\"Ecotricity\">Ecotricity</option>\n              <option value=\"E-ON\">E-ON</option>\n              <option value=\"Extra Energy\">Extra Energy</option>\n              <option value=\"EDF\">EDF</option>\n              <option value=\"Hudson Energy\">Hudson Energy</option>\n              <option value=\"Npower\">Npower</option>\n              <option value=\"Scottish Power\">Scottish Power</option>\n            </select>\n\n          </div>\n        </div>\n        <div class=\"row form-group\">\n          <div class=\"col-sm-3 labelTag\">\n          </div>\n          <div class=\"col-sm-9 labelTag\" style=\"text-align: left\">\n            <input type=\"checkbox\" name=\"checkManual\" id=\"checkManual\" formControlName=\"checkManual\">\n            <label for=\"checkManual\" style=\"font-weight:normal\"> My Current Supplier is not automatically listed so I prefer to enter it manually.</label>\n          </div>\n        </div>\n        <div class=\"row form-group\" *ngIf=\"switchForm.get('supplierGroup').get('checkManual').value\">\n\n          <div class=\"col-sm-3 labelTag\">\n            <label>Current Supplier*</label>\n          </div>\n          <div class=\"col-sm-6\">\n            <input placeholder=\"Current Supplier\" class=\"form-control\" formControlName=\"manualCurrentSupplier\">\n          </div>\n        </div>\n        <div class=\" alert-danger\" *ngIf=\"(switchForm.controls['supplierGroup'].touched && !switchForm.controls['supplierGroup'].valid)\">\n          <span *ngIf=\"switchForm.controls['supplierGroup'].hasError('required')\">\n            Current Supplier is required!\n          </span>\n        </div>\n      </div>\n\n      <div class=\"row form-group\">\n        <div class=\"col-sm-3 labelTag\">\n          <label>Billing Type*</label>\n        </div>\n        <div class=\"col-sm-6\">\n          <select class=\"form-control\" formControlName=\"billingType\">\n            <option value=\"\">--Select Billing Type--</option>\n            <option value=\"Direct Debit (Monthly)\">Direct Debit (Monthly)</option>\n            <option value=\"Quarterly Direct Debit\">Quarterly Direct Debit</option>\n            <option value=\"Cash or Cheque\">Cash or Cheque</option>\n            <option value=\"PAYG Prepayment Meter\">PAYG Prepayment Meter</option>\n\n\n          </select>\n          <div class=\" alert-danger\" *ngIf=\"switchForm.controls['billingType'].touched && !switchForm.controls['billingType'].valid\">\n            <span *ngIf=\"switchForm.controls['billingType'].hasError('required') \">\n              Billing Type is required!\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"row form-group\">\n        <div class=\"col-sm-3 labelTag\">\n          <label>Smart Meter</label>\n        </div>\n        <div class=\"col-sm-6 text-left\">\n          <input type=\"checkbox\" name=\"smartMeter\" id=\"smartMeter\" formControlName=\"smartMeter\">\n          <label for=\"smartMeter\" style=\"font-weight:normal\"></label>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"btnRow\">\n          <button class=\"prev1 btn btn-secondary customBtn\" (click)=\"submitForm(switchForm.value,1)\">Previous </button>\n          <button class=\"next2 btn btn-secondary customBtn\" [disabled]='!switchForm.valid'>Next </button>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/switch-steps/step2/step2.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/switch-steps/step2/step2.component.ts ***!
  \*******************************************************/
/*! exports provided: usageRequired, supplierRequired, Step2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usageRequired", function() { return usageRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supplierRequired", function() { return supplierRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step2Component", function() { return Step2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _switch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../switch.service */ "./src/app/switch-steps/switch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var usageRequired = function (control) {
    var annualSpend = control.get('annualSpend');
    var annualUsage = control.get('annualUsage');
    if (!annualSpend.value && !annualUsage.value) {
        return { required: true };
    }
    else {
        return null;
    }
};
var supplierRequired = function (control) {
    var currentSupplier = control.get('currentSupplier');
    var manualCurrentSupplier = control.get('manualCurrentSupplier');
    var checkManual = control.get('checkManual');
    if (!currentSupplier.value && !manualCurrentSupplier.value) {
        return { required: true };
    }
    else if (checkManual.value && !manualCurrentSupplier.value) {
        return { required: true };
    }
    else if (!checkManual.value && !currentSupplier.value) {
        return { required: true };
    }
    else {
        return null;
    }
};
var Step2Component = /** @class */ (function () {
    function Step2Component(router, switchService, fb) {
        this.router = router;
        this.switchService = switchService;
        this.fb = fb;
        this.switchType = '';
        this.switchForm = fb.group({
            'contractStartDate': [
                this.switchService.step2Obj.contractStartDate ? this.switchService.step2Obj.contractStartDate : '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ],
            'billingType': [
                this.switchService.step2Obj.billingType ? this.switchService.step2Obj.billingType : '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ],
            'smartMeter': [
                this.switchService.step2Obj.smartMeter ? this.switchService.step2Obj.smartMeter : ''
            ],
            'usageGroup': this.fb.group({
                'annualSpend': [
                    this.switchService.step2Obj.annualSpend ? this.switchService.step2Obj.annualSpend : ''
                ],
                'annualUsage': [
                    this.switchService.step2Obj.annualUsage ? this.switchService.step2Obj.annualUsage : ''
                ],
            }, { validator: usageRequired }),
            'supplierGroup': this.fb.group({
                'currentSupplier': [
                    this.switchService.step2Obj.currentSupplier ? this.switchService.step2Obj.currentSupplier : ''
                ],
                'checkManual': [this.switchService.step2Obj.checkManual ? this.switchService.step2Obj.checkManual : false],
                'manualCurrentSupplier': [
                    this.switchService.step2Obj.manualCurrentSupplier ? this.switchService.step2Obj.manualCurrentSupplier : ''
                ],
            }, { validator: supplierRequired })
        });
        this.annualSpend = this.switchService.step2Obj.annualSpend ? this.switchService.step2Obj.annualSpend : '';
        this.annualUsage = this.switchService.step2Obj.annualUsage ? this.switchService.step2Obj.annualUsage : '';
    }
    Step2Component.prototype.submitForm = function (value, step) {
        this.switchService.step2Obj.annualSpend = value.usageGroup.annualSpend ? value.usageGroup.annualSpend : '';
        this.switchService.step2Obj.annualUsage = value.usageGroup.annualUsage ? value.usageGroup.annualUsage : '';
        this.switchService.step2Obj.contractStartDate = value.contractStartDate;
        this.switchService.step2Obj.currentSupplier = value.supplierGroup.currentSupplier;
        this.switchService.step2Obj.manualCurrentSupplier = value.supplierGroup.manualCurrentSupplier;
        this.switchService.step2Obj.checkManual = value.supplierGroup.checkManual;
        this.switchService.step2Obj.billingType = value.billingType;
        this.switchService.step2Obj.smartMeter = value.smartMeter;
        var pence = 0;
        if (this.switchType == "electricity") {
            pence = 13;
        }
        else {
            pence = 3.5;
        }
        this.switchService.step2Obj.consumption = value.usageGroup.annualSpend ? (value.usageGroup.annualSpend / (pence / 100)).toFixed(0) : value.usageGroup.annualUsage;
        this.switchService.step2Obj.spendAmount = value.usageGroup.annualSpend ? value.usageGroup.annualSpend : ((value.usageGroup.annualUsage * pence) / 100).toFixed(0);
        if (this.switchForm.valid && step == 3) {
            this.router.navigate([this.switchType + '/pricing-list']);
            this.switchService.step2Obj.completed = true;
        }
        else if (step == 1) {
            this.router.navigate([this.switchType]);
        }
    };
    Step2Component.prototype.ngOnInit = function () {
        if (this.switchService.currentUrl == "") {
            this.router.navigate(['']);
        }
        else {
            this.switchType = this.switchService.currentUrl;
        }
    };
    Step2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-step2',
            template: __webpack_require__(/*! ./step2.component.html */ "./src/app/switch-steps/step2/step2.component.html"),
            providers: [{ provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDateAdapter"], useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDateNativeAdapter"] }]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _switch_service__WEBPACK_IMPORTED_MODULE_1__["SwitchService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], Step2Component);
    return Step2Component;
}());



/***/ }),

/***/ "./src/app/switch-steps/step3/step3.component.html":
/*!*********************************************************!*\
  !*** ./src/app/switch-steps/step3/step3.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- First Container -->\n<div class=\"container-fluid text-center\">\n  <div style=\"padding: 20px 0px\">\n    <h1 class=\"fontBold\">Compare your {{switchType}}\n    </h1>\n  </div>\n\n</div>\n\n<!-- Circles which indicates the steps of the form: -->\n<div class=\"container\" style=\"text-align:center;margin-top:40px;max-width: 700px;\">\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <span class=\"step firststep active\" (click)=\"viewFirstStep()\">1</span>\n      <br>Select Supply Address</div>\n    <div class=\"col-4\">\n      <span class=\"step midstep active\" (click)=\"viewMidStep()\">2</span>\n      <br>Usage</div>\n    <div class=\"col-4\">\n      <span class=\"step laststep active\">3</span>\n      <br>Supplier List</div>\n  </div>\n</div>\n\n<div class=\"container switchforms\" style=\"margin-top:40px;max-width: 1000px;\">\n  <div class=\"tab tab3\">\n    <div class=\"row form-group\" style=\"display:none\">\n      <div class=\"col-6\">\n\n        <div class=\"row\">\n          <div class=\"col-5 labelTag\">\n            Supply Address:\n          </div>\n          <div class=\"col-7\">\n            <span>{{switchService.step1Obj.supplyAddress}}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-6\">\n        <div class=\"row\">\n          <div class=\"col-5 labelTag\">\n            Post Code:\n          </div>\n          <div class=\"col-7\">\n            <span>{{switchService.step1Obj.postCode}}</span>\n          </div>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"row form-group\">\n      <div class=\"col-md-6\">\n        <div class=\"row\">\n          <div class=\"col-5 labelTag\">\n            Annual Spend:\n          </div>\n          <div class=\"col-7\">\n            <span>{{switchService.step2Obj.spendAmount}}\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n\n        <div class=\"row\">\n          <div class=\"col-5 labelTag\">\n            Annual Usage:\n          </div>\n          <div class=\"col-7\">\n            <span>{{switchService.step2Obj.consumption}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row form-group\">\n\n\n      <div class=\"col-md-6\">\n\n        <div class=\"row\">\n          <div class=\"col-5 labelTag\">\n            Contract Start Date:\n          </div>\n          <div class=\"col-7\">\n            <span>{{switchService.step2Obj.contractStartDate | date:'dd/MM/yyyy'}}</span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-6\">\n        <div class=\"row\">\n          <div class=\"col-5 labelTag\">\n            Current Supplier:\n          </div>\n          <div class=\"col-7\">\n            <span>{{switchService.step2Obj.checkManual ? switchService.step2Obj.manualCurrentSupplier : switchService.step2Obj.currentSupplier}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row form-group\">\n\n      <div class=\"col-md-6\">\n\n        <div class=\"row\">\n          <div class=\"col-5 labelTag\">\n            Billing Type:\n          </div>\n          <div class=\"col-7\">\n            <span>{{switchService.step2Obj.billingType}}</span>\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"col-md-6\">\n        <div class=\"row\">\n          <div class=\"col-5 labelTag\">\n            Smart Meter:\n          </div>\n          <div class=\"col-7\">\n            <span>{{switchService.step2Obj.smartMeter=='true' ? 'Yes' : 'No'}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n    <div style=\"max-width:1000px;margin-top:100px;overflow-x:auto;\">\n      <!-- <table id=\"pricinglist\" class=\"display text-center\" style=\"width:100%\"> -->\n      <table class=\"table table-striped text-center\" [mfData]=\"prices\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\n\n        <thead>\n          <tr>\n            <th>\n              <mfDefaultSorter by=\"Supplier\">Supplier</mfDefaultSorter>\n            </th>\n\n            <th>\n              <mfDefaultSorter by=\"DayUnitrate\">Day Rate</mfDefaultSorter>\n            </th>\n            <th>\n              <mfDefaultSorter by=\"StandingCharge\">Standing Charge</mfDefaultSorter>\n            </th>\n            <th>\n              <mfDefaultSorter by=\"AnnualPrice\">Cost Per Year</mfDefaultSorter>\n            </th>\n            <th style=\"background:none !important\"></th>\n          </tr>\n        </thead>\n        <tbody>\n          <ng-container *ngFor=\"let price of mf.data\">\n            <tr *ngIf=\"price.AnnualPrice\">\n              <td>\n                <img src=\"assets/images/energyLogo.png\">\n                <br> {{price.Supplier}}\n              </td>\n              <td class=\"floatTd\">{{(price.DayUnitrate/1).toFixed(2)}}</td>\n              <td class=\"floatTd\">{{(price.StandingCharge/1).toFixed(2)}}</td>\n              <td>\n                <ng-container *ngIf=\"price.AnnualPrice.replace(',','').replace('£','')/1  > spendAmount;else viewProfit\">You added\n                  <span style='font-size:20px;color:red'>£{{(price.AnnualPrice.replace(',','').replace('£','') - spendAmount).toFixed(2)}}</span>/Yr\n                  <br>\n                  <b style=\"color:black\">{{price.AnnualPrice}}</b> when you choose for {{price.Term}} year.\n                </ng-container>\n                <ng-template #viewProfit>You save\n                  <span style='font-size:20px;color:green'>£{{(spendAmount - price.AnnualPrice.replace(',','').replace('£','')).toFixed(2)}}</span>/Yr\n                  <br>\n                  <b style=\"color:black\">{{price.AnnualPrice}}</b> when you choose for {{price.Term}} year.\n                </ng-template>\n              </td>\n              <td class=\"switchNowBtn\">\n                <button class=\"prev1 btn customBtn\" style='border:1px solid #4f95c7' (click)=\"getSupplierDetails(price)\">Switch Now </button>\n              </td>\n            </tr>\n          </ng-container>\n        </tbody>\n        <tfoot>\n          <tr>\n            <td colspan=\"5\" style=\"font-family:Arial, Helvetica, sans-serif\">\n              <mfBootstrapPaginator></mfBootstrapPaginator>\n            </td>\n          </tr>\n        </tfoot>\n      </table>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"btnRow\">\n        <button class=\"prev2 btn btn-secondary customBtn\" (click)=\"viewMidStep()\">Previous </button>\n      </div>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/switch-steps/step3/step3.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/switch-steps/step3/step3.component.ts ***!
  \*******************************************************/
/*! exports provided: Step3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step3Component", function() { return Step3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _switch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../switch.service */ "./src/app/switch-steps/switch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Step3Component = /** @class */ (function () {
    function Step3Component(router, switchService, spinner) {
        this.router = router;
        this.switchService = switchService;
        this.spinner = spinner;
        this.currentStepObject = {};
        this.switchType = '';
    }
    Step3Component.prototype.ngOnInit = function () {
        console.log(this.switchService);
        this.spendAmount = this.switchService.step2Obj.spendAmount;
        if (this.switchService.currentUrl == "") {
            this.router.navigate(['']);
        }
        else {
            this.switchType = this.switchService.currentUrl;
        }
        this.getSupplyAddress();
    };
    Step3Component.prototype.getSupplyAddress = function () {
        var _this = this;
        var request = {};
        if (this.switchType == 'electricity') {
            request = {
                ElectricSupply: {
                    DayConsumption: { Amount: this.switchService.step2Obj.consumption, Type: "Day" },
                    MPANTop: this.switchService.step1Obj.MPANTopLineNo,
                    MPANBottom: this.switchService.step1Obj.MPANBottomLineNo
                },
                PaymentMethod: this.switchService.step2Obj.billingType
            };
            this.switchService.getElectricPricesList(request).subscribe(function (data) {
                if (data.GetElectricRatesResult.Rates.length > 1) {
                    _this.prices = data.GetElectricRatesResult.Rates;
                    _this.switchService.step3Obj.prices = _this.prices;
                }
                else {
                    alert("No rates found for this meter. Please check that you have entered the correct details.");
                    _this.spinner.hide();
                }
            }, function (err) { return _this.spinner.hide(); }, function () { return _this.spinner.hide(); });
        }
        else {
            request = {
                GasSupply: {
                    Consumption: { Amount: this.switchService.step2Obj.consumption, Type: "Day" },
                    MPR: this.switchService.step1Obj.MPRNNo
                },
                PaymentMethod: this.switchService.step2Obj.billingType,
                PostCode: this.switchService.step1Obj.postCode
            };
            this.switchService.getGasPricesList(request).subscribe(function (data) {
                if (data.GetGasRatesResult.Rates.length > 1) {
                    _this.prices = data.GetGasRatesResult.Rates;
                    _this.switchService.step3Obj.prices = _this.prices;
                }
                else {
                    alert("No rates found for this meter. Please check that you have entered the correct details.");
                    _this.spinner.hide();
                }
                console.log(_this.prices);
            }, function (err) { return _this.spinner.hide(); }, function () { return _this.spinner.hide(); });
        }
    };
    Step3Component.prototype.viewMidStep = function () {
        this.router.navigate([this.switchType + '/usage']);
    };
    Step3Component.prototype.viewFirstStep = function () {
        this.router.navigate([this.switchType]);
    };
    Step3Component.prototype.getSupplierDetails = function (supplier) {
        console.log(supplier);
        this.switchService.step3Obj.supplier = supplier;
        this.router.navigate([this.switchType + '/personal-details']);
    };
    Step3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-step3',
            template: __webpack_require__(/*! ./step3.component.html */ "./src/app/switch-steps/step3/step3.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _switch_service__WEBPACK_IMPORTED_MODULE_1__["SwitchService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], Step3Component);
    return Step3Component;
}());



/***/ }),

/***/ "./src/app/switch-steps/switch.service.ts":
/*!************************************************!*\
  !*** ./src/app/switch-steps/switch.service.ts ***!
  \************************************************/
/*! exports provided: SwitchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchService", function() { return SwitchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var SwitchService = /** @class */ (function () {
    function SwitchService(http, spinner) {
        this.http = http;
        this.spinner = spinner;
        this.step1Obj = {};
        this.step2Obj = {};
        this.step3Obj = {};
        this.personalObj = {};
        this.addressObj = {};
        this.paymentObj = {};
        this.currentUrl = '';
        this.updateForm = false;
        /*     this.step1Obj = { "addresses": [{ "AddressAsLine": "HARRP2ZZ HARROW-ON-THE-HILL SPS LOWLANDS ROAD LOWLANDS ROAD MIDDLESEX HA1 3AW", "currentgspgroupid": "_A", "AddressLine1": "HARRP2ZZ", "linelossfactor": "205", "amrMeter": true, "AddressLine3": "LOWLANDS ROAD", "MPANCore": "1023538759594", "Postcode": "HA1 3AW", "energisationstatus": "E", "meterserialnumber": "E08BG05227", "elecmeterserialnumber": "E08BG05227", "profileclass": "04", "keyMeter": false, "AddressLine8": "MIDDLESEX", "AddressLine2": "HARROW-ON-THE-HILL SPS", "AddressLine5": "LOWLANDS ROAD", "stdsettlementconfig": "0244", "mpantradingstatus": "T", "metertype": "RCAMR", "metertimeswitchclass": "807" }, { "AddressAsLine": "SECOND FLOOR GROVE HOUSE LOWLANDS ROAD HARROW MIDDLESEX HA1 3AW", "currentgspgroupid": "_A", "AddressLine1": "SECOND FLOOR", "linelossfactor": "239", "amrMeter": true, "AddressLine3": "GROVE HOUSE", "MPANCore": "1012853996435", "Postcode": "HA1 3AW", "AddressLine9": "MIDDLESEX", "energisationstatus": "E", "meterserialnumber": "E10BG29256", "elecmeterserialnumber": "E10BG29256", "profileclass": "03", "keyMeter": false, "AddressLine8": "HARROW", "mpantradingstatus": "T", "AddressLine5": "LOWLANDS ROAD", "stdsettlementconfig": "0393", "metertype": "RCAMY", "metertimeswitchclass": "801" }, { "AddressAsLine": "THIRD FLOOR GROVE HOUSE LOWLANDS ROAD HARROW MIDDLESEX HA1 3AW", "currentgspgroupid": "_A", "AddressLine1": "THIRD FLOOR", "linelossfactor": "201", "amrMeter": true, "AddressLine3": "GROVE HOUSE", "MPANCore": "1012853996667", "Postcode": "HA1 3AW", "AddressLine9": "MIDDLESEX", "energisationstatus": "E", "meterserialnumber": "E12Z008938", "elecmeterserialnumber": "E12Z008938", "profileclass": "03", "keyMeter": false, "AddressLine8": "HARROW", "mpantradingstatus": "T", "AddressLine5": "LOWLANDS ROAD", "stdsettlementconfig": "0393", "metertype": "RCAMY", "metertimeswitchclass": "801" }, { "AddressAsLine": "NON POSTAL TELECOMMUNICATIONS MAST ORANGE GLN7423 35 LOWLANDS ROAD HARROW HA1 3AW", "currentgspgroupid": "_A", "AddressLine1": "NON POSTAL", "linelossfactor": "205", "amrMeter": true, "AddressLine3": "35", "MPANCore": "1050000768727", "Postcode": "HA1 3AW", "energisationstatus": "E", "meterserialnumber": "214062010", "elecmeterserialnumber": "214062010", "profileclass": "04", "keyMeter": false, "AddressLine8": "HARROW", "AddressLine2": "TELECOMMUNICATIONS MAST ORANGE GLN7423", "AddressLine5": "LOWLANDS ROAD", "stdsettlementconfig": "0151", "mpantradingstatus": "T", "metertype": "RCAMY", "metertimeswitchclass": "811" }, { "AddressAsLine": "KIOSK AT 37 LOWLANDS ROAD HARROW HA1 3AW", "AddressLine2": "KIOSK AT", "currentgspgroupid": "_A", "linelossfactor": "205", "amrMeter": true, "AddressLine3": "37", "MPANCore": "1050001153175", "Postcode": "HA1 3AW", "energisationstatus": "E", "meterserialnumber": "E16UP08190", "elecmeterserialnumber": "E16UP08190", "profileclass": "04", "keyMeter": false, "AddressLine8": "HARROW", "mpantradingstatus": "T", "AddressLine5": "LOWLANDS ROAD", "stdsettlementconfig": "0244", "metertype": "RCAMY", "metertimeswitchclass": "807" }, { "AddressAsLine": "37 LOWLANDS ROAD HARROW HA1 3AW", "currentgspgroupid": "_A", "linelossfactor": "239", "amrMeter": false, "AddressLine3": "37", "MPANCore": "1012853992750", "Postcode": "HA1 3AW", "energisationstatus": "E", "meterserialnumber": "L77E002687", "elecmeterserialnumber": "L77E002687", "profileclass": "03", "keyMeter": false, "AddressLine8": "HARROW", "mpantradingstatus": "T", "AddressLine5": "LOWLANDS ROAD", "stdsettlementconfig": "0393", "metertype": "N", "metertimeswitchclass": "801" }, { "AddressAsLine": "39 LOWLANDS ROAD HARROW HA1 3AW", "currentgspgroupid": "_A", "linelossfactor": "201", "amrMeter": true, "AddressLine3": "39", "MPANCore": "1023536839324", "Postcode": "HA1 3AW", "energisationstatus": "E", "meterserialnumber": "K10UP03465", "elecmeterserialnumber": "K10UP03465", "profileclass": "03", "keyMeter": false, "AddressLine8": "HARROW", "mpantradingstatus": "T", "AddressLine5": "LOWLANDS ROAD", "stdsettlementconfig": "0393", "metertype": "RCAMY", "metertimeswitchclass": "801" }, { "AddressAsLine": "LOWLANDS HOUSE 51 45 LOWLANDS ROAD HARROW MIDDLESEX HA1 3AW", "currentgspgroupid": "_A", "AddressLine1": "LOWLANDS HOUSE 51", "linelossfactor": "086", "amrMeter": false, "AddressLine3": "45", "MPANCore": "1014568593075", "Postcode": "HA1 3AW", "energisationstatus": "E", "meterserialnumber": "213552003", "elecmeterserialnumber": "213552003", "profileclass": "00", "keyMeter": false, "AddressLine8": "HARROW", "mpantradingstatus": "T", "AddressLine5": "LOWLANDS ROAD", "AddressLine9": "MIDDLESEX", "metertype": "H", "metertimeswitchclass": "900" }, { "AddressAsLine": "GAMCOM SOLUTIONS LTD GROVE HOUSE;55 LOWLANDS ROAD HARROW HA1 3AW", "currentgspgroupid": "_A", "AddressLine1": "GAMCOM SOLUTIONS LTD", "linelossfactor": "201", "amrMeter": true, "AddressLine3": "GROVE HOUSE;55", "MPANCore": "1012853996899", "Postcode": "HA1 3AW", "energisationstatus": "E", "meterserialnumber": "E12Z009577", "elecmeterserialnumber": "E12Z009577", "profileclass": "03", "keyMeter": false, "AddressLine8": "HARROW", "mpantradingstatus": "T", "AddressLine5": "LOWLANDS ROAD", "stdsettlementconfig": "0393", "metertype": "RCAMY", "metertimeswitchclass": "801" }, { "AddressAsLine": "GLOBAL METCORP LTD GROVE HOUSE;55 LOWLANDS ROAD HARROW HA1 3AW", "currentgspgroupid": "_A", "AddressLine1": "GLOBAL METCORP LTD", "linelossfactor": "239", "amrMeter": false, "AddressLine3": "GROVE HOUSE;55", "MPANCore": "1012853996203", "Postcode": "HA1 3AW", "energisationstatus": "E", "meterserialnumber": "L66E013502", "elecmeterserialnumber": "L66E013502", "profileclass": "03", "keyMeter": false, "AddressLine8": "HARROW", "mpantradingstatus": "T", "AddressLine5": "LOWLANDS ROAD", "stdsettlementconfig": "0393", "metertype": "N", "metertimeswitchclass": "801" }, { "AddressAsLine": "ALLIED DUNBAR 67-71 LOWLANDS ROAD HARROW MIDDLESEX HA1 3AW", "currentgspgroupid": "_A", "AddressLine1": "ALLIED DUNBAR", "linelossfactor": "084", "amrMeter": false, "AddressLine3": "67-71", "MPANCore": "1014570203532", "Postcode": "HA1 3AW", "energisationstatus": "E", "meterserialnumber": "K97E61173", "elecmeterserialnumber": "K97E61173", "profileclass": "00", "keyMeter": false, "AddressLine8": "HARROW", "mpantradingstatus": "T", "AddressLine5": "LOWLANDS ROAD", "AddressLine9": "MIDDLESEX", "metertype": "H", "metertimeswitchclass": "845" }, { "AddressAsLine": "F/P, LONDON BOROUGH OF HARROW O/S LOWLANDS RECREATION GROUND TECHNOLOGY HOUSE 73-77 LOWLANDS ROAD OUTSIDE LOWLANDS RECREATION GROUND HARROW HA1 3AW", "currentgspgroupid": "_A", "AddressLine1": "F/P, LONDON BOROUGH OF HARROW", "linelossfactor": "201", "amrMeter": true, "AddressLine3": "TECHNOLOGY HOUSE 73-77", "MPANCore": "1050000607151", "Postcode": "HA1 3AW", "energisationstatus": "E", "meterserialnumber": "E14Z009077", "elecmeterserialnumber": "E14Z009077", "profileclass": "03", "keyMeter": false, "AddressLine8": "HARROW", "AddressLine2": "O/S LOWLANDS RECREATION GROUND", "AddressLine7": "OUTSIDE LOWLANDS RECREATION GROUND", "AddressLine5": "LOWLANDS ROAD", "stdsettlementconfig": "0393", "mpantradingstatus": "T", "metertype": "RCAMR", "metertimeswitchclass": "801" }, { "AddressAsLine": "73-77 LOWLANDS ROAD HARROW MIDDLESEX HA1 3AW", "currentgspgroupid": "_A", "linelossfactor": "086", "amrMeter": false, "AddressLine3": "73-77", "MPANCore": "1015681952460", "Postcode": "HA1 3AW", "energisationstatus": "E", "meterserialnumber": "E10BG79056", "elecmeterserialnumber": "E10BG79056", "profileclass": "00", "keyMeter": false, "AddressLine8": "HARROW", "mpantradingstatus": "T", "AddressLine5": "LOWLANDS ROAD", "AddressLine9": "MIDDLESEX", "metertype": "H", "metertimeswitchclass": "845" }], "MPANBottomLineNo": "1012853996203", "MPANTopLineNo": "03801239", "postCode": "fdg", "supplyAddress": "GLOBAL METCORP LTD GROVE HOUSE;55 LOWLANDS ROAD HARROW HA1 3AW,1012853996203,03801239", "completed": true }
            this.step2Obj = { "annualSpend": 100, "annualUsage": "", "contractStartDate": "2018-06-06T18:30:00.000Z", "currentSupplier": "E-ON", "manualCurrentSupplier": "", "checkManual": false, "billingType": "Quarterly Direct Debit", "smartMeter": "", "consumption": "769", "spendAmount": 100, "completed": true };
            this.step3Obj = { "supplier": { "AnnualPrice": "£73.00", "BaseAnnualPrice": null, "CapacityCharge": null, "ChequeSurcharge": null, "Commission": "£0.00", "ContractEndDate": null, "DayUnitrate": "13.86700", "DirectDebitDiscount": null, "ExtraInfo": "", "Fits": null, "FixedFee": null, "FixedFeeSCUplift": null, "FixedFeeUplift": null, "FlatDirectDebitDiscount": 0, "FooterMessage": "", "NightUnitrate": "0.00000", "NoQuoteReason": "", "OutsidePricingWindow": false, "Period": null, "PlanType": null, "PricebookVersion": null, "RawAnnualPrice": 73, "RawBaseAnnualPrice": 0, "RawCommission": 0, "ReactiveRate": null, "Ref": null, "Renewal": false, "SC": null, "StandingCharge": "20.00000", "Stod1": null, "Stod2": null, "Stod3": null, "Stod4": null, "Stod5": null, "Stod6": null, "Supplier": "Clear Business", "TariffCode": "", "Term": "1", "TransportationCharge": null, "Uplift": "2", "WendUnitrate": "0.00000" } }
            this.personalObj = { "name": "sdfsd", "companyName": "fgf", "companyType": "Public Limited Company", "companyRegNo": "234", "mobileNo": "98745", "emailAddress": "c@g.com", "confirmEmailAddress": "c@g.com", "password": "123", "confirmPassword": "123" }
            this.addressObj = { "residentialStatus": "", "yearsAtProperty": "", "monthsAtProperty": "", "prevAddressLine1": "", "prevAddressLine2": "", "prevCity": "", "prevCountry": "", "prevPostCode": "", "checkBillingAddress": false, "billingAddressLine1": "", "billingAddressLine2": "", "billingCity": "", "billingCountry": "", "billingPostCode": "" }
            this.paymentObj = { "accountHolderName": "Chetan", "directDebitDay": "2", "sortCode": "111111", "accountNumber": "11111111", "bankName": "Clydesdale Bank", "checkManual": false, "terms": true, "manualBankName": "" }
            this.currentUrl = "electricity" */
    }
    SwitchService.prototype.getSupplyAddresses = function (request) {
        this.spinner.show();
        return this.http.post('/api/getSupplyAddresses', request);
        //return this.http.get('/assets/address.json', httpOptions)
    };
    SwitchService.prototype.getElectricPricesList = function (request) {
        this.spinner.show();
        return this.http.post('/api/getElectricPrices', request);
        // return this.http.get('/assets/prices.json', httpOptions)
    };
    SwitchService.prototype.getGasPricesList = function (request) {
        this.spinner.show();
        return this.http.post('/api/getGasPrices', request);
        // return this.http.get('/assets/prices.json', httpOptions)
    };
    SwitchService.prototype.sendDocuSign = function (request) {
        this.spinner.show();
        return this.http.post('/api/sendDocuSign', request);
    };
    SwitchService.prototype.getPostCode = function () {
        this.spinner.show();
        return this.http.get('/api/getPostCode', httpOptions);
    };
    SwitchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], SwitchService);
    return SwitchService;
}());



/***/ }),

/***/ "./src/app/switch-steps/thankyou/thankyou.component.css":
/*!**************************************************************!*\
  !*** ./src/app/switch-steps/thankyou/thankyou.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/switch-steps/thankyou/thankyou.component.html":
/*!***************************************************************!*\
  !*** ./src/app/switch-steps/thankyou/thankyou.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n  <div style=\"padding-top:100px\">\n    <h2>\n      Thank You for using Utility Aid Switching Website for switching to {{switchType}} supplier.\n      <br> Utility Aid has sent you a document on your email <span style=\"color:#3697c2;font-weight:bold\">{{email}}</span> to review and sign.\n      <br>  Please call us at\n      <span style=\"color:#3697c2;font-weight:bold\">0808 1788 170</span> if you have any queries.\n    </h2>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/switch-steps/thankyou/thankyou.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/switch-steps/thankyou/thankyou.component.ts ***!
  \*************************************************************/
/*! exports provided: ThankyouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouComponent", function() { return ThankyouComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _switch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../switch.service */ "./src/app/switch-steps/switch.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThankyouComponent = /** @class */ (function () {
    function ThankyouComponent(switchService) {
        this.switchService = switchService;
        this.switchType = '';
        this.email = '';
    }
    ThankyouComponent.prototype.ngOnInit = function () {
        this.switchType = this.switchService.currentUrl;
        this.email = this.switchService.personalObj.emailAddress;
    };
    ThankyouComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thankyou',
            template: __webpack_require__(/*! ./thankyou.component.html */ "./src/app/switch-steps/thankyou/thankyou.component.html"),
            styles: [__webpack_require__(/*! ./thankyou.component.css */ "./src/app/switch-steps/thankyou/thankyou.component.css")]
        }),
        __metadata("design:paramtypes", [_switch_service__WEBPACK_IMPORTED_MODULE_1__["SwitchService"]])
    ], ThankyouComponent);
    return ThankyouComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/chetan/Desktop/Chetan Git Folder/uaswitchingwebsiteangular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map