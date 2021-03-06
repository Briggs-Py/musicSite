webpackJsonp([1,5],{

/***/ 141:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 141;


/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(155);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(219),
        styles: [__webpack_require__(209)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__music_app_music_app_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__music_app_music_app_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__music_app_home_home_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__music_app_about_about_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__music_app_music_music_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__music_app_video_video_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__music_app_gigs_gigs_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__music_app_contact_contact_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__music_app_footer_footer_component__ = __webpack_require__(153);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__music_app_music_app_component__["a" /* MusicAppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__music_app_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__music_app_about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_10__music_app_music_music_component__["a" /* MusicComponent */],
            __WEBPACK_IMPORTED_MODULE_11__music_app_video_video_component__["a" /* VideoComponent */],
            __WEBPACK_IMPORTED_MODULE_12__music_app_gigs_gigs_component__["a" /* GigsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__music_app_contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_14__music_app_footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__music_app_music_app_service__["a" /* MusicAppService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__music_app_home_home_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music_app_about_about_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__music_app_music_music_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__music_app_video_video_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__music_app_gigs_gigs_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__music_app_contact_contact_component__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });







var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__music_app_home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__music_app_about_about_component__["a" /* AboutComponent */] },
    { path: 'music', component: __WEBPACK_IMPORTED_MODULE_3__music_app_music_music_component__["a" /* MusicComponent */] },
    { path: 'video', component: __WEBPACK_IMPORTED_MODULE_4__music_app_video_video_component__["a" /* VideoComponent */] },
    { path: 'gigs', component: __WEBPACK_IMPORTED_MODULE_5__music_app_gigs_gigs_component__["a" /* GigsComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_6__music_app_contact_contact_component__["a" /* ContactComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(222),
        styles: [__webpack_require__(212)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__music_app_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicAppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MusicAppComponent = (function () {
    function MusicAppComponent(_musicAppService) {
        this._musicAppService = _musicAppService;
    }
    MusicAppComponent.prototype.ngOnInit = function () {
        this.allEvents();
    };
    MusicAppComponent.prototype.ngAfterViewInit = function () {
        $('.cross').hide();
        $(".menu").hide();
        $(".hamburger").click(function () {
            $("body").css("background-color", "rgba(0, 0, 0, 0.9)");
            $(".menu").slideToggle("slow", function () {
                $(".hamburger").hide();
                $(".cross").show();
            });
        });
        $(".cross").click(function () {
            $("body").css("background-color", "rgba(0, 0, 0, 0.0)");
            $(".menu").slideToggle("slow", function () {
                $(".cross").hide();
                $(".hamburger").show();
            });
        });
    };
    MusicAppComponent.prototype.toggleTitle = function () {
    };
    MusicAppComponent.prototype.allEvents = function () {
        var _this = this;
        this._musicAppService.allEvents()
            .then(function (response) { return _this.events = response; })
            .then(function (response) { return _this.events = response.sort(function (a, b) {
            a = new Date(a.date);
            b = new Date(b.date);
            return b > a ? -1 : b < a ? 1 : 0;
        }); })
            .catch(function (err) { return console.log(err); });
    };
    return MusicAppComponent;
}());
MusicAppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-music-app',
        template: __webpack_require__(225),
        styles: [__webpack_require__(215)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__music_app_service__["a" /* MusicAppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__music_app_service__["a" /* MusicAppService */]) === "function" && _a || Object])
], MusicAppComponent);

