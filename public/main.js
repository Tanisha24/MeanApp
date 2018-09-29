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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n\t\t\t\t<!-- Intro -->\n\t\t\t\t\t<section id=\"intro\" class=\"wrapper style1 fullscreen fade-up\">\n\t\t\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t\t\t<h1>About Us</h1>\n\t\t\t\t\t\t\t<p>This page is under construction.</p>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</section>\n        </div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _year2015_year2015_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./year2015/year2015.component */ "./src/app/year2015/year2015.component.ts");
/* harmony import */ var _year2011_year2011_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./year2011/year2011.component */ "./src/app/year2011/year2011.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _map_box_map_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./map-box/map-box.component */ "./src/app/map-box/map-box.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: 'year2015', component: _year2015_year2015_component__WEBPACK_IMPORTED_MODULE_3__["Year2015Component"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'mapbox', component: _map_box_map_box_component__WEBPACK_IMPORTED_MODULE_8__["MapBoxComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'year2011', component: _year2011_year2011_component__WEBPACK_IMPORTED_MODULE_4__["Year2011Component"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_year2015_year2015_component__WEBPACK_IMPORTED_MODULE_3__["Year2015Component"],
    _year2011_year2011_component__WEBPACK_IMPORTED_MODULE_4__["Year2011Component"],
    _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
    _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
    _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
    _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
    _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
    _map_box_map_box_component__WEBPACK_IMPORTED_MODULE_8__["MapBoxComponent"]];


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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"is-preload\">\n\t\t\t<section id=\"sidebar\">\n\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t<app-navbar></app-navbar>\n\t\t\t\t</div>\n\t\t\t</section>\n\n\t\t<!-- Wrapper -->\n\t\t\t<div id=\"wrapper\">\n\n\t\t\t\t<!-- Intro -->\n\t\t\t\t\t<section class=\" style1 \">\n\t\t\t\t\t\t<div >\n\t\t\t\t\t\t\t<flash-messages></flash-messages>\n\t\t\t\t\t\t\t<router-outlet></router-outlet>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</section>\n\n</div>\n</div>\n"

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
        this.title = 'angular-src';
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_record_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/record.service */ "./src/app/services/record.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["routingComponents"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesModule"].forRoot()
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_8__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _services_record_service__WEBPACK_IMPORTED_MODULE_10__["RecordService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.authService.loggedIn()) {
            //  console.log("I am logged Out");
            return true;
        }
        else {
            this.router.navigate(['/login']);
            //console.log("I am logged In");
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
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

module.exports = "<div id=\"wrapper\">\n\n\t\t\t\t<!-- Intro -->\n\t\t\t\t\t<section id=\"intro\" class=\"wrapper style1 fullscreen fade-up\">\n\t\t\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t\t\t<h1>ICC World Cup</h1>\n\t\t\t\t\t\t\t<p>Here are some records and interesting statistics about ICC World Cup over years.</p>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</section>\n        </div>\n"

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

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert-danger {\r\n    padding: 20px;\r\n    background-color: #f44336; /* Red */\r\n    color: white;\r\n    margin-bottom: 15px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Three -->\r\n        <section id=\"three\" class=\"wrapper fullscreen style1 fade-up\">\r\n          <div class=\"inner\">\r\n\r\n\r\n                <h2>Login</h2>\r\n                <p>Login here and see details of ICC World Cup over years.</p>\r\n              <div class=\" style2\">\r\n                  <section>\r\n                    <form (submit)=onLoginSubmit()>\r\n                      <div class=\"fields\">\r\n                        <div class=\"field half\">\r\n                          <label for=\"name\">Username</label>\r\n                          <input type=\"text\" name=\"name\" [(ngModel)]=\"username\" id=\"name\" />\r\n                        </div>\r\n                        <div class=\"field half\">\r\n                          <label for=\"email\">Password</label>\r\n                          <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" id=\"email\" />\r\n                        </div>\r\n\r\n                      </div>\r\n                      <ul class=\"actions\">\r\n                        <li><button class=\"button primary\" type=\"submit\" >Login</button></li>\r\n                      </ul>\r\n                    </form>\r\n                  </section>\r\n          </div>\r\n          </div>\r\n        </section>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(flashMessagesService, authService, router) {
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            console.log(data);
            if (data['success']) {
                _this.authService.storeUserData(data['token'], data['user']);
                _this.flashMessagesService.show('You are now logged in', { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/profile']);
            }
            else {
                //  console.log("Something went wrong");
                _this.flashMessagesService.show(data['msg'], { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/map-box/map-box.component.css":
/*!***********************************************!*\
  !*** ./src/app/map-box/map-box.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n      box-sizing:border-box;\r\n    }\r\n\r\n    .sidebar {\r\n      position:relative;\r\n      width:0;\r\n      height:100%;\r\n      top:0;left:0;\r\n      overflow:hidden;\r\n      border-right:1px solid rgba(0,0,0,0.25);\r\n      color:#404040;\r\n    }\r\n\r\n    .pad2 {\r\n      padding:20px;\r\n    }\r\n\r\n    .map {\r\n      position:absolute;\r\n      left:0;\r\n      width:100%;\r\n      top:0;bottom:0;\r\n      height: 100%;\r\n    }\r\n\r\n    h1 {\r\n      font-size:22px;\r\n      margin:0;\r\n      font-weight:400;\r\n      line-height: 20px;\r\n      padding: 20px 2px;\r\n    }\r\n\r\n    a {\r\n      color:#404040;\r\n      text-decoration:none;\r\n    }\r\n\r\n    a:hover {\r\n      color:#101010;\r\n    }\r\n\r\n    .heading {\r\n      background:#fff;\r\n      border-bottom:1px solid #eee;\r\n      min-height:60px;\r\n      line-height:60px;\r\n      padding:0 10px;\r\n      background-color: #00853e;\r\n      color: #fff;\r\n    }\r\n\r\n    .listings {\r\n      height:100%;\r\n      background-color: rgb(255, 255, 255);\r\n      overflow:auto;\r\n      padding-bottom:60px;\r\n    }\r\n\r\n    .listings .item {\r\n      display:block;\r\n      border-bottom:1px solid #eee;\r\n      padding:10px;\r\n      text-decoration:none;\r\n    }\r\n\r\n    .listings .item:last-child { border-bottom:none; }\r\n\r\n    .listings .item .title {\r\n      display:block;\r\n      color: _palette(accent1);\r\n      font-weight:700;\r\n    }\r\n\r\n    .listings .item .title small { font-weight:400; }\r\n\r\n    .listings .item.active .title,\r\n    .listings .item .title:hover { color:#8cc63f; }\r\n\r\n    .listings .item.active {\r\n      background-color:#f8f8f8;\r\n    }\r\n\r\n    ::-webkit-scrollbar {\r\n      width:3px;\r\n      height:3px;\r\n      border-left:0;\r\n      background:rgba(0,0,0,0.1);\r\n    }\r\n\r\n    ::-webkit-scrollbar-track {\r\n      background:none;\r\n    }\r\n\r\n    ::-webkit-scrollbar-thumb {\r\n      background:#00853e;\r\n      border-radius:0;\r\n    }\r\n\r\n    .marker {\r\n      border: none;\r\n      cursor: pointer;\r\n      height: 56px;\r\n      width: 56px;\r\n      background-image: url(data:image/png;base64,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);\r\n      background-color: rgba(0, 0, 0, 0);\r\n    }\r\n\r\n    .clearfix { display:block; }\r\n\r\n    .clearfix:after {\r\n      content:'.';\r\n      display:block;\r\n      height:0;\r\n      clear:both;\r\n      visibility:hidden;\r\n    }\r\n\r\n    /* Marker tweaks */\r\n\r\n    .mapboxgl-popup {\r\n      padding-bottom: 50px;\r\n    }\r\n\r\n    .mapboxgl-popup-close-button {\r\n      display:none;\r\n    }\r\n\r\n    .mapboxgl-popup-content {\r\n      font:400 15px/22px 'Source Sans Pro', 'Helvetica Neue', Sans-serif;\r\n      padding:0;\r\n      width:230px;\r\n    }\r\n\r\n    .mapboxgl-popup-content-wrapper {\r\n      padding:1%;\r\n    }\r\n\r\n    .mapboxgl-popup-content h3 {\r\n      background:#91c949;\r\n      color:#fff;\r\n      margin:0;\r\n      display:block;\r\n      padding:10px;\r\n      border-radius:3px 3px 0 0;\r\n      font-weight:700;\r\n      margin-top:-15px;\r\n    }\r\n\r\n    .mapboxgl-popup-content h4 {\r\n      margin:0;\r\n      display:block;\r\n      padding: 10px 10px 5px 5px;\r\n      font-weight:400;\r\n      color: #808080;\r\n    }\r\n\r\n    .mapboxgl-popup-content div {\r\n      padding:10px;\r\n    }\r\n\r\n    .mapboxgl-container .leaflet-marker-icon {\r\n      cursor:pointer;\r\n    }\r\n\r\n    .mapboxgl-popup-anchor-top > .mapboxgl-popup-content {\r\n      margin-top: 15px;\r\n    }\r\n\r\n    .mapboxgl-popup-anchor-top > .mapboxgl-popup-tip {\r\n      border-bottom-color: #91c949;\r\n    }\r\n"

/***/ }),

/***/ "./src/app/map-box/map-box.component.html":
/*!************************************************!*\
  !*** ./src/app/map-box/map-box.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mapbox  works!!\n  <div id='map' class='map'> </div>\n"

/***/ }),

/***/ "./src/app/map-box/map-box.component.ts":
/*!**********************************************!*\
  !*** ./src/app/map-box/map-box.component.ts ***!
  \**********************************************/
/*! exports provided: MapBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapBoxComponent", function() { return MapBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapBoxComponent = /** @class */ (function () {
    function MapBoxComponent() {
        this.style = 'mapbox://styles/mapbox/light-v9';
    }
    MapBoxComponent.prototype.ngOnInit = function () {
        console.log("BuildMap");
        this.buildMap();
    };
    MapBoxComponent.prototype.buildMap = function () {
        Object.getOwnPropertyDescriptor(mapbox_gl__WEBPACK_IMPORTED_MODULE_1__, "accessToken").set('pk.eyJ1IjoidGFuaXNoYS0yNCIsImEiOiJjam0yOWluNTkwMGhnM2txcjhuOGM3dHhiIn0.3Nf2YwQfz_4_7xTM4Kqlqw');
        if (!mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["supported"]()) {
            alert('Your browser does not support Mapbox GL');
        }
        else {
            this.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["Map"]({
                // container id specified in the HTML
                container: 'map',
                // style URL
                style: this.style,
                // initial position in [long, lat] format
                center: [-96, 37.8],
                // initial zoom
                zoom: 3
                //scrollZoom: false
            });
            this.map.on('load', function () {
                this.addLayer({
                    "id": "points",
                    "type": "symbol",
                    "source": {
                        "type": "geojson",
                        "data": {
                            "type": "FeatureCollection",
                            "features": [{
                                    "type": "Feature",
                                    "geometry": {
                                        "type": "Point",
                                        "coordinates": [-77.03238901390978, 38.913188059745586]
                                    },
                                    "properties": {
                                        "title": "Mapbox DC",
                                        "icon": "monument"
                                    }
                                }, {
                                    "type": "Feature",
                                    "geometry": {
                                        "type": "Point",
                                        "coordinates": [-122.414, 37.776]
                                    },
                                    "properties": {
                                        "title": "Mapbox SF",
                                        "icon": "harbor"
                                    }
                                }]
                        }
                    },
                    "layout": {
                        "icon-image": "{icon}-15",
                        "text-field": "{title}",
                        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                        "text-offset": [0, 0.6],
                        "text-anchor": "top"
                    }
                });
            });
            this.map.addControl(new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["NavigationControl"]());
            console.log("BuildMap Finished");
        }
    };
    MapBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map-box',
            template: __webpack_require__(/*! ./map-box.component.html */ "./src/app/map-box/map-box.component.html"),
            styles: [__webpack_require__(/*! ./map-box.component.css */ "./src/app/map-box/map-box.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapBoxComponent);
    return MapBoxComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\t\t\t\t\t<nav>\n\t\t\t\t\t\t<ul>\n\n\n\t\t\t\t\t\t\t<li>  <a routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions] = \"{exact:true}\">home</a></li>\n\t\t\t\t\t\t\t<li *ngIf=\"authService.loggedIn()\">  <a routerLink=\"/login\" routerLinkActive=\"active\" [routerLinkActiveOptions] = \"{exact:true}\">login</a></li>\n\t\t\t\t\t\t\t<li *ngIf=\"authService.loggedIn()\">\t<a routerLink=\"/register\" routerLinkActive=\"active\" [routerLinkActiveOptions] = \"{exact:true}\">register</a></li>\n\t\t\t\t\t\t\t<li *ngIf=\"authService.loggedIn()\"><a routerLink=\"/about\" routerLinkActive=\"active\" [routerLinkActiveOptions] = \"{exact:true}\">About</a></li>\n\t\t\t\t\t\t\t<li *ngIf=\"!authService.loggedIn()\">\t<a routerLink=\"/profile\" routerLinkActive=\"active\" [routerLinkActiveOptions] = \"{exact:true}\">profile</a></li>\n\t\t\t\t\t\t\t<li *ngIf=\"!authService.loggedIn()\">\t<a routerLink=\"/year2015\" routerLinkActive=\"active\" [routerLinkActiveOptions] = \"{exact:true}\">2015</a></li>\n\t\t\t\t\t\t\t<li *ngIf=\"!authService.loggedIn()\">\t<a routerLink=\"/year2011\" routerLinkActive=\"active\" [routerLinkActiveOptions] = \"{exact:true}\">2011</a></li>\n\t\t\t\t\t\t\t<li *ngIf=\"!authService.loggedIn()\">\t<a routerLink=\"/mapbox\" routerLinkActive=\"active\" [routerLinkActiveOptions] = \"{exact:true}\">mapbox</a></li>\n\n\n\t\t\t\t\t\t\t<li *ngIf=\"!authService.loggedIn()\"><a (click)=\"onLogoutClick()\"  href=\"#\">Logout</a></li>\n\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</nav>\n"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function NavbarComponent(flashMessagesService, authService, router) {
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        //console.log("You are now logged out");
        this.flashMessagesService.show('You are now logged out', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"one\" class=\"wrapper fullscreen style3 spotlights\">\r\n            <section>\r\n\r\n              <div class=\"content\">\r\n                <div class=\"inner\">\r\n\r\n                  <div *ngIf=\"user\">\r\n                    <h2 > Welcome {{user.name}}</h2>\r\n                    <ul class=\"alt\">\r\n                      <li >Username : {{user.username}}</li>\r\n                      <li >Email : {{user.email}}</li>\r\n                    </ul>\r\n                  </div>\r\n                  <h3 > Your Reviews</h3>\r\n\r\n              <table class=\"responsive-table highlight\">\r\n                  <thead>\r\n                    <tr>\r\n\r\n                      <th>Year</th>\r\n                      <th>Review</th>\r\n                      <th></th>\r\n\r\n                    </tr>\r\n                  </thead>\r\n                  <tr *ngFor=\"let use of recordService.views\">\r\n                    \r\n                    <td *ngIf=\"(use.username==user.username)\">{{use.year}}</td>\r\n                    <td *ngIf=\"(use.username==user.username)\">{{use.review}}</td>\r\n                    <td *ngIf=\"(use.username==user.username)\">\r\n\r\n                        <a class=\"action-btn\" (click)=\"onDelete(use._id)\">\r\n                          <i class=\"material-icons\">delete</i>\r\n                        </a>\r\n                      </td>\r\n                  </tr>\r\n                </table>\r\n\r\n\r\n\r\n\r\n\r\n                </div>\r\n              </div>\r\n            </section>\r\n          </section>\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_record_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/record.service */ "./src/app/services/record.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, recordService, router) {
        this.authService = authService;
        this.recordService = recordService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile['user'];
            _this.refreshUserReviews();
            console.log("In ngOnInit");
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.prototype.refreshUserReviews = function () {
        var _this = this;
        this.recordService.getViewList().subscribe(function (res) {
            _this.recordService.views = res;
        });
    };
    ProfileComponent.prototype.onDelete = function (_id) {
        var _this = this;
        if (confirm('Are you sure to delete this record ?') == true) {
            this.recordService.deleteUser(_id).subscribe(function (res) {
                _this.refreshUserReviews();
                //this.resetForm(form);
                //M.toast({ html: 'Deleted successfully', classes: 'rounded' });
            });
        }
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_record_service__WEBPACK_IMPORTED_MODULE_3__["RecordService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"three\" class=\"wrapper fullscreen style1 fade-up\">\n  <div class=\"inner\">\n\n\n        <h2>Register</h2>\n        <p>Register here and see details of ICC World Cup over years.</p>\n      <div class=\" style2\">\n          <section>\n            <form (submit)=onRegisterSubmit()>\n              <div class=\"fields\">\n                <div class=\"field half\">\n                  <label for=\"name\">Name</label>\n                  <input type=\"text\" name=\"name\" [(ngModel)]=\"name\" id=\"name\" />\n\n                </div>\n                <div class=\"field half\">\n                  <label for=\"email\">Email</label>\n                  <input type=\"text\" name=\"email\" [(ngModel)]=\"email\" id=\"email\" />\n                </div>\n              </div>\n              <div class=\"fields\">\n                <div class=\"field half\">\n                  <label for=\"name\">Username</label>\n                  <input type=\"text\" name=\"name\" [(ngModel)]=\"username\" id=\"username\" />\n                </div>\n                <div class=\"field half\">\n                  <label for=\"email\">Password</label>\n                  <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" id=\"password\" />\n                </div>\n\n              </div>\n              <ul class=\"actions\">\n                <li><button class=\"button primary\" type=\"submit\" >Submit</button></li>\n              </ul>\n            </form>\n          </section>\n\n  </div>\n</div>\n</section>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(flashMessagesService, validateService, authService, router) {
        this.flashMessagesService = flashMessagesService;
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        if (!this.validateService.validateRegister(user)) {
            this.flashMessagesService.show('Please fill in all fields!', { cssClass: 'alert-danger', timeout: 3000 });
            //console.log("InValid user");
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessagesService.show('Please enter a valid email!', { cssClass: 'alert-danger', timeout: 3000 });
            //  console.log("InValid email");
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data['success']) {
                //console.log("Registered");
                _this.flashMessagesService.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                //console.log("Something went wrong");
                _this.flashMessagesService.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        /*  let headers = new Headers();
          console.log("In register Service");
          headers.append('Content-Type','application/json');
          return this.http.post('http://localhost:3000/users/register', user,{headers: headers})
            .pipe(map(res => res.json()));*/
        return this.http.post('users/register', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.authenticateUser = function (user) {
        return this.http.post('users/authenticate', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.getProfile = function () {
        console.log("In Auth service getProfile");
        this.loadToken();
        console.log("In AuthToken");
        //console.log(this.authToken);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Authorization': this.authToken, 'Content-Type': 'application/json' });
        return this.http.get('users/profile', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        if (localStorage.id_token == undefined) {
            //console.log('Hello');
            return true;
        }
        else {
            // console.log('Goodbye');
            var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
            //console.log(helper.isTokenExpired(localStorage.id_token));
            return helper.isTokenExpired(localStorage.id_token); // other people are putting 'id_token'' here but it didn't work for me so i just put the localStorage item
        }
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        console.log("In Auth service logout");
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/record.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/record.service.ts ***!
  \********************************************/
/*! exports provided: RecordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordService", function() { return RecordService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecordService = /** @class */ (function () {
    function RecordService(http) {
        this.http = http;
    }
    RecordService.prototype.registerView = function (view) {
        return this.http.post('views', view).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    RecordService.prototype.getViewList = function () {
        console.log("In get View List");
        return this.http.get('views');
    };
    RecordService.prototype.deleteUser = function (_id) {
        return this.http.delete('views' + ("/" + _id));
    };
    RecordService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RecordService);
    return RecordService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
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

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.password == undefined || user.username == undefined)
            return false;
        else
            return true;
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/app/year2011/year2011.component.css":
/*!*************************************************!*\
  !*** ./src/app/year2011/year2011.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/year2011/year2011.component.html":
/*!**************************************************!*\
  !*** ./src/app/year2011/year2011.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n  <section id=\"one\" class=\"wrapper style3 spotlights\">\n  \t\t\t\t\t\t<section>\n\n  \t\t\t\t\t\t\t<div class=\"content\">\n  \t\t\t\t\t\t\t\t<div class=\"inner\">\n\n\n                    <iframe width=\"800\" height=\"600\" src=\"https://datastudio.google.com/embed/reporting/1FFiffs5WVXMiiHJAHzyPwBvm5S5GnRIx/page/QnoY\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n\n\n                \t</div>\n  \t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t</section>\n              <section>\n\n                <div class=\"content\">\n                  <div class=\"inner\">\n                    <h2>Finals Details</h2>\n                    <div class=\"row\">\n\n                      <div class=\"col-6 col-12-medium\">\n\n                          <div>\n                      <ul>\n                      <li>\n  \t\t\t\t\t\t\t\t\t\t\t<b>Host:</b> India, Pakistan, Sri Lanka, Bangladesh\n                        </li>\n\n                          <li>\n                            Stadium: Wankhede Stadium\n                            </li>\n                            <li>\n                              City: Mumbai\n                              </li>\n                            <li>\n                              Player of the Series: Yuvraj Singh\n                              </li>\n                              <li>\n                                Man of the Match of finals: Mahendra Singh Dhoni\n                                </li>\n                            </ul>\n                          </div>\n                        </div>\n                          <div class=\"col-6 col-12-medium\">\n                              <div >\n                          <ul>\n                          <li>\n      \t\t\t\t\t\t\t\t\t\t\tTeam1: Sri Lanka\n                            </li>\n                            <li>\n                              Team2: India\n                              </li>\n                              <li>\n                                Winner: India\n                                </li>\n                                <li>\n                                  Margin: 6 wickets\n                                  </li>\n                                </ul>\n</div>\n                              </div>\n                            </div>\n\n                  </div>\n                </div>\n              </section>\n              <div class=\"inner\">\n\n\n                    <h2>Post your Views</h2>\n\n                  <div class=\" split style2\">\n                      <section>\n                        <form #userForm=\"ngForm\" (submit)=onReviewSubmit(userForm)>\n                          <div class=\"fields\">\n\n                            <div class=\"field \">\n                              <label for=\"email\">Description</label>\n                              <input type=\"text\" name=\"review\" [(ngModel)]=\"review\" id=\"review\" />\n                            </div>\n                          </div>\n\n                          <ul class=\"actions\">\n                            <li><button class=\"button primary\" type=\"submit\" >Submit</button></li>\n                            <li><button class=\"button\" type=\"button\" (click)=\"resetForm(userForm)\">Reset</button></li>\n                          </ul>\n                        </form>\n                      </section>\n                      <section>\n              <ul class=\"alt\">\n                <li>\n                  <i>See what others have to say!</i>\n                </li>\n                <div *ngFor=\"let use of recordService.views\" >\n                <li  *ngIf=\"(use.year==2011)\">\n         {{use.username}} : {{use.review}}\n          </li>\n          </div>\n\n\n              </ul>\n            </section>\n\n              </div>\n            </div>\n\n\n\n  \t\t\t\t\t</section>\n"

/***/ }),

/***/ "./src/app/year2011/year2011.component.ts":
/*!************************************************!*\
  !*** ./src/app/year2011/year2011.component.ts ***!
  \************************************************/
/*! exports provided: Year2011Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Year2011Component", function() { return Year2011Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_record_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/record.service */ "./src/app/services/record.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Year2011Component = /** @class */ (function () {
    function Year2011Component(flashMessagesService, recordService) {
        this.flashMessagesService = flashMessagesService;
        this.recordService = recordService;
    }
    Year2011Component.prototype.ngOnInit = function () {
        this.resetForm();
        this.refreshViewList();
    };
    Year2011Component.prototype.onReviewSubmit = function (form) {
        var _this = this;
        var user = localStorage.getItem('user');
        var json = JSON.parse(user);
        //var json1=JSON.parse(form.value);
        var view = {
            username: json['username'],
            review: form.value['review'],
            year: 2011
        };
        console.log(view);
        this.recordService.registerView(view).subscribe(function (data) {
            if (data['success']) {
                //console.log("Registered");
                _this.flashMessagesService.show('Your view is registered', { cssClass: 'alert-success', timeout: 3000 });
                _this.refreshViewList();
                //this.router.navigate(['/login']);
            }
            else {
                //console.log("Something went wrong");
                _this.flashMessagesService.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.refreshViewList();
                //this.router.navigate(['/register']);
            }
        });
    };
    Year2011Component.prototype.refreshViewList = function () {
        var _this = this;
        this.recordService.getViewList().subscribe(function (res) {
            _this.recordService.views = res;
            console.log(res);
        });
    };
    Year2011Component.prototype.resetForm = function (form) {
        if (form)
            form.reset();
    };
    Year2011Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-year2011',
            template: __webpack_require__(/*! ./year2011.component.html */ "./src/app/year2011/year2011.component.html"),
            styles: [__webpack_require__(/*! ./year2011.component.css */ "./src/app/year2011/year2011.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_record_service__WEBPACK_IMPORTED_MODULE_1__["RecordService"]])
    ], Year2011Component);
    return Year2011Component;
}());



/***/ }),

/***/ "./src/app/year2015/year2015.component.css":
/*!*************************************************!*\
  !*** ./src/app/year2015/year2015.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/year2015/year2015.component.html":
/*!**************************************************!*\
  !*** ./src/app/year2015/year2015.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n  <section id=\"three\" class=\"wrapper style2 spotlights\">\n\n<section>\n  \t\t\t\t\t\t\t<div class=\"content\">\n  \t\t\t\t\t\t\t\t<div class=\"inner\">\n\n\n<iframe width=\"800\" height=\"600\" src=\"https://datastudio.google.com/embed/reporting/1i_0CbrHJizMxL5gDdXZ1lyeLkGC1fd-c/page/k5mY\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n\n\n                \t</div>\n  \t\t\t\t\t\t\t</div>\n</section>\n\n\n<section>\n                <div class=\"content\">\n                  <div class=\"inner\">\n                    <h2>Finals Details</h2>\n                    <div class=\"row\">\n\n                      <div class=\"col-6 col-12-medium\">\n\n                          <div >\n                      <ul >\n                      <li>\n  \t\t\t\t\t\t\t\t\t\t\t<b>Host:</b> Australia, New Zealand\n                        </li>\n\n                          <li>\n                            Stadium: Melbourne Cricket Ground\n                            </li>\n                            <li>\n                              City: Melbourne\n                              </li>\n                            <li>\n                              Player of the Series: Mitchell Starc\n                              </li>\n                              <li>\n                                Man of the Match of finals: James Faulkner\n                                </li>\n                            </ul>\n                          </div>\n                        </div>\n                          <div class=\"col-6 col-12-medium\">\n                              <div>\n                          <ul>\n                          <li>\n      \t\t\t\t\t\t\t\t\t\t\tTeam1: New Zealand\n                            </li>\n                            <li>\n                              Team2: Australia\n                              </li>\n                              <li>\n                                Winner: Australia\n                                </li>\n                                <li>\n                                  Margin: 7 wickets\n                                  </li>\n                                </ul>\n</div>\n                              </div>\n                            </div>\n\n                  </div>\n                </div>\n</section>\n\n                <div class=\"inner\">\n\n\n                      <h2>Post your Views</h2>\n\n                    <div class=\" split style2\">\n                        <section>\n                          <form #userForm=\"ngForm\" (submit)=onReviewSubmit(userForm)>\n                            <div class=\"fields\">\n\n                              <div class=\"field \">\n                                <label for=\"email\">Description</label>\n                                <input type=\"text\" name=\"review\" [(ngModel)]=\"review\" id=\"review\" />\n                              </div>\n                            </div>\n\n                            <ul class=\"actions\">\n                              <li><button class=\"button primary\" type=\"submit\" >Submit</button></li>\n                              <li><button class=\"button\" type=\"button\" (click)=\"resetForm(userForm)\">Reset</button></li>\n                            </ul>\n                          </form>\n                        </section>\n                        <section>\n                <ul class=\"alt\">\n                  <li>\n                    <i>See what others have to say!</i>\n                  </li>\n                  <div *ngFor=\"let use of recordService.views\" >\n                  <li *ngIf=\"(use.year==2015)\">\n                    {{use.username}} : {{use.review}}\n                    </li>\n                  </div>\n\n                </ul>\n              </section>\n\n                </div>\n              </div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/year2015/year2015.component.ts":
/*!************************************************!*\
  !*** ./src/app/year2015/year2015.component.ts ***!
  \************************************************/
/*! exports provided: Year2015Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Year2015Component", function() { return Year2015Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_record_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/record.service */ "./src/app/services/record.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Year2015Component = /** @class */ (function () {
    function Year2015Component(flashMessagesService, recordService) {
        this.flashMessagesService = flashMessagesService;
        this.recordService = recordService;
    }
    Year2015Component.prototype.ngOnInit = function () {
        this.resetForm();
        this.refreshViewList();
    };
    Year2015Component.prototype.onReviewSubmit = function (form) {
        var _this = this;
        var user = localStorage.getItem('user');
        var json = JSON.parse(user);
        //var json1=JSON.parse(form.value);
        var view = {
            username: json['username'],
            review: form.value['review'],
            year: 2015
        };
        console.log(view);
        this.recordService.registerView(view).subscribe(function (data) {
            if (data['success']) {
                //console.log("Registered");
                _this.flashMessagesService.show('Your view is registered', { cssClass: 'alert-success', timeout: 3000 });
                _this.refreshViewList();
                //this.router.navigate(['/login']);
            }
            else {
                //console.log("Something went wrong");
                _this.flashMessagesService.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.refreshViewList();
                //this.router.navigate(['/register']);
            }
        });
    };
    Year2015Component.prototype.refreshViewList = function () {
        var _this = this;
        this.recordService.getViewList().subscribe(function (res) {
            _this.recordService.views = res;
            console.log(res);
        });
    };
    Year2015Component.prototype.resetForm = function (form) {
        if (form)
            form.reset();
    };
    Year2015Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-year2015',
            template: __webpack_require__(/*! ./year2015.component.html */ "./src/app/year2015/year2015.component.html"),
            styles: [__webpack_require__(/*! ./year2015.component.css */ "./src/app/year2015/year2015.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_record_service__WEBPACK_IMPORTED_MODULE_1__["RecordService"]])
    ], Year2015Component);
    return Year2015Component;
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
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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

module.exports = __webpack_require__(/*! C:\Users\tanisha\Desktop\MeanIccApp\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map