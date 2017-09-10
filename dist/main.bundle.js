webpackJsonp([1,4],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _a) || Object])
    ], AlertService);
    return AlertService;
    var _a;
}());
//# sourceMappingURL=/home/applica/warek/qrappv2/src/alert.service.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BusyService = (function () {
    function BusyService() {
        this.busy = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    BusyService.prototype.show = function () {
        this.busy.next({ show: true });
    };
    BusyService.prototype.hide = function () {
        this.busy.next({ show: false });
    };
    BusyService.prototype.getBusy = function () {
        return this.busy.asObservable();
    };
    BusyService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], BusyService);
    return BusyService;
}());
//# sourceMappingURL=/home/applica/warek/qrappv2/src/busy.service.js.map

/***/ }),

/***/ 391:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 391;


/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(509);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/applica/warek/qrappv2/src/main.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_qrcode__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_input__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_pdf_make__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_index__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_app_app_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_alert_alert_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_busy_busy_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_register_register_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_object_object_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_feedback_feedback_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_feedback_admin_feedback_admin_component__ = __webpack_require__(511);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















// Define the routes
var ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_15__components_register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'object/details/:id',
        component: __WEBPACK_IMPORTED_MODULE_16__components_object_object_component__["a" /* ObjectDetailsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'object/add',
        component: __WEBPACK_IMPORTED_MODULE_16__components_object_object_component__["b" /* ObjectCreateComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'feedback/add',
        component: __WEBPACK_IMPORTED_MODULE_17__components_feedback_feedback_component__["a" /* FeedbackComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'feedback',
        component: __WEBPACK_IMPORTED_MODULE_18__components_feedback_admin_feedback_admin_component__["a" /* FeedbackAdminComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_app_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__directives_alert_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_12__directives_busy_busy_component__["a" /* BusyComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_object_object_component__["b" /* ObjectCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_object_object_component__["a" /* ObjectDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_feedback_feedback_component__["a" /* FeedbackComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_feedback_admin_feedback_admin_component__["a" /* FeedbackAdminComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng_pdf_make__["a" /* PdfmakeModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(ROUTES),
                __WEBPACK_IMPORTED_MODULE_5_angular2_qrcode__["a" /* QRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_file_input__["a" /* Ng2FileInputModule */].forRoot({
                    dropText: "Zrób zdjęcie i dodaj plik QR kodu",
                    browseText: "Wybierz"
                })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_index__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_8__services_index__["b" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_8__services_index__["c" /* BusyService */],
                __WEBPACK_IMPORTED_MODULE_8__services_index__["d" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_8__services_index__["e" /* ObjectService */],
                __WEBPACK_IMPORTED_MODULE_8__services_index__["f" /* WordService */],
                __WEBPACK_IMPORTED_MODULE_8__services_index__["g" /* FeedbackService */],
                __WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__components_app_app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/applica/warek/qrappv2/src/app.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(702),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/applica/warek/qrappv2/src/app.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackAdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedbackAdminComponent = (function () {
    function FeedbackAdminComponent(router, feedbackService, alertService, busyService) {
        this.router = router;
        this.feedbackService = feedbackService;
        this.alertService = alertService;
        this.busyService = busyService;
    }
    FeedbackAdminComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    FeedbackAdminComponent.prototype.getAll = function () {
        var _this = this;
        this.busyService.show();
        this.feedbackService.getAll()
            .subscribe(function (data) {
            _this.busyService.hide();
            _this.feedbackList = data;
        }, function (error) {
            _this.busyService.hide();
            _this.alertService.error('Nie można pobrać odpowiedzi!');
        });
    };
    FeedbackAdminComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-feedback-admin',
            template: __webpack_require__(703),
            styles: [__webpack_require__(693)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["g" /* FeedbackService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["g" /* FeedbackService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* BusyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* BusyService */]) === 'function' && _d) || Object])
    ], FeedbackAdminComponent);
    return FeedbackAdminComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/applica/warek/qrappv2/src/feedback-admin.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedbackComponent = (function () {
    function FeedbackComponent(router, feedbackService, alertService, busyService) {
        this.router = router;
        this.feedbackService = feedbackService;
        this.alertService = alertService;
        this.busyService = busyService;
        this.model = {};
        this.loading = false;
    }
    FeedbackComponent.prototype.sendFeedback = function () {
        var _this = this;
        this.loading = true;
        this.busyService.show();
        this.feedbackService.create(this.model)
            .subscribe(function (data) {
            _this.busyService.hide();
            _this.alertService.success('Dziękujemy za opinię!', true);
            _this.router.navigate(['/']);
        }, function (error) {
            _this.busyService.hide();
            _this.alertService.error(error._body);
            _this.loading = false;
        });
    };
    FeedbackComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-feedback',
            template: __webpack_require__(704),
            styles: [__webpack_require__(694)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["g" /* FeedbackService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["g" /* FeedbackService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* BusyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* BusyService */]) === 'function' && _d) || Object])
    ], FeedbackComponent);
    return FeedbackComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/applica/warek/qrappv2/src/feedback.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QrCode = __webpack_require__(690);