var _a;
//# sourceMappingURL=music-app.component.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".wrapper{\n  background-color: rgba(0, 0, 0, 0.5);\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[9];\n      grid-template-columns: repeat(9, 1fr);\n  grid-template-areas:\n    \"... pic pic pic pic pic pic pic ...\"\n    \"... about about about about about about about ...\";\n  margin: -15px, 0px, -10px, 0px;\n  min-height: 1200px;\n}\n.about{\n  grid-area: about;\n  text-align: center;\n}\n.about > p{\n  background: rgba(0, 0, 0, 0.5);\n  padding: 8%;\n}\n.pic{\n  grid-area: pic;\n  margin-top: 20px;\n}\n\n.backdrop{\n  padding: 2%;\n  padding-bottom: 0.5% !important;\n  background: rgba(0, 0, 0, 0.5);\n}\n.imageResize{\n  width: 100%;\n}\n\n@media(min-width: 600px ){\n  .wrapper{\n    -ms-grid-columns: (1fr)[9];\n        grid-template-columns: repeat(9, 1fr);\n    grid-gap: 20px;\n    grid-template-areas:\n      \"... about about about about pic pic pic ...\";\n  }\n  .imageResize{\n    width: auto\\6;\n    max-width: 100%;\n  \theight: auto;\n  }\n  .pic{\n    margin-top: 92px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".wrapper{\n  background-color: rgba(0, 0, 0, 0.5);\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[9];\n      grid-template-columns: repeat(9, 1fr);\n  grid-template-areas:\n    \"... contact contact contact contact contact contact contact ...\";\n  margin: -15px, 0px, -10px, 0px;\n  min-height: 1200px;\n}\n.contact{\n  grid-area: contact;\n  -ms-grid-columns: (1fr)[9];\n      grid-template-columns: repeat(9, 1fr);\n  grid-template-areas:\n    \"... form form form form form form form ...\"\n    \"... info info info info info info info ...\";\n}\n.form{\n  grid-area: form;\n}\n\n.form-control {\n  display: block;\n  width: 20%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n\ninput{\n  width: 100%;\n  padding: 10px 0px 10px 5px;\n  margin: 1%;\n}\n#message{\n  padding-bottom: 150px;\n}\n#send{\n\n}\n.info{\n  margin-top: 50px;\n  grid-area: info;\n  -ms-grid-columns: (1fr)[2];\n      grid-template-columns: repeat(2, 1fr);\n  grid-template-areas:\n    \"data1 data2\";\n  text-align: center;\n}\n.data1{\n  grid-area: data1;\n}\n.data2{\n  grid-area: data2;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".wrapper{\n  background-color: rgba(0, 0, 0, 0.5);\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[9];\n      grid-template-columns: repeat(9, 1fr);\n  grid-template-areas:\n    \"footer footer footer footer footer footer footer footer footer\";\n  margin: -15px, 0px, -10px, 0px;\n}\n.footer{\n  grid-area: footer;\n  text-align: center;\n  padding: 2%;\n  font-size: 75%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".wrapper{\n  background-color: rgba(0, 0, 0, 0.5);\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[9];\n      grid-template-columns: repeat(9, 1fr);\n  grid-template-areas:\n    \"... events events events events events events events ...\";\n  margin: -15px, 0px, -10px, 0px;\n}\n.events{\n  grid-area: events;\n  text-align: center;\n}\n\n.eventItem{\n  background: rgba(0, 0, 0, 0.6);\n  padding: 1%;\n  margin: 1%;\n  position: relative;\n\n}\n@media(min-width: 700px ){\n  .events{\n    font-size: 2vw;\n  }\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "\na{\n  color: white;\n  text-decoration: none;\n}\n.wrapper{\n  background-color: rgba(0, 0, 0, 0.5);\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[9];\n      grid-template-columns: repeat(9, 1fr);\n  grid-template-areas:\n    \"... main main main main main main main ...\";\n  margin: -15px, 0px, -10px, 0px;\n}\n\n.mainContent{\n  grid-area: main;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[3];\n      grid-template-columns: repeat(3, 1fr);\n  grid-gap: 15px;\n  grid-template-areas:\n    \"events events events\"\n    \"media media media\";\n  text-align: center;\n}\n\n.events{grid-area: events}\n\n.eventItem{\n  background: rgba(0, 0, 0, 0.6);\n  padding: 1%;\n  margin: 1%;\n  position: relative;\n}\n\n.media{grid-area: media}\n\n.videos{\n  width: 100%;\n}\n.Video{\n  padding-right: 1%;\n  padding-bottom: 4%;\n  height: 200px;\n}\n\n.Audio > img{\n  width: 100%;\n}\n\naudio{\n  width: 100%;\n  margin-top: -10px;\n  margin-bottom: 20px;\n}\n\n.footer{\n  grid-area: footer;\n  text-align: center;\n  padding: 2%;\n  font-size: 75%;\n}\n\n/*Image and Video Resizing*/\n.imageResize{\n  width: 200%;\n}\niframe{\n  width: 100%;\n  height: 100%;\n}\n\n@media(min-width: 700px ){\n  .mainContent{\n    -ms-grid-columns: (1fr)[8];\n        grid-template-columns: repeat(8, 1fr);\n    grid-template-areas:\n      \"events events events events media media media media\"\n  }\n  .imageResize{\n    width: auto\\9;\n    max-width: 100%;\n  \theight: auto;\n  }\n  .Video{\n    height: 200px;\n  }\n  iframe{\n    width: 100%;\n    height: 100%;\n  }\n\n}\n\n@media(min-width: 1200px){\n  .Video{\n    height: 300px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "\nbody {\n  background: url(" + __webpack_require__(496) + ") no-repeat center center fixed;\n  background-size: cover;\n  background-color: black;\n  color: white;\n  margin: -10px;\n}\n\na{\n  color: white;\n  text-decoration: none;\n}\n.wrapper{\n  background-color: rgba(0, 0, 0, 0.5);\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[9];\n      grid-template-columns: repeat(9, 1fr);\n  grid-template-areas:\n    \"header header header header header header header header header\"\n    \"... title title title title ... ... ... ...\"\n\n}\n.aheader{\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[4];\n      grid-template-columns: repeat(4, 1fr);\n  grid-area: header;\n  grid-template-areas:\n    \"... ... ... hamburger \";\n  background-color: rgba(0, 0, 0, 0.7);\n  height: 30px;\n  padding: 3%;\n  text-align: center;\n}\n\n.home{\n  display: none;\n  grid-area: home;\n}\n.about{\n  display: none;\n  grid-area: about;\n}\n.music{\n  display: none;\n  grid-area: music;\n}\n.video{\n  display: none;\n  grid-area: video;\n}\n.gigs{\n  display: none;\n  grid-area: gigs;\n}\n.contact{\n  display: none;\n  grid-area: contact;\n}\n.social{\n  display: none;\n  grid-area: social;\n}\n.title{grid-area: title;}\n\n.hamburger{\n  display: inline-block;\n  background:none;\n  position:absolute;\n  top:0;\n  right:0;\n  line-height:45px;\n  padding:5px 25px 0px 15px;\n  color:#999;\n  border:0;\n  font-size:2em;\n  font-weight:bold;\n  cursor:pointer;\n  outline:none;\n  z-index:10000000000000;\n}\n.cross{\n  background:none;\n  position:absolute;\n  top:0px;\n  right:0;\n  padding:15px 25px 0px 15px;\n  color:#999;\n  border:0;\n  font-size:4em;\n  line-height:65px;\n  font-weight:bold;\n  cursor:pointer;\n  outline:none;\n  z-index:10000000000000;\n}\n\n.menu{z-index:1000000; margin-right: -5px; font-weight:bold; width:100%; background:rgba(0,0,0,0.9);  position:absolute; text-align:center; font-size:14px;}\n.menu ul {margin: 0; padding: 0; list-style-type: none; list-style-image: none;}\n.menu li {display: block;   padding:20px 0 20px 0; border-bottom:#393939 1px solid;}\n.menu li:hover{display: block; background:#000; padding:15px 0 15px 0; border-bottom:#dddddd 1px solid;}\n.menu ul li a { text-decoration:none;  margin: 0px; color:#fff;}\n.menu ul li a:hover {  color: #fff; text-decoration:none;}\n.menu a{text-decoration:none; color:#fff;}\n.menu a:hover{text-decoration:none; color:#fff;}\n\n/*Image and Video Resizing*/\n.imageResize{\n  width: 200%;\n}\n.videoSize{\n  width: 100%;\n  height: 150%;\n  width: auto\\9;\n}\n\n@media(min-width: 600px ){\n  .mainContent{\n    -ms-grid-columns: (1fr)[8];\n        grid-template-columns: repeat(8, 1fr);\n    grid-template-areas:\n      \"events events events events events media media media\"\n  }\n  .imageResize{\n    width: auto\\9;\n    max-width: 100%;\n  \theight: auto;\n  }\n  .hamburger{\n    display: none;\n  }\n  .cross{\n    display: none;\n  }\n  .home{\n    display: inline;\n    grid-area: home;\n  }\n  .about{\n    display: inline;\n    grid-area: about;\n  }\n  .music{\n    display: inline;\n    grid-area: music;\n  }\n  .video{\n    display: inline;\n    grid-area: video;\n  }\n  .gigs{\n    display: inline;\n    grid-area: gigs;\n  }\n  .contact{\n    display: inline;\n    grid-area: contact;\n  }\n  .social{\n    display: inline;\n    padding-right: 2%;\n    grid-area: social;\n  }\n  .social > a, img{\n    width: 20px;\n    margin-right: 2%;\n  }\n  .aheader{\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: (1fr)[9];\n        grid-template-columns: repeat(9, 1fr);\n    grid-area: header;\n    grid-template-areas:\n      \"... home about music video gigs contact social social\";\n    background-color: rgba(0, 0, 0, 0.7);\n    padding: 3%;\n    text-align: center;\n    font-size: 15px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".wrapper{\n  background-color: rgba(0, 0, 0, 0.5);\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[9];\n      grid-template-columns: repeat(9, 1fr);\n  grid-template-areas:\n    \"... audio audio audio audio audio audio audio ...\";\n  margin: -15px, 0px, -10px, 0px;\n  min-height: 900px;\n}\n.media{grid-area: audio}\n\n\n\n.Audio > img{\n  width: 100%;\n}\n\naudio{\n  width: 100%;\n  margin-top: -10px;\n  margin-bottom: 20px;\n}\n\n@media(min-width: 700px ){\n  .wrapper{\n    -ms-grid-columns: (1fr)[9];\n        grid-template-columns: repeat(9, 1fr);\n    grid-template-areas:\n      \"... ... audio audio audio audio audio ... ...\";\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".wrapper{\n  background-color: rgba(0, 0, 0, 0.5);\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[9];\n      grid-template-columns: repeat(9, 1fr);\n  grid-template-areas:\n    \"... video video video video video video video ...\";\n  margin: -15px, 0px, -10px, 0px;\n}\n.media{\n  grid-area: video;\n  text-align: center;\n}\n\n.videos{\n  width: 100%;\n}\n.Video{\n  padding: 3%;\n  height: 40vw;\n}\niframe{\n  width: 100%;\n  height: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "<app-music-app></app-music-app>\n"

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"pic\">\n    <div class=\"backdrop\">\n      <img class=\"imageResize\" src=\"../../assets/bioPicResized.jpg\" alt=\"\">\n    </div>\n  </div>\n  <div class=\"about\">\n    <h1>About</h1>\n    <p>\"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis\n      praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias\n      excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui\n      officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem\n      rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est\n      eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere\n      possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus\n      autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet\n      ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum\n      rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores\n      alias consequatur aut perferendis doloribus asperiores repellat.\"<br><br>\n      \"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis\n      praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias\n      excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui\n      officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem\n      rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est\n      eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere\n      possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus\n      autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet\n      ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum\n      rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores\n      alias consequatur aut perferendis doloribus asperiores repellat.\"\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"contact\">\n    <div class=\"form\">\n      <h1>CONTACT:</h1>\n      <form action=\"index.html\" method=\"post\">\n        <input type=\"text\" name=\"\" placeholder=\"Name\" value=\"\">\n        <input type=\"text\" name=\"\" placeholder=\"Email\" value=\"\">\n        <input type=\"text\" name=\"\" placeholder=\"Subject\" value=\"\">\n        <input id=\"message\" type=\"text\" name=\"\" placeholder=\"Message\" value=\"\">\n        <input class=\"form-control\" type=\"submit\" name=\"\" value=\"SEND\">\n      </form>\n    </div>\n    <div class=\"info\">\n      <div class=\"data1\">\n        <h1>MANAGEMENT</h1>\n        <p>Karen Blanche <br> info@mysite.com, 123-456-7890</p>\n      </div>\n      <div class=\"data1\">\n        <h1>PRESS</h1>\n        <p>That Girl Pr, Sarah Brookstone <br> info@mysite.com, 123-456-7890</p>\n      </div>\n      <div class=\"data2\">\n        <h1>BOOKING</h1>\n        <p>The Bookerz, Daniel Ku <br> info@mysite.com, 123-456-7890</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"footer\">\n    © 2025 by Briggs-Designs. MEAN Template for Fully Functional Website.\n  </div>\n</div>\n"

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"events\">\n    <h3>Events</h3>\n    <div class=\"eventItem\" *ngFor=\"let event of events\">\n       <h4>{{event.events}}</h4>\n       <h5>{{event.location}} {{event.city}}, {{event.state}}</h5>\n       <h5>{{event.date | date: 'fullDate' }}</h5>\n       <h5>{{event.date | date: 'jm' }}</h5>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"mainContent\">\n    <div class=\"events\">\n      <h1>Events</h1>\n      <div class=\"eventItem\" *ngFor=\"let event of events\">\n         <h4>{{event.events}}</h4>\n         <h5>{{event.location}} {{event.city}}, {{event.state}}</h5>\n         <h5>{{event.date | date: 'fullDate' }}</h5>\n         <h5>{{event.date | date: 'jm' }}</h5>\n      </div>\n    </div>\n    <div class=\"media\">\n      <h1>Media</h1>\n      <div class=\"videos\">\n        <div class=\"Video\">\n          <iframe class=\"videoSize\" src=\"https://www.youtube.com/embed/2V3CHAyuDiY\"></iframe>\n        </div>\n        <div class=\"Video\">\n          <iframe class=\"videoSize\" src=\"https://www.youtube.com/embed/r6kyhivVZyY\"></iframe>\n        </div>\n        <div class=\"Video\">\n          <iframe class=\"videoSize\" src=\"https://www.youtube.com/embed/jKDZWh2lBAM\"></iframe>\n        </div>\n        <div class=\"Video\">\n          <iframe class=\"videoSize\" src=\"https://www.youtube.com/embed/zGEWqBm_-iw\"></iframe>\n        </div>\n        <div class=\"Audio\">\n          <img style=\"width: 100%\" src=\"../../assets/theCode.jpg\" alt=\"\">\n          <audio style=\"width: 100%\" controls>\n            <source src=\"../../assets/W&W Feat. Ummet Ozcan - The Code (Original Mix).mp3\" type=\"audio/mpeg\">\n            Your browser does not support the audio element.\n          </audio>\n        </div>\n        <div class=\"Audio\">\n          <img style=\"width: 100%\" src=\"../../assets/takeOver.jpg\" alt=\"\">\n          <audio style=\"width: 100%\" controls>\n            <source src=\"../../assets/Afrojack ft. Eva Simons - Take Over Control (Official Radio Mix).mp3\" type=\"audio/mpeg\">\n            Your browser does not support the audio element.\n          </audio>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"wrapper\">\n    <div class=\"aheader\">\n      <div class=\"home\"><a routerLink=\"\">HOME</a></div>\n      <div class=\"about\"><a routerLink=\"about\">ABOUT</a></div>\n      <div class=\"music\"><a routerLink=\"music\">MUSIC</a></div>\n      <div class=\"video\"><a routerLink=\"video\">VIDEO</a></div>\n      <div class=\"gigs\"><a routerLink=\"gigs\">GIGS</a></div>\n      <div class=\"contact\"><a routerLink=\"contact\">CONTACT</a></div>\n      <div class=\"social\">\n        <a href=\"#\"><img src=\"../../assets/facebookLogo.png\" alt=\"\"></a>\n        <a href=\"#\"><img src=\"../../assets/twitterLogo.png\" alt=\"\"></a>\n        <a href=\"#\"><img src=\"../../assets/youTubeLogo.png\" alt=\"\"></a>\n        <a href=\"#\"><img src=\"../../assets/instagramLogo.png\" alt=\"\"></a>\n      </div>\n      <button class=\"hamburger\">&#9776;</button>\n      <button class=\"cross\">&#735;</button>\n      <div class=\"menu\">\n        <ul>\n          <a routerLink=\"\"><li>HOME</li></a>\n          <a routerLink=\"about\"><li>ABOUT</li></a>\n          <a routerLink=\"music\"><li>MUSIC</li></a>\n          <a routerLink=\"video\"><li>VIDEO</li></a>\n          <a routerLink=\"gigs\"><li>GIGS</li></a>\n          <a routerLink=\"contact\"><li>CONTACTS</li></a>\n        </ul>\n      </div>\n    </div>\n    <div class=\"title\">\n      <img class=\"imageResize\" src=\"../../assets/Logo.png\" alt=\"\">\n    </div>\n  </div>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</body>\n"

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"media\">\n    <div class=\"Audio\">\n      <img style=\"width: 100%\" src=\"../../assets/theCode.jpg\" alt=\"\">\n      <audio style=\"width: 100%\" controls>\n        <source src=\"../../assets/W&W Feat. Ummet Ozcan - The Code (Original Mix).mp3\" type=\"audio/mpeg\">\n        Your browser does not support the audio element.\n      </audio>\n    </div>\n    <div class=\"Audio\">\n      <img style=\"width: 100%\" src=\"../../assets/takeOver.jpg\" alt=\"\">\n      <audio style=\"width: 100%\" controls>\n        <source src=\"../../assets/Afrojack ft. Eva Simons - Take Over Control (Official Radio Mix).mp3\" type=\"audio/mpeg\">\n        Your browser does not support the audio element.\n      </audio>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"media\">\n    <h3>Videos</h3>\n    <div class=\"videos\">\n      <div class=\"Video\">\n        <iframe class=\"videoSize\" src=\"https://www.youtube.com/embed/2V3CHAyuDiY\"></iframe>\n      </div>\n      <div class=\"Video\">\n        <iframe class=\"videoSize\" src=\"https://www.youtube.com/embed/r6kyhivVZyY\"></iframe>\n      </div>\n      <div class=\"Video\">\n        <iframe class=\"videoSize\" src=\"https://www.youtube.com/embed/jKDZWh2lBAM\"></iframe>\n      </div>\n      <div class=\"Video\">\n        <iframe class=\"videoSize\" src=\"https://www.youtube.com/embed/zGEWqBm_-iw\"></iframe>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicAppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MusicAppService = (function () {
    function MusicAppService(_http) {
        this._http = _http;
    }
    MusicAppService.prototype.allEvents = function () {
        return this._http.get('/api/allEvents')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    return MusicAppService;
}());
MusicAppService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MusicAppService);

