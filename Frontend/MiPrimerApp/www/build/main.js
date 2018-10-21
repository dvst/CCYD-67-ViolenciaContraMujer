webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoriasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HistoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoriasPage = /** @class */ (function () {
    function HistoriasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HistoriasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoriasPage');
    };
    HistoriasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-historias',template:/*ion-inline-start:"/Users/javierperez/Documents/programacion/git/CCYD-67-ViolenciaContraMujer/Frontend/MiPrimerApp/src/pages/historias/historias.html"*/'<!--\n  Generated template for the HistoriasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>      \n    </ion-buttons>\n\n    <ion-title>Historias</ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="irPagina(\'trofeo\')">\n        <ion-icon name="trophy" color="golden"></ion-icon>\n      </button>\n    </ion-buttons>\n  \n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content class="card-background-page">\n  <ion-card>\n    <img src="assets/imgs/historias-card-escuela.png"/>\n    <div class="card-title">Escuela</div>\n    <ion-row no-padding>\n      <div class="card-subtitle">\n        <ion-col>\n          <ion-icon name="star" color="golden"></ion-icon>\n          <ion-icon name="star-outline" color="golden"></ion-icon>\n          <ion-icon name="star-outline" color="golden"></ion-icon>\n          <ion-icon name="star-outline" color="golden"></ion-icon>\n          <ion-icon name="star-outline" color="golden"></ion-icon>\n        </ion-col>\n      </div>\n      </ion-row>\n  </ion-card>\n  \n  <ion-card>\n    <img src="assets/imgs/historias-card-fiesta.png"/>\n    <div class="card-title">Fiesta</div>\n    <div class="card-subtitle">\n        <ion-icon name="star" color="golden"></ion-icon>\n        <ion-icon name="star-outline" color="golden"></ion-icon>\n        <ion-icon name="star-outline" color="golden"></ion-icon>\n        <ion-icon name="star-outline" color="golden"></ion-icon>\n        <ion-icon name="star-outline" color="golden"></ion-icon>\n      </div>  \n    </ion-card>\n  \n  <ion-card>\n    <img src="assets/imgs/historias-card-mall.png"/>\n    <div class="card-title">Mall</div>\n    <div class="card-subtitle">\n        <ion-icon name="star" color="golden"></ion-icon>\n        <ion-icon name="star" color="golden"></ion-icon>\n        <ion-icon name="star" color="golden"></ion-icon>\n        <ion-icon name="star-half" color="golden"></ion-icon>\n        <ion-icon name="star-outline" color="golden"></ion-icon>\n      </div>  \n    </ion-card>\n  \n  <ion-card>\n    <img src="assets/imgs/historias-card-parque.png"/>\n    <div class="card-title">Parque</div>\n    <div class="card-subtitle">\n      <ion-icon name="star" color="golden"></ion-icon>\n      <ion-icon name="star" color="golden"></ion-icon>\n      <ion-icon name="star-outline" color="golden"></ion-icon>\n      <ion-icon name="star-outline" color="golden"></ion-icon>\n      <ion-icon name="star-outline" color="golden"></ion-icon>\n    </div>  \n  </ion-card>\n\n  <ion-card>\n    <img src="assets/imgs/historias-card-transporte.png"/>\n    <div class="card-title">Transporte</div>\n    <div class="card-subtitle">\n      <ion-icon name="star" color="golden"></ion-icon>\n      <ion-icon name="star" color="golden"></ion-icon>\n      <ion-icon name="star" color="golden"></ion-icon>\n      <ion-icon name="star" color="golden"></ion-icon>\n      <ion-icon name="star-outline" color="golden"></ion-icon>\n    </div>      \n  </ion-card>\n  \n  <ion-card>\n    <img src="assets/imgs/historias-card-casa.png"/>\n    <div class="card-title">Casa</div>\n    <div class="card-subtitle">\n      <ion-icon name="star" color="golden"></ion-icon>\n      <ion-icon name="star" color="golden"></ion-icon>\n      <ion-icon name="star" color="golden"></ion-icon>\n      <ion-icon name="star" color="golden"></ion-icon>\n      <ion-icon name="star-outline" color="golden"></ion-icon>\n    </div>      \n  </ion-card>\n  \n\n</ion-content>\n'/*ion-inline-end:"/Users/javierperez/Documents/programacion/git/CCYD-67-ViolenciaContraMujer/Frontend/MiPrimerApp/src/pages/historias/historias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HistoriasPage);
    return HistoriasPage;
}());

