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

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
        path: 'personal-details',
        component: _switch_steps_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_10__["PersonalDetailsComponent"]
    },
    {
        path: 'address-details',
        component: _switch_steps_address_details_address_details_component__WEBPACK_IMPORTED_MODULE_11__["AddressDetailsComponent"]
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
                _switch_steps_payment_details_payment_details_component__WEBPACK_IMPORTED_MODULE_12__["PaymentDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]
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

module.exports = "<div class=\"container-fluid text-center\">\n  <div style=\"padding: 20px 0px\">\n    <h1 class=\"fontBold\">Compare your gas &amp; electricity\n    </h1>\n\n    <h2>\n      You can start by simply completing the step-by-step process\n    </h2>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3 col-md-6\">\n        <div class=\"steps\">\n          <img src=\"assets/images/step_1.png\">\n          <br>\n\n          <h3>Your Current Supplier\n          </h3>Tell us about your current energy supplier(s)\n        </div>\n      </div>\n      <div class=\"col-md-3 col-md-6\">\n        <div class=\"steps\">\n          <img src=\"assets/images/step_2.png\">\n          <br>\n\n          <h3>The Options\n          </h3>We'll let you know all the best deals suitable and available in your area\n        </div>\n      </div>\n      <div class=\"col-md-3 col-md-6\">\n        <div class=\"steps\">\n          <img src=\"assets/images/step_3.png\">\n          <br>\n\n          <h3>Switching Provider\n          </h3>Let us help you switch to the best tariff for you and your organisation\n        </div>\n      </div>\n      <div class=\"col-md-3 col-md-6\">\n        <div class=\"steps\">\n          <img src=\"assets/images/step_4.png\">\n          <br>\n\n          <h3>Confirm and Relax\n          </h3>Sit back, relax and start to save money\n        </div>\n      </div>\n    </div>\n  </div>\n  <div style=\"padding: 20px 0px\">\n    <h2>Start comparing prices and tariffs now</h2>\n  </div>\n  <div class=\"container text-center compare\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <a href=\"/gas\">\n          <img src=\"assets/images/icon_gas.png\">\n          <div class=\"switchTypeBtn\">Gas</div>\n        </a>\n      </div>\n      <div class=\"col-sm-6\">\n        <a href=\"/electricity\">\n          <img src=\"assets/images/icon_electricity.png\">\n          <div class=\"switchTypeBtn\">Electricity</div>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>"

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

module.exports = "\n.navbar-brand {\n    display: inline-block;\n    padding-top: 0px;\n    margin-right: 1rem;\n    font-size: 1.25rem;\n    line-height: inherit;\n    white-space: nowrap;\n    height: auto;\n}\n\n.navbar {\n    padding-top: 15px;\n    border: 0;\n    border-radius: 0;\n    margin-bottom: 0;\n    font-size: 12px;\n    letter-spacing: 1px;\n    background: #17252a !important;\n    color: #ffffff;\n    fill: #132026;\n}\n\n.navbar-nav li a:hover {\n    color: #1abc9c !important;\n}\n\n@media (min-width: 768px) {\n    .navbar-right {\n        float: right !important;\n        margin-right: 0px;\n    }\n}\n\n.logo {\n    max-width: 100%;\n    height: auto;\n}\n\n.freephone {\n    font-family: vag_roundedbold;\n    font-size: 20.7px;\n    padding: 8px;\n}\n\n.freephone span {\n    color: #3697c2;\n}\n\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar navbar-default\">\n    <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"/\">\n            <img src=\"assets/images/ua_logo.png\" class=\"logo\" />\n        </a>\n    </div>\n\n\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n        <ul class=\"nav navbar-nav navbar-right\">\n            <li class=\"freephone\">\n                freephone:\n                <span>0808 1788 170</span>\n            </li>\n        </ul>\n    </div>\n</nav>"

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

module.exports = "<!-- First Container -->\n<div class=\"details\">\n  <div class=\"container\">\n    <div class=\"row headDetails\">\n      <div class=\"col-md-8\">\n        <h3>Address Details</h3>\n        <p>Please complete the form below. If we already hold the information, it is pre-filled for your convenience.</p>\n      </div>\n      <div class=\"col-md-4\">\n        <img src=\"http://18.218.232.48:3000/assets/images/energyLogo.png\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container detailsForm\">\n    <div class=\"row headFormDetails\">\n      <h3>About Your Address and Billing</h3>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Post Code</label>\n          <input placeholder=\"Post Code\" class=\"form-control\">\n        </div>\n\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Current Address</label>\n          <input placeholder=\"Residential Status\" class=\"form-control\">\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Residential Status</label>\n          <input placeholder=\"Residential Status\" class=\"form-control\">\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Years at Property</label>\n          <input placeholder=\"Years at Property\" class=\"form-control\">\n        </div>\n\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Months at Property</label>\n          <input placeholder=\"Months at Property\" class=\"form-control\">\n        </div>\n      </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n      <h4 class=\"col-md-12\">Previous Address</h4>\n\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label>Address Line 1</label>\n          <input placeholder=\"Address Line 1\" class=\"form-control\">\n        </div>\n\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label>Address Line 2</label>\n          <input placeholder=\"Address Line 2\" class=\"form-control\">\n        </div>\n\n      </div>\n\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label>City</label>\n          <input placeholder=\"City\" class=\"form-control\">\n        </div>\n\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label>Country</label>\n          <input placeholder=\"Country\" class=\"form-control\">\n        </div>\n\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label>Post Code</label>\n          <input placeholder=\"Post Code\" class=\"form-control\">\n        </div>\n\n      </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-md-12\">My Billing Address is different to my current address.</div>\n      <h4 class=\"col-md-12\">Billing Address</h4>\n\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label>Address Line 1</label>\n          <input placeholder=\"Address Line 1\" class=\"form-control\">\n        </div>\n\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label>Address Line 2</label>\n          <input placeholder=\"Address Line 2\" class=\"form-control\">\n        </div>\n\n      </div>\n\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label>City</label>\n          <input placeholder=\"City\" class=\"form-control\">\n        </div>\n\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label>Country</label>\n          <input placeholder=\"Country\" class=\"form-control\">\n        </div>\n\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label>Post Code</label>\n          <input placeholder=\"Post Code\" class=\"form-control\">\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n\n</div>"

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
    function AddressDetailsComponent() {
    }
    AddressDetailsComponent.prototype.ngOnInit = function () {
    };
    AddressDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-address-details',
            template: __webpack_require__(/*! ./address-details.component.html */ "./src/app/switch-steps/address-details/address-details.component.html"),
            styles: [__webpack_require__(/*! ./address-details.component.css */ "./src/app/switch-steps/address-details/address-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddressDetailsComponent);
    return AddressDetailsComponent;
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

module.exports = "<!-- First Container -->\n<div class=\"details\">\n  <div class=\"container\">\n    <div class=\"row headDetails\">\n      <div class=\"col-md-8\">\n        <h3>Personal Details</h3>\n        <p>Please complete the form below. If we already hold the information, it is pre-filled for your convenience.</p>\n      </div>\n      <div class=\"col-md-4\">\n        <img src=\"http://18.218.232.48:3000/assets/images/energyLogo.png\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container detailsForm\">\n    <div class=\"row headFormDetails\">\n      <h3>About You</h3>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Name</label>\n          <input placeholder=\"Name\" class=\"form-control\">\n        </div>\n\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Company Name</label>\n          <input placeholder=\"Company Name\" class=\"form-control\">\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Company Type</label>\n          <input placeholder=\"Company Type\" class=\"form-control\">\n        </div>\n\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Company Registration Number</label>\n          <input placeholder=\"Company Registration Number\" class=\"form-control\">\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Mobile Number</label>\n          <input placeholder=\"Mobile Number\" class=\"form-control\">\n        </div>\n\n      </div>\n\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Email Address</label>\n          <input placeholder=\"Email Address\" class=\"form-control\">\n        </div>\n\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Confirm Email Address</label>\n          <input placeholder=\"Confirm Email Address\" class=\"form-control\">\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Password</label>\n          <input placeholder=\"Password\" class=\"form-control\">\n        </div>\n\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Confirm Password</label>\n          <input placeholder=\"Confirm Password\" class=\"form-control\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/switch-steps/payment-details/payment-details.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/switch-steps/payment-details/payment-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: PaymentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailsComponent", function() { return PaymentDetailsComponent; });
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

var PaymentDetailsComponent = /** @class */ (function () {
    function PaymentDetailsComponent() {
    }
    PaymentDetailsComponent.prototype.ngOnInit = function () {
    };
    PaymentDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-details',
            template: __webpack_require__(/*! ./payment-details.component.html */ "./src/app/switch-steps/payment-details/payment-details.component.html"),
            styles: [__webpack_require__(/*! ./payment-details.component.css */ "./src/app/switch-steps/payment-details/payment-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<!-- First Container -->\n<div class=\"details\">\n  <div class=\"container\">\n    <div class=\"row headDetails\">\n      <div class=\"col-md-8\">\n        <h3>Personal Details</h3>\n        <p>Please complete the form below. If we already hold the information, it is pre-filled for your convenience.</p>\n      </div>\n      <div class=\"col-md-4\">\n        <img src=\"http://18.218.232.48:3000/assets/images/energyLogo.png\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container detailsForm\">\n    <div class=\"row headFormDetails\">\n      <h3>About You</h3>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Name</label>\n          <input placeholder=\"Name\" class=\"form-control\">\n        </div>\n\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Company Name</label>\n          <input placeholder=\"Company Name\" class=\"form-control\">\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Company Type</label>\n          <input placeholder=\"Company Type\" class=\"form-control\">\n        </div>\n\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Company Registration Number</label>\n          <input placeholder=\"Company Registration Number\" class=\"form-control\">\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Mobile Number</label>\n          <input placeholder=\"Mobile Number\" class=\"form-control\">\n        </div>\n\n      </div>\n\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Email Address</label>\n          <input placeholder=\"Email Address\" class=\"form-control\">\n        </div>\n\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Confirm Email Address</label>\n          <input placeholder=\"Confirm Email Address\" class=\"form-control\">\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Password</label>\n          <input placeholder=\"Password\" class=\"form-control\">\n        </div>\n\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Confirm Password</label>\n          <input placeholder=\"Confirm Password\" class=\"form-control\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/switch-steps/personal-details/personal-details.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/switch-steps/personal-details/personal-details.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PersonalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDetailsComponent", function() { return PersonalDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _switch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../switch.service */ "./src/app/switch-steps/switch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonalDetailsComponent = /** @class */ (function () {
    function PersonalDetailsComponent(router, switchService) {
        this.router = router;
        this.switchService = switchService;
        this.currentStepObject = {};
    }
    PersonalDetailsComponent.prototype.ngOnInit = function () {
    };
    PersonalDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personal-details',
            template: __webpack_require__(/*! ./personal-details.component.html */ "./src/app/switch-steps/personal-details/personal-details.component.html"),
            styles: [__webpack_require__(/*! ./personal-details.component.css */ "./src/app/switch-steps/personal-details/personal-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _switch_service__WEBPACK_IMPORTED_MODULE_1__["SwitchService"]])
    ], PersonalDetailsComponent);
    return PersonalDetailsComponent;
}());



/***/ }),

/***/ "./src/app/switch-steps/step1/step1.component.css":
/*!********************************************************!*\
  !*** ./src/app/switch-steps/step1/step1.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/switch-steps/step1/step1.component.html":
/*!*********************************************************!*\
  !*** ./src/app/switch-steps/step1/step1.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- First Container -->\n<div class=\"container-fluid text-center\">\n  <div style=\"padding: 20px 0px\">\n    <h1 class=\"fontBold\">Compare your {{switchType}}\n\n    </h1>\n  </div>\n\n</div>\n<form [formGroup]=\"switchForm\" (ngSubmit)=\"submitForm(switchForm.value)\">\n  <!-- Circles which indicates the steps of the form: -->\n  <div class=\" container \" style=\"text-align:center;margin-top:40px;max-width: 700px; \">\n    <div class=\"col-xs-4 \">\n      <span class=\"step firststep active\">1</span>\n      <br>Select Supply Address</div>\n    <div class=\"col-xs-4 \">\n      <span class=\"step midstep\" (click)=\"submitForm(switchForm.value)\">2</span>\n      <br>Usage</div>\n    <div class=\"col-xs-4 \">\n      <span class=\"step laststep \" (click)=\"viewLastStep()\">3</span>\n      <br>Supplier List</div>\n  </div>\n\n  <div class=\"container switchforms \" style=\"text-align:center;margin-top:40px;max-width: 1000px; \">\n    <div class=\"tab \">\n      <div class=\"row form-group \">\n        <div class=\"col-sm-3 labelTag \">\n          <label>Post Code *</label>\n        </div>\n        <div class=\"col-sm-6 \">\n          <div class=\"input-group \">\n            <input placeholder=\"Post Code \" class=\"form-control \" formControlName=\"postCode\">\n            <span class=\"input-group-addon \" style=\"font-size:20px;cursor:pointer \">Enter</span>\n\n\n          </div>\n          <div class=\" alert-danger\" *ngIf=\"switchForm.controls['postCode'].touched && !switchForm.controls['postCode'].valid\">\n            <span *ngIf=\"switchForm.controls['postCode'].hasError('required') \">\n              Post Code is required!\n            </span>\n            <span *ngIf=\"switchForm.controls['postCode'].hasError('maxlength') \">\n              max length is 7\n            </span>\n          </div>\n\n        </div>\n        <div class=\"col-sm-3 \" style=\"text-align:left \">\n          <a href=\" \"> Use current location</a>\n        </div>\n      </div>\n\n\n      <div class=\"row form-group \">\n        <div class=\"col-sm-3 labelTag \">\n          <label>Supply Address</label>\n        </div>\n        <div class=\"col-sm-6 \">\n          <select class=\"form-control \" formControlName=\"supplyAddress\">\n            <option value=\"\">--Select--</option>\n            <option value=\"one \">one</option>\n            <option value=\"two \">two</option>\n          </select>\n          <div class=\"alert-danger\" *ngIf=\"switchForm.controls['supplyAddress'].touched && !switchForm.controls['supplyAddress'].valid\">\n            <span *ngIf=\"switchForm.controls['supplyAddress'].hasError('required') \">\n              Supply Address is required!\n            </span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row form-group \">\n        <div class=\"col-sm-3 labelTag \">\n          <label>\n            MPAN/MPRN\n          </label>\n        </div>\n        <div class=\"col-sm-6 \">\n          <label class=\"supplyNumber \"></label>\n        </div>\n      </div>\n      <div class=\"row \">\n        <div class=\"btnRow \">\n          <button class=\"next1 btn btn-secondary \" type=\"submit\" [disabled]='!switchForm.valid'>Next </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n"

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
    function Step1Component(router, switchService, fb) {
        this.router = router;
        this.switchService = switchService;
        this.fb = fb;
        this.switchType = '';
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
    }
    Step1Component.prototype.ngOnInit = function () {
        this.switchService.currentUrl = this.router.url;
        this.switchType = this.switchService.currentUrl.replace('/', '');
        this.switchService.getFoods();
    };
    Step1Component.prototype.submitForm = function (value) {
        if (this.switchForm.valid) {
            this.switchService.step1Obj.postCode = value.postCode;
            this.switchService.step1Obj.supplyAddress = value.supplyAddress;
            this.router.navigate([this.switchType + '/usage']);
        }
    };
    Step1Component.prototype.viewLastStep = function () {
        this.router.navigate([this.switchType + '/pricing-list']);
    };
    Step1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-step1',
            template: __webpack_require__(/*! ./step1.component.html */ "./src/app/switch-steps/step1/step1.component.html"),
            styles: [__webpack_require__(/*! ./step1.component.css */ "./src/app/switch-steps/step1/step1.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _switch_service__WEBPACK_IMPORTED_MODULE_1__["SwitchService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], Step1Component);
    return Step1Component;
}());



/***/ }),