var HomeComponent = (function () {
    function HomeComponent(userService, objectService, alertService, busyService) {
        this.userService = userService;
        this.objectService = objectService;
        this.alertService = alertService;
        this.busyService = busyService;
        this.objects = [];
        this.historyObjects = [];
        this.sharedObjects = [];
        this.qrFile = '';
        this.qr = new QrCode();
        this.passphrase = '';
        this.passError = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadAllObjects();
        this.loadAllHistoryObjects();
        this.loadAllSharedObjects();
    };
    // deleteUser(_id: string) {
    //     this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
    // }
    HomeComponent.prototype.loadAllObjects = function () {
        var _this = this;
        this.busyService.show();
        this.objectService.getAll().subscribe(function (objects) {
            _this.busyService.hide();
            _this.objects = objects;
        }, function (error) {
            _this.busyService.hide();
            _this.alertService.error(error._body);
        });
    };
    HomeComponent.prototype.loadAllHistoryObjects = function () {
        var _this = this;
        this.busyService.show();
        this.objectService.getAllWithHistory().subscribe(function (objects) {
            _this.busyService.hide();
            _this.historyObjects = objects;
        }, function (error) {
            _this.busyService.hide();
            _this.alertService.error(error._body);
        });
    };
    HomeComponent.prototype.loadAllSharedObjects = function () {
        var _this = this;
        this.busyService.show();
        this.objectService.getAllShared().subscribe(function (objects) {
            _this.busyService.hide();
            _this.sharedObjects = objects;
        }, function (error) {
            _this.busyService.hide();
            _this.alertService.error(error._body);
        });
    };
    HomeComponent.prototype.changeListener = function ($event) {
        this.readThis($event.target);
    };
    HomeComponent.prototype.readThis = function (inputValue) {
        this.busyService.show();
        var file = inputValue.files[0];
        var myReader = new FileReader();
        var dataSource = '';
        var _this = this;
        _this.qr.callback = function (err, result) {
            if (result) {
                _this.qrFile = result.result;
                _this.objectService.updateOwnerByQr(_this.qrFile)
                    .subscribe(function (data) {
                    _this.busyService.hide();
                    _this.alertService.success('Przejąłeś przedmiot!');
                    _this.loadAllObjects();
                    _this.loadAllHistoryObjects();
                }, function (error) {
                    _this.busyService.hide();
                    _this.alertService.error('Coś poszło nie tak, spróbuj jeszcze raz!');
                });
            }
            else {
                _this.busyService.hide();
                _this.alertService.error('Coś poszło nie tak, spróbuj jeszcze raz!');
            }
            return;
        };
        myReader.onloadend = function (e) {
            dataSource = myReader.result;
            _this.qr.decode(myReader.result);
        };
        myReader.readAsDataURL(file);
        this.qrFile = dataSource;
    };
    HomeComponent.prototype.updateByPassphrase = function () {
        var _this = this;
        this.busyService.show();
        var passphrase = this.passphrase.toLowerCase();
        passphrase = this.escapeDiacritics(passphrase);
        this.objectService.updateOwnerByPassphrase(passphrase)
            .subscribe(function (data) {
            _this.busyService.hide();
            _this.alertService.success('Przejąłeś przedmiot!');
            _this.loadAllObjects();
            _this.loadAllHistoryObjects();
        }, function (error) {
            _this.busyService.hide();
            if (error._body === 'Podana fraza jest błędna lub nie ma takiego obiektu!') {
                _this.alertService.error('Podana fraza jest błędna lub nie ma takiego obiektu!');
            }
            else {
                _this.alertService.error('Coś poszło nie tak, spróbuj jeszcze raz!');
            }
        });
    };
    HomeComponent.prototype.validate = function (event) {
        this.passphrase = event.target.value;
        // const patt = /(\w+\W+){11}(\w+)/;
        if (this.passphrase[this.passphrase.length - 1] === ' ') {
            this.passphrase = this.passphrase.slice(0, -1);
        }
        var res = this.passphrase.split(' ');
        if (res.length === 12) {
            this.passError = false;
        }
        else {
            this.passError = true;
        }
        // !patt.test(this.passphrase);
    };
    HomeComponent.prototype.escapeDiacritics = function (string) {
        return string.replace(/ą/g, 'a').replace(/Ą/g, 'A')
            .replace(/ć/g, 'c').replace(/Ć/g, 'C')
            .replace(/ę/g, 'e').replace(/Ę/g, 'E')
            .replace(/ł/g, 'l').replace(/Ł/g, 'L')
            .replace(/ń/g, 'n').replace(/Ń/g, 'N')
            .replace(/ó/g, 'o').replace(/Ó/g, 'O')
            .replace(/ś/g, 's').replace(/Ś/g, 'S')
            .replace(/ż/g, 'z').replace(/Ż/g, 'Z')
            .replace(/ź/g, 'z').replace(/Ź/g, 'Z');
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(705),
            styles: [__webpack_require__(695)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["d" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_index__["d" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["e" /* ObjectService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_index__["e" /* ObjectService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["b" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_index__["b" /* AlertService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["c" /* BusyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_index__["c" /* BusyService */]) === 'function' && _d) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/applica/warek/qrappv2/src/home.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, alertService, busyService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.busyService = busyService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.busyService.show();
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            _this.busyService.hide();
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.busyService.hide();
            _this.alertService.error(error._body);
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(706),
            styles: [__webpack_require__(696)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AuthenticationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* BusyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* BusyService */]) === 'function' && _e) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/home/applica/warek/qrappv2/src/login.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object_create_component__ = __webpack_require__(516);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__object_create_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__object_details_component__ = __webpack_require__(517);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__object_details_component__["a"]; });