//# sourceMappingURL=historias.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BienvenidaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil_perfil__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the BienvenidaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BienvenidaPage = /** @class */ (function () {
    function BienvenidaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BienvenidaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BienvenidaPage');
    };
    BienvenidaPage.prototype.irPagina = function (type) {
        var componente;
        switch (type) {
            case "p":
                componente = __WEBPACK_IMPORTED_MODULE_2__perfil_perfil__["a" /* PerfilPage */];
                break;
        }
        this.navCtrl.setRoot(componente);
    };
    BienvenidaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bienvenida',template:/*ion-inline-start:"/Users/javierperez/Documents/programacion/git/CCYD-67-ViolenciaContraMujer/Frontend/MiPrimerApp/src/pages/bienvenida/bienvenida.html"*/'<!--\n  Generated template for the BienvenidaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-slides pager>\n\n    <ion-slide style="background-color: #FFDF00">\n      <h2>¡Hola! preparate para la Victoria</h2>\n    </ion-slide>\n  \n    <ion-slide style="background-color: #FFDF00">\n      <h2>Con esta app aprenderas jugando con cuentos en los que tus decisiones cambiaran la historia</h2>\n    </ion-slide>\n  \n    <ion-slide style="background-color: #FFDF00">\n      <button ion-button color="light" (click)="irPagina(\'p\')" >Empecemos</button>\n    </ion-slide>\n  \n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/javierperez/Documents/programacion/git/CCYD-67-ViolenciaContraMujer/Frontend/MiPrimerApp/src/pages/bienvenida/bienvenida.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], BienvenidaPage);
    return BienvenidaPage;
}());

//# sourceMappingURL=bienvenida.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcercaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AcercaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AcercaPage = /** @class */ (function () {
    function AcercaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AcercaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AcercaPage');
    };
    AcercaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-acerca',template:/*ion-inline-start:"/Users/javierperez/Documents/programacion/git/CCYD-67-ViolenciaContraMujer/Frontend/MiPrimerApp/src/pages/acerca/acerca.html"*/'<!--\n  Generated template for the AcercaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Acerca de esta App</ion-title>\n  </ion-navbar>\n    \n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/javierperez/Documents/programacion/git/CCYD-67-ViolenciaContraMujer/Frontend/MiPrimerApp/src/pages/acerca/acerca.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AcercaPage);
    return AcercaPage;
}());

//# sourceMappingURL=acerca.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrofeoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TrofeoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrofeoPage = /** @class */ (function () {
    function TrofeoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TrofeoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrofeoPage');
    };
    TrofeoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trofeo',template:/*ion-inline-start:"/Users/javierperez/Documents/programacion/git/CCYD-67-ViolenciaContraMujer/Frontend/MiPrimerApp/src/pages/trofeo/trofeo.html"*/'<!--\n  Generated template for the TrofeoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>      \n    </ion-buttons>    \n\n    <ion-title>Trofeo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <img src="assets/imgs/trofeo.png"/>\n\n</ion-content>\n'/*ion-inline-end:"/Users/javierperez/Documents/programacion/git/CCYD-67-ViolenciaContraMujer/Frontend/MiPrimerApp/src/pages/trofeo/trofeo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TrofeoPage);
    return TrofeoPage;
}());