var _a;
//# sourceMappingURL=music-app.service.js.map

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "musicEvent.3132c952fa45df8fe5f3.jpg";

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(142);


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__(220),
        styles: [__webpack_require__(210)]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__(221),
        styles: [__webpack_require__(211)]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__music_app_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GigsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GigsComponent = (function () {
    function GigsComponent(_musicAppService) {
        this._musicAppService = _musicAppService;
    }
    GigsComponent.prototype.ngOnInit = function () {
        this.allEvents();
    };
    GigsComponent.prototype.allEvents = function () {
        var _this = this;
        this._musicAppService.allEvents()
            .then(function (response) { return _this.events = response; })
            .then(function (response) { return _this.events = response.sort(function (a, b) {
            a = new Date(a.date);
            b = new Date(b.date);
            return b > a ? -1 : b < a ? 1 : 0;
        }); })
            .catch(function (err) { return console.log(err); });
    };
    return GigsComponent;
}());
GigsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-gigs',
        template: __webpack_require__(223),
        styles: [__webpack_require__(213)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__music_app_service__["a" /* MusicAppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__music_app_service__["a" /* MusicAppService */]) === "function" && _a || Object])
], GigsComponent);

var _a;
//# sourceMappingURL=gigs.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__music_app_service__ = __webpack_require__(43);
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