//# sourceMappingURL=/home/applica/warek/qrappv2/src/object.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ObjectCreateComponent = (function () {
    function ObjectCreateComponent(userService, objectService, alertService, busyService, wordService, router) {
        this.userService = userService;
        this.objectService = objectService;
        this.alertService = alertService;
        this.busyService = busyService;
        this.wordService = wordService;
        this.router = router;
        this.model = {};
        this.loading = false;
        this.passError = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ObjectCreateComponent.prototype.addObject = function () {
        var _this = this;
        if (this.passError) {
            this.alertService.error("Passphrase musi mieć 12 słów!");
            return;
        }
        this.busyService.show();
        var date = new Date();
        this.loading = true;
        this.model.passphraseFind = this.model.passphraseDisplay.toLowerCase();
        this.model.passphraseFind = this.escapeDiacritics(this.model.passphraseFind);
        var str = this.model.passphrase;
        this.model.qrCode = this.model.description + date.getTime();
        this.model.firstOwner = this.currentUser._id;
        this.model.currentOwner = this.currentUser._id;
        var minutes = date.getMinutes();
        var minutesString = '' + minutes;
        if (minutes < 10) {
            minutesString = '0' + minutes;
        }
        this.model.ownersList = [{ user: this.currentUser._id, time: date.getDate() + '-' + (date.getMonth() * 1 + 1) + '-'
                    + date.getFullYear() + ' ' + date.getHours() + ':' + minutesString }];
        this.objectService.create(this.model)
            .subscribe(function (data) {
            _this.busyService.hide();
            _this.alertService.success('Dodano przedmiot!', true);
            _this.router.navigate(['/']);
        }, function (error) {
            _this.busyService.hide();
            _this.alertService.error(error._body);
            _this.loading = false;
        });
    };
    ObjectCreateComponent.prototype.validate = function (event) {
        this.model.passphraseDisplay = event.target.value;
        // const patt = /(\w+\W+){11}(\w+)/;
        if (this.model.passphraseDisplay[this.model.passphraseDisplay.length - 1] === ' ') {
            this.model.passphraseDisplay = this.model.passphraseDisplay.slice(0, -1);
        }
        var res = this.model.passphraseDisplay.split(' ');
        if (res.length === 12) {
            this.passError = false;
        }
        else {
            this.passError = true;
        }
        // !patt.test(this.passphrase);
    };
    ObjectCreateComponent.prototype.escapeDiacritics = function (string) {
        return string.replace(/ą/g, 'a').replace(/Ą/g, 'A')
            .replace(/ć/g, 'c').replace(/Ć/g, 'C')
            .replace(/ę/g, 'e').replace(/Ę/g, 'E')
            .replace(/ł/g, 'l').replace(/Ł/g, 'L')
            .replace(/ń/g, 'n').replace(/Ń/g, 'N')
            .replace(/ó/g, 'o').replace(/Ó/g, 'O')
            .replace(/ś/g, 's').replace(/Ś/g, 'S')
            .replace(/ż/g, 'z').replace(/Ż/g, 'Z')
            .replace(/ź/g, 'z').replace(/Ź/g, 'Z');
    };
    ObjectCreateComponent.prototype.getRandomWords = function () {
        var _this = this;
        this.busyService.show();
        this.wordService.getTwelve()
            .subscribe(function (words) {
            _this.busyService.hide();
            _this.alertService.success('Pobrano losowe słowa!');
            _this.model.passphraseDisplay = '';
            for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
                var word = words_1[_i];
                _this.model.passphraseDisplay += word + ' ';
            }
            _this.model.passphraseDisplay = _this.model.passphraseDisplay.slice(0, -1);
        }, function (error) {
            _this.alertService.error('Nie można pobrać losowych słów!');
            _this.busyService.hide();
        });
    };
    ObjectCreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-object',
            template: __webpack_require__(707),
            styles: [__webpack_require__(697)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["d" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["d" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* ObjectService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* ObjectService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* BusyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* BusyService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* WordService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* WordService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _f) || Object])
    ], ObjectCreateComponent);
    return ObjectCreateComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/home/applica/warek/qrappv2/src/object.create.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_pdf_make_pdfmake_pdfmake_service__ = __webpack_require__(236);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// const PdfMake = require('pdfmake');