/***/ "./src/app/switch-steps/step2/step2.component.css":
/*!********************************************************!*\
  !*** ./src/app/switch-steps/step2/step2.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/switch-steps/step2/step2.component.html":
/*!*********************************************************!*\
  !*** ./src/app/switch-steps/step2/step2.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- First Container -->\n<div class=\"container-fluid text-center\">\n  <div style=\"padding: 20px 0px\">\n    <h1 class=\"fontBold\">Compare your {{switchType}}\n\n\n    </h1>\n  </div>\n\n</div>\n\n<!-- Circles which indicates the steps of the form: -->\n<div class=\"container\" style=\"text-align:center;margin-top:40px;max-width: 700px;\">\n  <div class=\"col-xs-4\">\n    <span class=\"step firststep active\" (click)=\"viewFirstStep()\">1</span>\n    <br>Select Supply Address</div>\n  <div class=\"col-xs-4\">\n    <span class=\"step midstep active\">2</span>\n    <br>Usage</div>\n  <div class=\"col-xs-4\">\n    <span class=\"step laststep\" (click)=\"viewLastStep()\">3</span>\n    <br>Supplier List</div>\n</div>\n\n<div class=\"container switchforms\" style=\"text-align:center;margin-top:40px;max-width: 1000px;\">\n  <div class=\"tab\">\n    <div class=\"row form-group\">\n      <div class=\"col-sm-3 labelTag\">\n        <label>Annual Spend</label>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"input-group\">\n          <input placeholder=\"Annual Spend\" class=\"form-control\" [(ngModel)]=\"currentStepObject.currentAnnualSpend\" (ngModelChange)=\"modelChanged($event)\">\n          <span class=\"input-group-addon\" style=\"font-size:20px\">&#163;</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"row form-group\">\n      <div class=\"col-sm-3 labelTag\">\n      </div>\n      <div class=\"col-sm-6 text-center\">\n        OR\n      </div>\n    </div>\n    <div class=\"row form-group\">\n      <div class=\"col-sm-3 labelTag\">\n        <label>Annual Usage</label>\n      </div>\n      <div class=\"col-sm-6\">\n\n        <div class=\"input-group\">\n          <input placeholder=\"Annual Usage\" class=\"form-control\" [(ngModel)]=\"currentStepObject.currentAnnualUsage\">\n          <span class=\"input-group-addon\" style=\"font-size:20px\">kWh</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row form-group\">\n      <div class=\"col-sm-3 labelTag\">\n        <label>Contract Start Date</label>\n      </div>\n      <div class=\"col-sm-6\">\n        <input placeholder=\"Contract Start Date\" id=\"contractStartDate\" class=\"form-control\" [(ngModel)]=\"currentStepObject.contractStartDate\">\n\n      </div>\n\n    </div>\n    <script type=\"text/javascript\">\n      $(function () {\n        $('#contractStartDate').datepicker({\n          dateFormat: \"dd-mm-yy\"\n        });\n      });\n    </script>\n\n    <div class=\"row form-group\">\n      <div class=\"col-sm-3 labelTag\">\n        <label>Current Supplier</label>\n      </div>\n      <div class=\"col-sm-6\">\n        <select class=\"form-control\" [(ngModel)]=\"currentStepObject.currentSupplier\">\n          <option value=\"volvo\">--Select Supplier--</option>\n\n        </select>\n      </div>\n    </div>\n\n    <div class=\"row form-group\">\n      <div class=\"col-sm-3 labelTag\">\n        <label>Billing Type</label>\n      </div>\n      <div class=\"col-sm-6\">\n        <select class=\"form-control\" [(ngModel)]=\"currentStepObject.billingType\">\n          <option value=\"volvo\">--Select Billing Type--</option>\n\n        </select>\n      </div>\n    </div>\n    <div class=\"row form-group\">\n      <div class=\"col-sm-3 labelTag\">\n        <label>Smart Meter</label>\n      </div>\n      <div class=\"col-sm-6\">\n        <input style=\"width: 4%;border-color: #5d9cec;\n          background-color: #5d9cec;height:0px\" type=\"checkbox\" name=\"vehicle\" value=\"Car\" [(ngModel)]=\"currentStepObject.smartMeter\">\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"btnRow\">\n        <button class=\"next2 btn btn-secondary\" (click)=\"viewLastStep()\">Next </button>\n        <button class=\"prev1 btn btn-secondary\" (click)=\"viewFirstStep()\">Previous </button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/switch-steps/step2/step2.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/switch-steps/step2/step2.component.ts ***!
  \*******************************************************/