//# sourceMappingURL=trofeo.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_bienvenida_bienvenida__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_perfil_perfil__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_perfil_crear_perfil_crear__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_historias_historias__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_acerca_acerca__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_trofeo_trofeo__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_bienvenida_bienvenida__["a" /* BienvenidaPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_perfil_crear_perfil_crear__["a" /* PerfilCrearPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_historias_historias__["a" /* HistoriasPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_acerca_acerca__["a" /* AcercaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_trofeo_trofeo__["a" /* TrofeoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_bienvenida_bienvenida__["a" /* BienvenidaPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_perfil_crear_perfil_crear__["a" /* PerfilCrearPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_historias_historias__["a" /* HistoriasPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_acerca_acerca__["a" /* AcercaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_trofeo_trofeo__["a" /* TrofeoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_bienvenida_bienvenida__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_perfil_perfil__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_historias_historias__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_acerca_acerca__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_trofeo_trofeo__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_historias_historias__["a" /* HistoriasPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Bienvenida', component: __WEBPACK_IMPORTED_MODULE_4__pages_bienvenida_bienvenida__["a" /* BienvenidaPage */] },
            { title: 'Seleccionar perfil', component: __WEBPACK_IMPORTED_MODULE_5__pages_perfil_perfil__["a" /* PerfilPage */] },
            { title: 'Historias', component: __WEBPACK_IMPORTED_MODULE_6__pages_historias_historias__["a" /* HistoriasPage */] },
            { title: 'Ruta a la Victoria', component: __WEBPACK_IMPORTED_MODULE_8__pages_trofeo_trofeo__["a" /* TrofeoPage */] },
            { title: 'Acerca de la app', component: __WEBPACK_IMPORTED_MODULE_7__pages_acerca_acerca__["a" /* AcercaPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/javierperez/Documents/programacion/git/CCYD-67-ViolenciaContraMujer/Frontend/MiPrimerApp/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/javierperez/Documents/programacion/git/CCYD-67-ViolenciaContraMujer/Frontend/MiPrimerApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilCrearPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PerfilCrearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilCrearPage = /** @class */ (function () {
    function PerfilCrearPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PerfilCrearPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilCrearPage');
    };
    PerfilCrearPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil-crear',template:/*ion-inline-start:"/Users/javierperez/Documents/programacion/git/CCYD-67-ViolenciaContraMujer/Frontend/MiPrimerApp/src/pages/perfil-crear/perfil-crear.html"*/'<!--\n  Generated template for the PerfilCrearPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-toolbar>\n        <ion-title>\n          Crear perfil\n        </ion-title>\n        <ion-buttons start>\n          <button ion-button >\n            <span ion-text color="primary" showWhen="ios">Cancel</span>\n            <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-toolbar>\n    \n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-icon name="person-add" item-start></ion-icon>\n      <ion-label floating>Nombre</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n  </ion-list>  \n\n  <ion-list radio-group>\n    <ion-list-header>\n      Genero\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name="man" color="primary" item-start></ion-icon>\n      <ion-label>Masculino</ion-label>\n      <ion-radio value="m"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="woman" color="danger" item-start></ion-icon>\n      <ion-label>Femenino</ion-label>\n      <ion-radio value="f"></ion-radio>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n      <ion-list-header>\n        Edad\n      </ion-list-header>\n      <ion-item>\n        <ion-range min="6" step="1" pin=true max="16" snaps="true" [(ngModel)]="text">\n          <ion-label range-left >6</ion-label>\n          <ion-label range-right>16 ó mas</ion-label>\n        </ion-range>\n      </ion-item>\n    </ion-list>\n  \n  \n  <button ion-button icon-end block>Crear<ion-icon name="arrow-forward"></ion-icon></button> \n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/javierperez/Documents/programacion/git/CCYD-67-ViolenciaContraMujer/Frontend/MiPrimerApp/src/pages/perfil-crear/perfil-crear.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PerfilCrearPage);
    return PerfilCrearPage;
}());

//# sourceMappingURL=perfil-crear.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__historias_historias__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
    };
    PerfilPage.prototype.irPagina = function (type, nombre) {
        var componente;
        switch (type) {
            case "historias":
                componente = __WEBPACK_IMPORTED_MODULE_2__historias_historias__["a" /* HistoriasPage */];
                break;
        }
        var toast = this.toastCtrl.create({
            message: 'Bienvenido de vuelta ' + nombre,
            duration: 3000,
            position: 'top'
        });
        toast.present();
        this.navCtrl.setRoot(componente);
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"/Users/javierperez/Documents/programacion/git/CCYD-67-ViolenciaContraMujer/Frontend/MiPrimerApp/src/pages/perfil/perfil.html"*/'<!--\n  Generated template for the PerfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Perfiles de usuario</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding> \n\n  <button ion-button icon-start block (click)="irPagina(\'historias\',\'Javier\')"><ion-icon name="man"></ion-icon>Javier</button> \n  <button ion-button icon-start block (click)="irPagina(\'historias\',\'Pilar\')" color="danger"><ion-icon name="woman"></ion-icon>Pilar</button> \n\n  <ion-fab right bottom>\n    <button ion-fab color="secondary"><ion-icon name="add"></ion-icon> </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/javierperez/Documents/programacion/git/CCYD-67-ViolenciaContraMujer/Frontend/MiPrimerApp/src/pages/perfil/perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map