var ObjectDetailsComponent = (function () {
    function ObjectDetailsComponent(route, userService, objectService, alertService, busyService, router, qrCode, pdfmake) {
        this.route = route;
        this.userService = userService;
        this.objectService = objectService;
        this.alertService = alertService;
        this.busyService = busyService;
        this.router = router;
        this.qrCode = qrCode;
        this.pdfmake = pdfmake;
        this.loading = false;
        this.canEdit = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ObjectDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.busyService.show();
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.objectService.getById(this.id)
            .subscribe(function (data) {
            _this.busyService.hide();
            _this.object = data;
            _this.canEdit = _this.currentUser._id === data.currentOwner;
            _this.loading = false;
        }, function (error) {
            _this.busyService.hide();
            _this.alertService.error(error._body);
            _this.loading = false;
        });
    };
    ObjectDetailsComponent.prototype.delete = function () {
        var _this = this;
        this.busyService.show();
        this.loading = true;
        this.objectService.delete(this.id)
            .subscribe(function (data) {
            _this.busyService.hide();
            _this.alertService.success('Usunięto przedmiot!', true);
            _this.router.navigate(['/']);
        }, function (error) {
            _this.busyService.hide();
            _this.alertService.error(error._body);
            _this.loading = false;
        });
    };
    ObjectDetailsComponent.prototype.share = function () {
        var _this = this;
        this.busyService.show();
        this.loading = true;
        this.objectService.share(this.id)
            .subscribe(function (data) {
            _this.busyService.hide();
            _this.alertService.success('Przedmiot jest dostępny do wypożyczenia!', true);
            _this.router.navigate(['/']);
        }, function (error) {
            _this.busyService.hide();
            _this.alertService.error(error._body);
            _this.loading = false;
        });
    };
    ObjectDetailsComponent.prototype.unShare = function () {
        var _this = this;
        this.busyService.show();
        this.loading = true;
        this.objectService.unShare(this.id)
            .subscribe(function (data) {
            _this.busyService.hide();
            _this.alertService.success('Przedmiot nie jest już dostępny do wypożyczenia!', true);
            _this.router.navigate(['/']);
        }, function (error) {
            _this.busyService.hide();
            _this.alertService.error(error._body);
            _this.loading = false;
        });
    };
    ObjectDetailsComponent.prototype.printQRCode = function () {
        this.busyService.show();
        var dataImage = this.qrCode.nativeElement.querySelector('img');
        dataImage = dataImage.src;
        this.pdfmake.addText(this.object.passphraseDisplay);
        this.pdfmake.addText(' ');
        this.pdfmake.docDefinition.content.push({
            image: dataImage,
            width: 150
        });
        this.pdfmake.download('qrCode.pdf');
        this.pdfmake.docDefinition.content.length = 0;
        this.busyService.hide();
    };
    ObjectDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-object',
            template: __webpack_require__(708),
            styles: [__webpack_require__(698)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["d" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["d" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* ObjectService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* ObjectService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* BusyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* BusyService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3_ng_pdf_make_pdfmake_pdfmake_service__["a" /* PdfmakeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_ng_pdf_make_pdfmake_pdfmake_service__["a" /* PdfmakeService */]) === 'function' && _h) || Object])
    ], ObjectDetailsComponent);
    return ObjectDetailsComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/home/applica/warek/qrappv2/src/object.details.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(router, userService, alertService, busyService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.busyService = busyService;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.busyService.show();
        this.userService.create(this.model)
            .subscribe(function (data) {
            _this.busyService.hide();
            _this.alertService.success('Rejestracja pomyślna!', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.busyService.hide();
            _this.alertService.error(error._body);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__(709),
            styles: [__webpack_require__(699)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["d" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["d" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* BusyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* BusyService */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/applica/warek/qrappv2/src/register.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__(333);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    AlertComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'alert',
            template: __webpack_require__(710),
            styles: [__webpack_require__(701)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]) === 'function' && _a) || Object])
    ], AlertComponent);
    return AlertComponent;
    var _a;
}());
//# sourceMappingURL=/home/applica/warek/qrappv2/src/alert.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_busy_service__ = __webpack_require__(334);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BusyComponent = (function () {
    function BusyComponent(busyService) {
        this.busyService = busyService;
    }
    BusyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.busyService.getBusy()
            .subscribe(function (busy) {
            _this.loading = busy.show;
        });
    };
    BusyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'busy',
            template: __webpack_require__(711),
            styles: [__webpack_require__(700)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_busy_service__["a" /* BusyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_busy_service__["a" /* BusyService */]) === 'function' && _a) || Object])
    ], BusyComponent);
    return BusyComponent;
    var _a;
}());
//# sourceMappingURL=/home/applica/warek/qrappv2/src/busy.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _a) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a;
}());
//# sourceMappingURL=/home/applica/warek/qrappv2/src/auth.guard.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post('/api/users/authenticate', { username: username, password: password })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a;
}());
//# sourceMappingURL=/home/applica/warek/qrappv2/src/authentication.service.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedbackService = (function () {
    function FeedbackService(http) {
        this.http = http;
    }
    FeedbackService.prototype.getAll = function () {
        return this.http.get('/api/feedback', this.jwt()).map(function (response) { return response.json(); });
    };
    FeedbackService.prototype.create = function (feedback) {
        return this.http.post('/api/feedback/add', feedback, this.jwt());
    };
    FeedbackService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        }
    };
    FeedbackService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], FeedbackService);
    return FeedbackService;
    var _a;
}());
//# sourceMappingURL=/home/applica/warek/qrappv2/src/feedback.service.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ObjectService = (function () {
    function ObjectService(http) {
        this.http = http;
    }
    ObjectService.prototype.getAll = function () {
        return this.http.get('/api/objects', this.jwt()).map(function (response) { return response.json(); });
    };
    ObjectService.prototype.getAllWithHistory = function () {
        return this.http.get('/api/objects/withHistory', this.jwt()).map(function (response) { return response.json(); });
    };
    ObjectService.prototype.getAllShared = function () {
        return this.http.get('/api/objects/allShared', this.jwt()).map(function (response) { return response.json(); });
    };
    ObjectService.prototype.getById = function (_id) {
        return this.http.get('/api/objects/' + _id, this.jwt()).map(function (response) { return response.json(); });
    };
    ObjectService.prototype.create = function (object) {
        return this.http.post('/api/objects/add', object, this.jwt());
    };
    ObjectService.prototype.update = function (object) {
        return this.http.put('/api/objects/' + object._id, object, this.jwt());
    };
    ObjectService.prototype.share = function (_id) {
        return this.http.put('/api/objects/share/' + _id, null, this.jwt());
    };
    ObjectService.prototype.unShare = function (_id) {
        return this.http.put('/api/objects/unShare/' + _id, null, this.jwt());
    };
    ObjectService.prototype.updateOwnerByQr = function (qrString) {
        var data = { 'qrCodeString': qrString };
        return this.http.put('/api/objects', data, this.jwt());
    };
    ObjectService.prototype.updateOwnerByPassphrase = function (passphrase) {
        var data = { 'passphrase': passphrase };
        return this.http.put('/api/objects/passphrase', data, this.jwt());
    };
    ObjectService.prototype.delete = function (_id) {
        return this.http.delete('/api/objects/' + _id, this.jwt());
    };
    // private helper methods
    ObjectService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        }
    };
    ObjectService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], ObjectService);
    return ObjectService;
    var _a;
}());
//# sourceMappingURL=/home/applica/warek/qrappv2/src/object.service.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get('/api/users', this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (_id) {
        return this.http.get('/api/users/' + _id, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.create = function (user) {
        return this.http.post('/api/users/register', user, this.jwt());
    };
    UserService.prototype.update = function (user) {
        return this.http.put('/api/users/' + user._id, user, this.jwt());
    };
    UserService.prototype.delete = function (_id) {
        return this.http.delete('/api/users/' + _id, this.jwt());
    };
    // private helper methods
    UserService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        }
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
//# sourceMappingURL=/home/applica/warek/qrappv2/src/user.service.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WordService = (function () {
    function WordService(http) {
        this.http = http;
    }
    WordService.prototype.getTwelve = function () {
        return this.http.get('/api/words', this.jwt()).map(function (response) { return response.json(); });
    };
    // private helper methods
    WordService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        }
    };
    WordService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], WordService);
    return WordService;
    var _a;
}());
//# sourceMappingURL=/home/applica/warek/qrappv2/src/word.service.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/applica/warek/qrappv2/src/environment.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_service__ = __webpack_require__(333);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__(522);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(525);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__object_service__ = __webpack_require__(524);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__object_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__busy_service__ = __webpack_require__(334);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__busy_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__word_service__ = __webpack_require__(526);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__word_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__feedback_service__ = __webpack_require__(523);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__feedback_service__["a"]; });