var HomeComponent = (function () {
    function HomeComponent(_musicAppService) {
        this._musicAppService = _musicAppService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.allEvents();
    };
    HomeComponent.prototype.allEvents = function () {
        var _this = this;
        this._musicAppService.allEvents()
            .then(function (response) { return _this.events = response; })
            .then(function (response) { return _this.events = response.sort(function (a, b) {
            a = new Date(a.date);
            b = new Date(b.date);
            return b > a ? -1 : b < a ? 1 : 0;
        }); })
            .catch(function (err) { return console.log(err); });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(224),
        styles: [__webpack_require__(214)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__music_app_service__["a" /* MusicAppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__music_app_service__["a" /* MusicAppService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MusicComponent = (function () {
    function MusicComponent() {
    }
    MusicComponent.prototype.ngOnInit = function () {
    };
    return MusicComponent;
}());
MusicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-music',
        template: __webpack_require__(226),
        styles: [__webpack_require__(216)]
    }),
    __metadata("design:paramtypes", [])
], MusicComponent);

//# sourceMappingURL=music.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoComponent = (function () {
    function VideoComponent() {
    }
    VideoComponent.prototype.ngOnInit = function () {
    };
    return VideoComponent;
}());
VideoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-video',
        template: __webpack_require__(227),
        styles: [__webpack_require__(217)]
    }),
    __metadata("design:paramtypes", [])
], VideoComponent);

//# sourceMappingURL=video.component.js.map

/***/ })

},[498]);
//# sourceMappingURL=main.bundle.js.map