/*! exports provided: Step2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step2Component", function() { return Step2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _switch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../switch.service */ "./src/app/switch-steps/switch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Step2Component = /** @class */ (function () {
    function Step2Component(router, switchService, fb) {
        this.router = router;
        this.switchService = switchService;
        this.fb = fb;
        this.switchType = '';
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
    }
    Step2Component.prototype.ngOnInit = function () {
        if (this.switchService.currentUrl == "") {
            this.router.navigate(['']);
        }
        else {
            this.switchType = this.switchService.currentUrl.replace('/', '');
        }
    };
    Step2Component.prototype.viewFirstStep = function () {
        this.router.navigate([this.switchType]);
    };
    Step2Component.prototype.viewLastStep = function () {
        this.router.navigate([this.switchType + '/pricing-list']);
    };
    Step2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-step2',
            template: __webpack_require__(/*! ./step2.component.html */ "./src/app/switch-steps/step2/step2.component.html"),
            styles: [__webpack_require__(/*! ./step2.component.css */ "./src/app/switch-steps/step2/step2.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _switch_service__WEBPACK_IMPORTED_MODULE_1__["SwitchService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], Step2Component);
    return Step2Component;
}());



/***/ }),

/***/ "./src/app/switch-steps/step3/step3.component.css":
/*!********************************************************!*\
  !*** ./src/app/switch-steps/step3/step3.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/switch-steps/step3/step3.component.html":
/*!*********************************************************!*\
  !*** ./src/app/switch-steps/step3/step3.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- First Container -->\n<div class=\"container-fluid text-center\">\n  <div style=\"padding: 20px 0px\">\n    <h1 class=\"fontBold\">Compare your {{switchType}}\n    </h1>\n  </div>\n\n</div>\n\n<!-- Circles which indicates the steps of the form: -->\n<div class=\"container\" style=\"text-align:center;margin-top:40px;max-width: 700px;\">\n  <div class=\"col-xs-4\">\n    <span class=\"step firststep active\" (click)=\"viewFirstStep()\">1</span>\n    <br>Select Supply Address</div>\n  <div class=\"col-xs-4\">\n    <span class=\"step midstep active\" (click)=\"viewMidStep()\">2</span>\n    <br>Usage</div>\n  <div class=\"col-xs-4\">\n    <span class=\"step laststep active\">3</span>\n    <br>Supplier List</div>\n</div>\n\n<div class=\"container switchforms\" style=\"text-align:center;margin-top:40px;max-width: 1000px;\">\n  <div class=\"tab tab3\">\n    <div class=\"row form-group\">\n\n      <div class=\"col-sm-6\">\n        <div class=\"row\">\n          <div class=\"col-sm-5 labelTag\">\n            Post Code:\n          </div>\n          <div class=\"col-sm-7\">\n            <span>{{switchService.step1Obj.postCode}}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n\n        <div class=\"row\">\n          <div class=\"col-sm-5 labelTag\">\n            Supply Address:\n          </div>\n          <div class=\"col-sm-7\">\n            <span>{{switchService.step1Obj.supplyAddress}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row form-group\">\n\n      <div class=\"col-sm-6\">\n        <div class=\"row\">\n          <div class=\"col-sm-5 labelTag\">\n            Current Annual Spend:\n          </div>\n          <div class=\"col-sm-7\">\n            <span>{{switchService.step2Obj.currentAnnualSpend}}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n\n        <div class=\"row\">\n          <div class=\"col-sm-5 labelTag\">\n            Contract Start Date:\n          </div>\n          <div class=\"col-sm-7\">\n            <span>{{switchService.step2Obj.contractStartDate}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row form-group\">\n\n      <div class=\"col-sm-6\">\n        <div class=\"row\">\n          <div class=\"col-sm-5 labelTag\">\n            Current Supplier:\n          </div>\n          <div class=\"col-sm-7\">\n            <span>{{switchService.step2Obj.currentSupplier}}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n\n        <div class=\"row\">\n          <div class=\"col-sm-5 labelTag\">\n            Billing Type:\n          </div>\n          <div class=\"col-sm-7\">\n            <span>{{switchService.step2Obj.billingType}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row form-group\">\n\n      <div class=\"col-sm-6\">\n        <div class=\"row\">\n          <div class=\"col-sm-5 labelTag\">\n            Smart Meter:\n          </div>\n          <div class=\"col-sm-7\">\n            <span>{{switchService.step2Obj.smartMeter=='true' ? 'a' : 'b'}}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n\n        <div class=\"row\">\n          <div class=\"col-sm-5 labelTag\">\n            Annual Usage:\n          </div>\n          <div class=\"col-sm-7\">\n            <span>{{switchService.step2Obj.currentAnnualUsage}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"container\" style=\"max-width:1000px;margin-top:100px\">\n      <table id=\"pricinglist\" class=\"display text-center\" style=\"width:100%\">\n        <thead>\n          <tr>\n            <th>Supplier</th>\n            <th>Day Rate</th>\n            <th>Standing Charge</th>\n            <th>Cost Per Year</th>\n            <th style=\"background:none !important\"></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>\n              <img src=\"http://18.218.232.48:3000/assets/images/energyLogo.png\">\n              <br> Clear Business\n            </td>\n            <td>14.74400</td>\n            <td>20.00000</td>\n            <td>61</td>\n            <td>\n              <button class=\"prev1 btn btn-primary\">Previous </button>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <img src=\"http://18.218.232.48:3000/assets/images/energyLogo.png\">\n              <br> Scottish\n            </td>\n            <td>14.74400</td>\n            <td>20.00000</td>\n            <td>61</td>\n            <td>\n              <button class=\"prev1 btn btn-primary\">Previous </button>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <img src=\"http://18.218.232.48:3000/assets/images/energyLogo.png\">\n              <br> Utilitia\n            </td>\n            <td>14.74400</td>\n            <td>20.00000</td>\n            <td>61</td>\n            <td>\n              <button class=\"prev1 btn btn-primary\">Previous </button>\n            </td>\n          </tr>\n        </tbody>\n        <tfoot style=\"display: none\">\n          <tr>\n            <th>Supplier</th>\n            <th>Day Rate</th>\n            <th>Standing Charge</th>\n            <th>Cost Per Year</th>\n            <th></th>\n          </tr>\n        </tfoot>\n      </table>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"btnRow\">\n        <button class=\"prev2 btn btn-secondary\" (click)=\"viewMidStep()\">Previous </button>\n      </div>\n    </div>\n\n  </div>\n\n</div>"

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
    function Step3Component(router, switchService) {
        this.router = router;
        this.switchService = switchService;
        this.currentStepObject = {};
        this.switchType = '';
    }
    Step3Component.prototype.ngOnInit = function () {
        if (this.switchService.currentUrl == "") {
            this.router.navigate(['']);
        }
        else {
            this.switchType = this.switchService.currentUrl.replace('/', '');
        }
    };
    Step3Component.prototype.viewMidStep = function () {
        this.router.navigate([this.switchType + '/usage']);
    };
    Step3Component.prototype.viewFirstStep = function () {
        this.router.navigate([this.switchType]);
    };
    Step3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-step3',
            template: __webpack_require__(/*! ./step3.component.html */ "./src/app/switch-steps/step3/step3.component.html"),
            styles: [__webpack_require__(/*! ./step3.component.css */ "./src/app/switch-steps/step3/step3.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _switch_service__WEBPACK_IMPORTED_MODULE_1__["SwitchService"]])
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
    function SwitchService(http) {
        this.http = http;
        this.step1Obj = {};
        this.step2Obj = {};
        this.currentUrl = '';
    }
    SwitchService.prototype.getFoods = function () {
        console.log("dfg");
        return 1;
    };
    SwitchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SwitchService);
    return SwitchService;
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