//# sourceMappingURL=/home/applica/warek/qrappv2/src/index.js.map

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = ".footer {\n  height: 80px;\n  margin-top: 10px;\n  background: #fff; }\n"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = ".inputfile {\n  display: none; }\n"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = ".owners {\n  padding-left: 0; }\n  .owners li {\n    list-style-type: none; }\n"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = ".overlay {\n  position: fixed;\n  height: 100vh;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 999999999; }\n\n.spinner {\n  margin: 25% auto;\n  width: 70px;\n  text-align: center; }\n\n.spinner > div {\n  width: 18px;\n  height: 18px;\n  background-color: #fff;\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both; }\n\n.spinner .bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s; }\n\n.spinner .bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s; }\n\n@-webkit-keyframes sk-bouncedelay {\n  0%,\n  80%,\n  100% {\n    -webkit-transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bouncedelay {\n  0%,\n  80%,\n  100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>\n        {{title}}\n    </h1>\n    <alert></alert>\n    <busy></busy>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\n    <h2>Lista odpowiedzi</h2>\n    <table class=\"table table-striped\">\n        <thead class=\"thead-default\">\n            <tr>\n                <th width=\"20%\">Email</th>\n                <th width=\"40%\">Jak oceniasz przydatność tego rozwiązania?</th>\n                <th width=\"40%\">Co byś dodał lub zmienił w tym rozwiązaniu i dlaczego?</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let feedback of feedbackList\">\n                <td>{{feedback.user.username}}</td>\n                <td>{{feedback.question1}}</td>\n                <td>{{feedback.question2}}</td>\n            </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n        <h2>Przekaż opinię!</h2>\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && sendFeedback()\" #f=\"ngForm\">\n            <div class=\"form-group\">\n                <label for=\"question1\">Jak oceniasz przydatność tego rozwiązania?</label>\n                <input type=\"textarea\" class=\"form-control\" placeholder=\"Aplikację oceniam jako ...\" name=\"question1\" [(ngModel)]=\"model.question1\" #question1=\"ngModel\" required>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"question2\">Co byś dodał lub zmienił w tym rozwiązaniu i dlaczego?</label>\n                <input type=\"textarea\" class=\"form-control\" placeholder=\"Dodał(a)bym ...\" name=\"question2\" [(ngModel)]=\"model.question2\" #question2=\"ngModel\" required>\n            </div>\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Wyślij</button>\n            <a [routerLink]=\"['/']\" class=\"btn btn-link\">Wróć</a>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n    <h1>Hej, {{currentUser.firstName}}!</h1>\n    <div class=\"clearfix\"></div>\n    <p>Dodaj Twój nowy przedmiot do wypożyczenia</p>\n    <p><button [routerLink]=\"['/object/add']\" class=\"btn btn-primary\">Dodaj</button></p>\n    <div class=\"clearfix\"></div>\n    <p>Przejmij przedmiot od innej osoby dodając zdjęcie QR kodu tego przedmiotu</p>\n    <ng2-file-input (change)=\"changeListener($event)\"></ng2-file-input>\n    <div class=\"clearfix\"></div>\n    <p>Przejmij przedmiot od innej osoby wpisując 12 słów przedmiotu:</p>\n    <input type=\"text\" pattern=\"(\\w+\\W+){11}(\\w+)\" (input)=\"validate($event)\" name=\"passphrase\" />\n    <button [disabled]=\"passError\" class=\"btn btn-primary\" (click)=\"updateByPassphrase()\">Przypisz</button>\n    <p *ngIf=\"passError\" class=\"help-block\">Passphrase musi mieć 12 słów!</p>\n    <div class=\"clearfix\"></div>\n    <p>Lista Twoich przedmiotów:</p>\n    <ul>\n        <li *ngFor=\"let obj of objects\">\n            <a [routerLink]=\"['/object/details',obj._id]\">{{obj.name}}</a>\n        </li>\n    </ul>\n    <div class=\"clearfix\"></div>\n    <p>Lista przedmiotów przekazanych przez Ciebie innym osobom: </p>\n    <ul>\n        <li *ngFor=\"let obj of historyObjects\">\n            <a [routerLink]=\"['/object/details',obj._id]\">{{obj.name}}</a>\n        </li>\n    </ul>\n    <p>Lista przedmiotów możliwych do wypożyczenia: </p>\n    <ul>\n        <li *ngFor=\"let obj of sharedObjects\">\n            <a [routerLink]=\"['/object/details',obj._id]\">{{obj.name}}</a>\n            <p>Posiada: {{obj.currentOwner.username}}</p>\n        </li>\n    </ul>\n    <div class=\"clearfix\"></div>\n    <a *ngIf=\"currentUser.isAdmin\" class=\"btn btn-primary\" [routerLink]=\"['/feedback']\">Feedback</a>\n    <p><a [routerLink]=\"['/login']\" class=\"btn btn-danger\">Wyloguj</a></p>\n    <div class=\"clearfix\"></div>\n    <p *ngIf=\"!currentUser.isAdmin\">Prosimy o informację zwrotną, co ulepszy to rozwiązanie - <a [routerLink]=\"['/feedback/add']\">klik!</a></p>\n\n</div>\n<div class=\"clearfix\"></div>"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n    <h2>QR APP</h2>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\">\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"username\">Email</label>\n            <input type=\"email\" class=\"form-control\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">\n                Email jest wymagany!</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n            <label for=\"password\">Hasło</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Hasło jest wymagane!</div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n            />\n            <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Rejestracja</a>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n    <h2>Dodaj rzecz</h2>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && addObject()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !name.valid }\">\n            <label for=\"name\">Nazwa</label>\n            <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"model.name\" #name=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !name.valid\" class=\"help-block\">Nazwa jest wymagana!</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !description.valid }\">\n            <label for=\"description\">Opis</label>\n            <input type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]=\"model.description\" #description=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !description.valid\" class=\"help-block\">Opis jest wymagany!</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !passError }\">\n            <label for=\"passphraseDisplay\">12 słów</label>\n            <input type=\"text\" class=\"form-control\" name=\"passphraseDisplay\" [(ngModel)]=\"model.passphraseDisplay\" #passphraseDisplay=\"ngModel\" (input)=\"validate($event)\" required />\n            <!--\"(\\w+\\W+){11}\\w+\\W*\"-->\n            <p *ngIf=\"passError\" class=\"help-block\">Fraza musi mieć 12 słów!</p>\n            <button class=\"btn btn-warning\" (click)=\"getRandomWords()\">Losuj</button>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading || passError\" class=\"btn btn-primary\">Dodaj</button>\n            <a [routerLink]=\"['/']\" class=\"btn btn-link\">Anuluj</a>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n    <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n    />\n    <div *ngIf=\"!loading\">\n        <h2>{{object.name}}</h2>\n        <div class=\"descr\">\n            <p>Opis: {{object.description}}</p>\n        </div>\n        <div class=\"descr\">\n            <p>12 słów: {{object.passphraseDisplay}}</p>\n        </div>\n        <div>\n            <qr-code [value]=\"object.qrCode\" [size]=\"150\" #qrCode></qr-code>\n            <ul class=\"owners\">\n                <li *ngFor=\"let owner of object.ownersList\">{{owner.user.firstName}} {{owner.user.lastName}} {{owner.user.username}} - Data: {{owner.time}}</li>\n            </ul>\n        </div>\n        <div class=\"row\">\n            <div *ngIf=\"canEdit\" class=\"col-xs-2\">\n                <a class=\"btn btn-danger\" (click)=\"delete()\">Usuń</a>\n            </div>\n            <div *ngIf=\"canEdit\" class=\"col-xs-2\">\n                <a class=\"btn btn-primary\" (click)=\"printQRCode()\">Drukuj</a>\n            </div>\n            <div *ngIf=\"!object.shared && canEdit\" class=\"col-xs-3\">\n                <a class=\"btn btn-warning\" (click)=\"share()\">Udostępnij</a>\n            </div>\n            <div *ngIf=\"object.shared && canEdit\" class=\"col-xs-3\">\n                <a class=\"btn btn-warning\" (click)=\"unShare()\">Ukryj</a>\n            </div>\n            <div class=\"back col-xs-2\">\n                <a [routerLink]=\"['/']\" class=\"btn btn-link\">Wróć</a>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n        <h2>Rejestracja</h2>\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\">\n            <div class=\"form-group\">\n                <label for=\"login\">Imię</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Imię\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" required>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"login\">Nazwisko</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Nazwisko\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"login\">Email</label>\n                <input type=\"email\" class=\"form-control\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" placeholder=\"Login\" name=\"login\" [(ngModel)]=\"model.username\" #login=\"ngModel\" required>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"email\">Hasło</label>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Hasło\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required>\n            </div>\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Zarejestruj</button>\n            <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Wróć</a>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n            />\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>\n"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading\" class=\"overlay\">\n    <div class=\"spinner\">\n        <div class=\"bounce1\"></div>\n        <div class=\"bounce2\"></div>\n        <div class=\"bounce3\"></div>\n    </div>\n</div>"

/***/ }),

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(392);


/***/ })

},[730]);
//# sourceMappingURL=main.bundle.map