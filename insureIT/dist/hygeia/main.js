(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

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

module.exports = "body {  padding: 5px; font-family: helvetica; font:15px;   }\n.p1 { text-align: center; }\ninput.ng-invalid.ng-touched{ border: 1px solid red }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxRQUFRLFlBQVksRUFBRSxzQkFBc0IsRUFBRSxTQUFTLElBQUk7QUFDM0QsTUFBTSxrQkFBa0IsRUFBRTtBQUMxQiw2QkFBNkIsc0JBQXNCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkgeyAgcGFkZGluZzogNXB4OyBmb250LWZhbWlseTogaGVsdmV0aWNhOyBmb250OjE1cHg7ICAgfVxuLnAxIHsgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7IGJvcmRlcjogMXB4IHNvbGlkIHJlZCB9Il19 */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"> -->\n<br/>\n<br/><legend><p class=\"p1\">Policy Registration</p></legend><br/>\n<!-- <div>\n  <button type=\"submit\" class=\"btn btn-primary\"  (click)=\"getDnr()\">Submit</button>\n</div> -->\n<div class=\"container\">\n\n  <form  class=\"form\"  #f=\"ngForm\" >\n    <div class=\"form-group\">\n\n      <label class=\"control-label col-sm-2\" id=\"name\">Customer unique ID</label>\n      <div class=\"col-sm-10\">\n        <input #userid type=\"text\" class=\"form-control\" id=\"userid\" placeholder=\"Unique ID\" name='userid' ngModel required>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" id=\"Date\">Date of departure:</label>\n      <div class=\"col-sm-10\">\n        <input #date type=\"date\" class=\"form-control\" id=\"date\" placeholder=\"Date\" name='date' ngModel required>\n      </div>\n    </div>\n    \n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" >From</label>\n        <div class=\"col-sm-10\">\n          <input #from type=\"text\" ngModel required class=\"form-control\" id=\"from\" placeholder=\"from\" name=\"from\" >\n    <small class=\"form-text text-muted\"></small>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" id=\"cno\">To</label>\n        <div class=\"col-sm-10\">\n          <input #to type=\"text\" class=\"form-control\" id=\"to\" placeholder=\"to\" name=\"to\" (change)= \"get_products(from.value,to.value)\" ngModel required  >\n  <small class=\"form-text text-muted\"></small>      \n  </div>\n      </div>\n      <table class=\"table col-sm-10\" name=\"test_table\" id=\"test_table\" *ngIf=\"visible\">\n        <thead>\n            <tr>\n                <th>From</th>\n                <th>To</th>\n                <th>Flight Number</th>\n                <th>Time</th>\n        </thead>\n    \n        <tr *ngFor=\"let data of Table;let i = index\" (click)=selectflight(Table[i])>\n    \n            <td>\n                <span>{{data.from}}</span>\n            </td>\n            <td>\n                <span>{{data.to}}</span>\n            </td>\n            <td>\n                <span>{{data.number}}</span>\n            </td>\n            <td>\n              <span>{{data.time}}</span>\n            </td>\n        </tr>\n    </table>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" >Amount</label>\n        <div class=\"col-sm-10\">\n          <!-- <input #amt type=\"textarea\" class=\"form-control\" id=\"cid\" placeholder=\"enter Insurance amount\" name=\"cid\" (change)= \"get_reward(amt.value)\" ngModel required> -->\n          <select class=\"form-control\" id=\"policyamt\" #policyamt type=\"text\" name='policyamt'  (change)= \"get_reward(policyamt.value)\" ngModel required>\n              <option>45</option>\n              <option>100</option>\n              <option>200</option>\n              <option>400</option>\n            </select>\n            <br>\n        \n        </div>\n      </div>\n      \n       <table class=\"table col-sm-10\" name=\"rate_table\" id=\"rate_table\" *ngIf=\"visible2\">\n         \n        <thead>\n          <tr><th colspan=\"3\"><p>Payouts for premium Selected: </p></th></tr>\n            <tr>\n                <th>Delayed</th>\n                <th>Deviated</th>\n                <th>Cancelled</th>\n        </thead>\n    \n        <tr *ngFor=\"let data of Table2;let i = index\" >\n    \n            <td>\n                <span>{{data.ac}}</span>\n            </td>\n            <td>\n                <span>{{data.ad}}</span>\n            </td>\n            <td>\n                <span>{{data.ab}}</span>\n            </td>\n        </tr>\n    </table> \n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!f.valid\" (click)=\"addInsurance(from.value,to.value,policyamt.value,date.value,userid.value)\">Submit</button>\n        </div>\n      </div>\n    </form>\n  </div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sawtooth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sawtooth.service */ "./src/app/sawtooth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AboutComponent = /** @class */ (function () {
    function AboutComponent(Form, httpClient) {
        this.Form = Form;
        this.httpClient = httpClient;
        this.cusers = [];
        this.clickMessage = "";
        this.servicedata = "";
        this.baseUrl = "http://localhost:3000";
        this.id = '3Z7311';
        this.frm = 'THIRUVANANTHAPURAM';
        this.to = "KOCHI";
        this.visible = false;
        this.visible2 = false;
        console.log("Inside page component.ts");
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.get_products = function (from, to) {
        var _this = this;
        //this.httpClient.get(this.baseUrl + '/flights?iataNumber='+this.id).subscribe((res)=>{
        this.httpClient.get(this.baseUrl + '/flights?from=' + from + '&to=' + to + '&status=Scheduled').subscribe(function (res) {
            console.log(res);
            console.log("hello");
            _this.visible = true;
            _this.Table = res;
            console.log(_this.baseUrl + '/flights?from=' + from + '&to=' + to + '&status=Scheduled');
        });
    };
    AboutComponent.prototype.selectflight = function (i) {
        //var index = i[2];
        this.number = i.number;
        this.time = i.time;
        this.status = i.status;
        console.log(this.status);
        this.visible = false;
    };
    AboutComponent.prototype.get_reward = function (amt) {
        console.log("hello");
        this.visible2 = true;
        this.amt = Number(amt);
        this.cancelled = this.amt * 5;
        this.delayed = this.amt * 7;
        this.deviated = this.amt * 7;
        this.Table2 = [{ "ab": this.cancelled, "ac": this.delayed, "ad": this.deviated }];
    };
    AboutComponent.prototype.addInsurance = function (from, to, amt, date, Name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var proc, action, FAMILYNAME, servDt;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // event.preventDefault();
                        console.log(amt);
                        proc = "NHS";
                        action = "add";
                        FAMILYNAME = 'insureIT';
                        return [4 /*yield*/, this.Form.sendData(from, to, amt, Name, this.number, this.status, proc, action, FAMILYNAME)];
                    case 1:
                        servDt = _a.sent();
                        this.servicedata = "htis is service dAatta" + servDt;
                        return [2 /*return*/];
                }
            });
        });
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sawtooth_service__WEBPACK_IMPORTED_MODULE_2__["SawtoothService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _eventsbar_eventsbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventsbar/eventsbar.component */ "./src/app/eventsbar/eventsbar.component.ts");







var routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"] },
    { path: 'home', component: _page_page_component__WEBPACK_IMPORTED_MODULE_3__["PageComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'events', component: _eventsbar_eventsbar_component__WEBPACK_IMPORTED_MODULE_6__["EventsbarComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Sample Code*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypTYW1wbGUgQ29kZSovIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<app-nav></app-nav>\n<router-outlet>\n</router-outlet>\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'insureIT';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _eventsbar_eventsbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./eventsbar/eventsbar.component */ "./src/app/eventsbar/eventsbar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");












//something
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _page_page_component__WEBPACK_IMPORTED_MODULE_6__["PageComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
                _eventsbar_eventsbar_component__WEBPACK_IMPORTED_MODULE_10__["EventsbarComponent"],
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/eventsbar/eventsbar.component.css":
/*!***************************************************!*\
  !*** ./src/app/eventsbar/eventsbar.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*random comment*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRzYmFyL2V2ZW50c2Jhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50c2Jhci9ldmVudHNiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qcmFuZG9tIGNvbW1lbnQqLyJdfQ== */"

/***/ }),

/***/ "./src/app/eventsbar/eventsbar.component.html":
/*!****************************************************!*\
  !*** ./src/app/eventsbar/eventsbar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"> -->\n<br/>\n<br/><legend><p class=\"p1\">Track Policy</p></legend><br/>\n<!-- <div>\n  <button type=\"submit\" class=\"btn btn-primary\"  (click)=\"getDnr()\">Submit</button>\n</div> -->\n<div class=\"container\">\n\n  <form  class=\"form\"  #f=\"ngForm\" >\n    <div class=\"form-group row\">\n      <div class=\"col-md-12\">\n        <div class=\"input-group\">\n          <span class=\"input-group-prepend\">\n            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"getData(search.value)\"><i class=\"fa fa-search\"></i> Search</button>\n          </span>\n          <input #search type=\"text\" id=\"policyid\" name=\"policyid\" class=\"form-control\" placeholder=\"Policy ID\" ngModel required>\n        </div>\n      </div>\n      <table class=\"table\" name=\"data_table\" id=\"data_table\" *ngIf=\"visible2\">\n        <thead>\n            <tr>\n                <th>Name</th>\n                <th>Number</th>\n                <th>Status</th>\n        </thead>\n    \n        <tr *ngFor=\"let data of recp;let i = index\" >\n    \n            <td>\n                <span>{{data.name}}</span>\n            </td>\n            <td>\n                <span>{{data.number}}</span>\n            </td>\n            <td>\n                <span>{{data.status}}</span>\n            </td>\n        </tr>\n    </table>\n    </div>\n\n    </form>\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/eventsbar/eventsbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/eventsbar/eventsbar.component.ts ***!
  \**************************************************/
/*! exports provided: EventsbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsbarComponent", function() { return EventsbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sawtooth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sawtooth.service */ "./src/app/sawtooth.service.ts");
/* harmony import */ var buffer___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! buffer/ */ "./node_modules/buffer/index.js");
/* harmony import */ var buffer___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(buffer___WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var EventsbarComponent = /** @class */ (function () {
    function EventsbarComponent(Form, httpClient) {
        var _this = this;
        this.Form = Form;
        this.httpClient = httpClient;
        this.baseUrl = "http://localhost:3000";
        this.users = [];
        this.clames_addr = [];
        this.recp = [];
        this.recpList = [];
        this.donrList = [];
        this.clickMessage = "";
        this.servicedata = "";
        this.visible2 = false;
        var nhs = "NHS";
        setInterval(function () { _this.getList_rep(); }, 60000);
        //this.getList();
    }
    EventsbarComponent.prototype.ngOnInit = function () {
    };
    EventsbarComponent.prototype.getList = function () {
        var _this = this;
        //if(){
        return this.Form.getStateD(this.Form.address)
            .subscribe(function (resp) {
            var dataString = JSON.stringify(resp);
            var data = JSON.parse(dataString);
            var stateDataEnc = data.data;
            var stateDecoded = atob(stateDataEnc);
            _this.state = JSON.parse(stateDecoded);
            _this.addrArray = _this.state.address;
            for (var i in _this.addrArray) {
                _this.getData(_this.addrArray[i]);
            }
        });
    };
    EventsbarComponent.prototype.getDecodedData = function (responseJSON) {
        var dataBytes = responseJSON.data;
        var decodedData = new buffer___WEBPACK_IMPORTED_MODULE_3__["Buffer"](dataBytes, 'base64').toString();
        return decodedData;
    };
    EventsbarComponent.prototype.getData = function (addr) {
        var _this = this;
        return this.Form.getStateD(addr)
            .subscribe(function (resp) {
            var dataString = JSON.stringify(resp);
            var data = JSON.parse(dataString);
            var stateDataEnc = data.data;
            var stateDecoded = atob(stateDataEnc);
            _this.state = JSON.parse(stateDecoded);
            console.log("bkp 0");
            console.log("bkp 1");
            return _this.Form.getTxnD(_this.state.Txnid)
                .subscribe(function (response) {
                var dt1 = JSON.stringify(response);
                var dt2 = JSON.parse(dt1);
                var dt3 = dt2.data;
                var dt4 = dt3.payload;
                _this.stateDt = new buffer___WEBPACK_IMPORTED_MODULE_3__["Buffer"](dt4, "base64").toString();
                var Details = _this.stateDt.split(',');
                _this.detailsList = {
                    from: Details[0],
                    to: Details[1],
                    amt: Details[2],
                    name: Details[3],
                    number: Details[4],
                    status: Details[5],
                    proc: Details[6],
                    action: Details[7],
                    addr: addr
                    //status:this.state.Status,
                    //txnid:this.state.Txnid
                };
                if (Details[7] == "add") {
                    _this.visible2 = true;
                    _this.recp.push(_this.detailsList);
                }
                //this.Table2=this.detailsList;
                /*if(addr.substr(0,22)==this.Form.hash("insureIT").substr(0,6)+this.Form.hash("resp").substr(0,16)){
                  console.log(addr,"KJADIHEGFFFFGWwhfgwHU")
                  this.recp.push(this.detailsList)
                }
                else if(addr.substr(0,22)==this.Form.hash("hygieia").substr(0,6)+this.Form.hash("NHS").substr(0,16)){
                  console.log(addr,"ewfg")
                  this.donr.push(this.detailsList)
                }
               else{
                 console.log("Error in detail List")
               }*/
                console.log(_this.detailsList);
                console.log("Name is " + _this.stateDt);
                console.log("batchlist null", _this.stateDt);
            });
        }, function (error) {
            console.log(error);
        });
    };
    EventsbarComponent.prototype.getData_claim = function (addr) {
        var _this = this;
        return this.Form.getStateD(addr)
            .subscribe(function (resp) {
            var dataString = JSON.stringify(resp);
            var data = JSON.parse(dataString);
            var stateDataEnc = data.data;
            var stateDecoded = atob(stateDataEnc);
            _this.state = JSON.parse(stateDecoded);
            console.log("bkp 0");
            console.log("bkp 1");
            return _this.Form.getTxnD(_this.state.Txnid)
                .subscribe(function (response) {
                var dt1 = JSON.stringify(response);
                var dt2 = JSON.parse(dt1);
                var dt3 = dt2.data;
                var dt4 = dt3.payload;
                _this.stateDt = new buffer___WEBPACK_IMPORTED_MODULE_3__["Buffer"](dt4, "base64").toString();
                var Details = _this.stateDt.split(',');
                _this.detailsList = {
                    from: Details[0],
                    to: Details[1],
                    amt: Details[2],
                    name: Details[3],
                    number: Details[4],
                    status: Details[5],
                    proc: Details[6],
                    action: Details[7],
                    addr: addr
                    //status:this.state.Status,
                    //txnid:this.state.Txnid
                };
                if (Details[7] == "pol_claimed") {
                    _this.visible2 = true;
                    _this.recp.push(_this.detailsList);
                }
                //this.Table2=this.detailsList;
                /*if(addr.substr(0,22)==this.Form.hash("insureIT").substr(0,6)+this.Form.hash("resp").substr(0,16)){
                  console.log(addr,"KJADIHEGFFFFGWwhfgwHU")
                  this.recp.push(this.detailsList)
                }
                else if(addr.substr(0,22)==this.Form.hash("hygieia").substr(0,6)+this.Form.hash("NHS").substr(0,16)){
                  console.log(addr,"ewfg")
                  this.donr.push(this.detailsList)
                }
               else{
                 console.log("Error in detail List")
               }*/
                console.log(_this.detailsList);
                console.log("Name is " + _this.stateDt);
                console.log("batchlist null", _this.stateDt);
            });
        }, function (error) {
            console.log(error);
        });
    };
    //Observable.interval(10000).takeWhile(() => true).subscribe(() => this.getList_rep());
    EventsbarComponent.prototype.getList_rep1 = function () {
        console.log("inside repeat call 2");
    };
    EventsbarComponent.prototype.getList_rep = function () {
        var _this = this;
        //if(){
        console.log("inside repeat call getList_rep");
        return this.Form.getStateD(this.Form.address)
            .subscribe(function (resp) {
            var dataString = JSON.stringify(resp);
            var data = JSON.parse(dataString);
            var stateDataEnc = data.data;
            var stateDecoded = atob(stateDataEnc);
            _this.state = JSON.parse(stateDecoded);
            _this.addrArray = _this.state.address;
            //console.log("inside repeat call ");
            for (var i in _this.addrArray) {
                _this.getData_repet(_this.addrArray[i]);
                //console.log(this.addrArray[i]);
            }
        });
    };
    EventsbarComponent.prototype.getData_repet = function (addr) {
        var _this = this;
        return this.Form.getStateD(addr)
            .subscribe(function (resp) {
            var dataString = JSON.stringify(resp);
            var data = JSON.parse(dataString);
            var stateDataEnc = data.data;
            var stateDecoded = atob(stateDataEnc);
            _this.state = JSON.parse(stateDecoded);
            //console.log("bkp 0")
            //console.log("bkp 1")
            return _this.Form.getTxnD(_this.state.Txnid)
                .subscribe(function (response) {
                var dt1 = JSON.stringify(response);
                var dt2 = JSON.parse(dt1);
                var dt3 = dt2.data;
                var dt4 = dt3.payload;
                _this.stateDt = new buffer___WEBPACK_IMPORTED_MODULE_3__["Buffer"](dt4, "base64").toString();
                var Details = _this.stateDt.split(',');
                console.log("inside if(Details[7]=='Delayed')" + Details[4]);
                _this.httpClient.get('http://localhost:3000/flights?number=' + Details[4]).subscribe(function (res) {
                    //console.log(res[0].altitude);
                    //this.Table=res[0].status;
                    console.log(res[0].status + "here is me");
                    //console.log(this.baseUrl + '/flights?from='+from+'&to='+to+'&status=Scheduled');
                    if (res[0].status === 'Delayed') //here place the block creation code
                     {
                        console.log("Delayed");
                        _this.detailsList = {
                            from: Details[0],
                            to: Details[1],
                            amt: Details[2],
                            name: Details[3],
                            number: Details[4],
                            status: Details[5],
                            proc: Details[6],
                            action: Details[7],
                            addr: addr
                            //status:this.state.Status,
                            //txnid:this.state.Txnid
                        };
                        _this.amt = Details[2] * 5;
                        _this.newstatus = "Done";
                        var proc = "NHS";
                        var action = "pol_claimed";
                        var FAMILYNAME = 'insureIT';
                        ///const servDt = this.Form.sendData(Details[0],Details[1],this.amt,Details[3],Details[4],this.newstatus,proc,action,FAMILYNAME);
                        ///this.servicedata="htis is service dAatta"+servDt;
                        //this.visible2=true;
                        _this.recp.push(_this.detailsList);
                        //this.Table2=this.detailsList;
                        //if(addr.substr(0,22)==this.Form.hash("insureIT").substr(0,6)+this.Form.hash("resp").substr(0,16)){
                        console.log("way out to match handler" + addr);
                        _this.clames_addr.push(_this.detailsList);
                        //this.match(this.detailsList)
                        //}
                        /*else if(addr.substr(0,22)==this.Form.hash("hygieia").substr(0,6)+this.Form.hash("NHS").substr(0,16)){
                          console.log(addr,"ewfg")
                          this.donr.push(this.detailsList)
                        }
                      else{
                        console.log("Error in detail List")
                      }*/
                        //console.log(this.detailsList);
                        //console.log("Name is "+this.stateDt)
                        //console.log("batchlist null",this.stateDt);
                        _this.match(addr);
                    }
                });
            });
        }, function (error) {
            console.log(error);
        });
    };
    EventsbarComponent.prototype.match = function (recpaddr) {
        console.log("Inside match class " + recpaddr);
        var action = "modify";
        console.log(recpaddr + action);
        var FAMILYNAME = 'clamed';
        var servDt = this.Form.matchadr(recpaddr, action, FAMILYNAME);
        console.log(servDt + "inside match handler its ok");
    };
    EventsbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-eventsbar',
            template: __webpack_require__(/*! ./eventsbar.component.html */ "./src/app/eventsbar/eventsbar.component.html"),
            styles: [__webpack_require__(/*! ./eventsbar.component.css */ "./src/app/eventsbar/eventsbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sawtooth_service__WEBPACK_IMPORTED_MODULE_2__["SawtoothService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], EventsbarComponent);
    return EventsbarComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\n    display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA1MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <img class =\"img-fluid\" src=\"assets/images/ensureit.png\" width=\"650\" height=\"650\" >\n</div>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {  padding: 5px; font-family: helvetica; font:15px;  }\n.p1 { text-align: center; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVEsWUFBWSxFQUFFLHNCQUFzQixFQUFFLFNBQVMsR0FBRztBQUMxRCxNQUFNLGtCQUFrQixFQUFFIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7ICBwYWRkaW5nOiA1cHg7IGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7IGZvbnQ6MTVweDsgIH1cbi5wMSB7IHRleHQtYWxpZ246IGNlbnRlcjsgfSJdfQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark \">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink =\"\">  <legend>{{title}}\n    </legend></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item active\">\n              <a class=\"nav-link\" routerLink=\"\">Home</a>\n          </li>\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" routerLink=\"home\">Customer Registration</a>\n          </li>\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" routerLink =\"about\">Take Policy</a>\n          </li>\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" routerLink =\"events\">Search Policy</a>\n          </li>\n      </ul>\n      <br/>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/page/page.component.css":
/*!*****************************************!*\
  !*** ./src/app/page/page.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {  padding: 5px; font-family: helvetica; font:15px;   }\n.p1 { text-align: center; }\ninput.ng-invalid.ng-touched{ border: 1px solid red }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSxZQUFZLEVBQUUsc0JBQXNCLEVBQUUsU0FBUyxJQUFJO0FBQzNELE1BQU0sa0JBQWtCLEVBQUU7QUFDMUIsNkJBQTZCLHNCQUFzQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7ICBwYWRkaW5nOiA1cHg7IGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7IGZvbnQ6MTVweDsgICB9XG4ucDEgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZHsgYm9yZGVyOiAxcHggc29saWQgcmVkIH0iXX0= */"

/***/ }),

/***/ "./src/app/page/page.component.html":
/*!******************************************!*\
  !*** ./src/app/page/page.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"> -->\n<br/>\n<br/><legend><p class=\"p1\">Sign up Page</p></legend><br/>\n<!-- <div>\n  <button type=\"submit\" class=\"btn btn-primary\"  (click)=\"getDnr()\">Submit</button>\n</div> -->\n\n<div class=\"container\">\n\n  <form  class=\"form\"  #f2=\"ngForm\" >\n      <div class=\"alert alert-success fade show\" role=\"alert\" id=\"success_alert\" *ngIf=\"edited\" >\n          <h4 class=\"alert-heading\">Well done!</h4>\n          <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\n          <hr>\n          <p class=\"mb-0\">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n        </div>\n    <div class=\"form-group col-sm-10\">\n\n      <label class=\"control-label col-sm-2\" >Name:</label>\n      <div class=\"form-row\">     \n      <div class=\"col\">\n        <input #firstname type=\"text\" class=\"form-control\" id=\"firstname\" placeholder=\"First Name\" name='firstname' ngModel required pattern=\"^[a-zA-Z\\.]*$\">\n      </div>\n      <div class=\"col\">\n        <input #lastname type=\"text\" class=\"form-control\" id=\"lastname\" placeholder=\"Last Name\" name='lastname' ngModel required pattern=\"^[a-zA-Z\\.]*$\">\n      </div> </div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\">Gender:</label>\n        <div class=\"col-sm-10\">\n                <select class=\"form-control\" id=\"gender\" #gender type=\"text\" name='gender' ngModel required>\n                  <option>Male</option>\n                  <option>Female</option>\n                  <option>Other</option>\n                </select>\n                <br>\n          </div>\n        </div>\n  <div class=\"form-group\">\n  <label class=\"control-label col-sm-2\" >IDproof:</label>\n  <div class=\"col-sm-10\">\n    <input type=\"text\" class=\"form-control\"  name=\"idproof\" #idproof placeholder=\"enter government given identity proof (aadhar preferred)\" ngModel required maxlength=\"12\"  >\n  </div>\n</div>\n<div class=\"form-group\">\n    <label class=\"control-label col-sm-2\" >E-Mail</label>\n    <div class=\"col-sm-10\">\n      <input type=\"email\" class=\"form-control\"  name=\"email\" #email placeholder=\"E mail ID\" ngModel required  >\n    </div>\n  </div>\n<div class=\"form-group\">\n<label class=\"control-label col-sm-2\" >Date of Birth:</label>\n<div class=\"col-sm-10\">\n  <input type=\"date\" class=\"form-control\" placeholder=\"Date\" name=\"date\" ngModel #date required >\n</div>\n\n</div>\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!f2.valid\" (click)=\"addForm2(firstname.value,lastname.value,gender.value,idproof.value,date.value,email.value)\">Submit</button>\n        </div>\n      </div>\n    </form>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/page/page.component.ts":
/*!****************************************!*\
  !*** ./src/app/page/page.component.ts ***!
  \****************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sawtooth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sawtooth.service */ "./src/app/sawtooth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




//import { test } from './test'
//import  crypto from 'crypto-js';
//import * as crypto from 'crypto-js';
//declare function mailSent2(Gender,idproof,date,name,some,some2):any;
var PageComponent = /** @class */ (function () {
    function PageComponent(Form, router) {
        this.Form = Form;
        this.router = router;
        this.users = [];
        this.clickMessage = "";
        this.servicedata = "";
        this.edited = false;
        console.log("Inside page component.ts");
        //date: any = { date: {year: (new Date()).getFullYear(), month: (new Date()).getMonth() + 1, day: (new Date()).getDate()} };
    }
    PageComponent.prototype.ngOnInit = function () {
    };
    PageComponent.prototype.saveTodos = function () {
        //show box msg
        this.edited = true;
        //wait 3 Seconds and hide
        setTimeout(function () {
            this.edited = false;
            console.log(this.edited);
            this.router.navigate(['/about']);
        }.bind(this), 6000);
    };
    //async addForm(Gender:string,idproof:string,date:string,Name:string){
    PageComponent.prototype.addForm2 = function (firstname, lastname, Gender, idproof, date, email) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var proc, action, FAMILYNAME, some, servDt;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // event.preventDefault();
                        this.clickMessage = "Name: " + firstname + " " + lastname + "Gender" + Gender + "idproof" + idproof + "date" + date + "Email" + email;
                        console.log(this.clickMessage);
                        proc = "NHS";
                        action = "add_data";
                        FAMILYNAME = 'insureIT';
                        some = "null";
                        return [4 /*yield*/, this.Form.sendData2(Gender, idproof, date, firstname, lastname, email, proc, action, FAMILYNAME)];
                    case 1:
                        servDt = _a.sent();
                        //mailSent2(Gender,idproof,date,name,some,some2);
                        if (servDt != null) {
                            this.saveTodos();
                        }
                        console.log(servDt.toString());
                        //this.servicedata="htis is service dAatta"+servDt;
                        +servDt.toString();
                        return [2 /*return*/];
                }
            });
        });
    };
    PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! ./page.component.html */ "./src/app/page/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.css */ "./src/app/page/page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sawtooth_service__WEBPACK_IMPORTED_MODULE_2__["SawtoothService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/sawtooth.service.ts":
/*!*************************************!*\
  !*** ./src/app/sawtooth.service.ts ***!
  \*************************************/
/*! exports provided: SawtoothService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SawtoothService", function() { return SawtoothService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var crypto_browserify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-browserify */ "./node_modules/crypto-browserify/index.js");
/* harmony import */ var crypto_browserify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_browserify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sawtooth-sdk/protobuf */ "./node_modules/sawtooth-sdk/protobuf/index.js");
/* harmony import */ var sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sawtooth-sdk/signing */ "./node_modules/sawtooth-sdk/signing/index.js");
/* harmony import */ var sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var buffer___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! buffer/ */ "./node_modules/buffer/index.js");
/* harmony import */ var buffer___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(buffer___WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var text_encoding_lib_encoding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! text-encoding/lib/encoding */ "./node_modules/text-encoding/lib/encoding.js");
/* harmony import */ var text_encoding_lib_encoding__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(text_encoding_lib_encoding__WEBPACK_IMPORTED_MODULE_7__);








var SawtoothService = /** @class */ (function () {
    //,private  dialog:  MatDialog
    function SawtoothService(http) {
        this.http = http;
        this.Family_version = '1.0';
        this.REST_API_BASE_URL = 'http://localhost:4200/api';
        this.arr = [];
        this.address = this.hash("insureIT").substr(0, 70);
        this.addrNs = this.hash("insureIT").substr(0, 6);
        this.addrm = this.hash("this.addrgen").substr(0, 70);
    }
    SawtoothService.prototype.hash = function (v) {
        return Object(crypto_browserify__WEBPACK_IMPORTED_MODULE_2__["createHash"])('sha512').update(v).digest('hex');
    };
    //called for transaction creation
    SawtoothService.prototype.getTransactionHeaderBytes = function (inputAddressList, outputAddressList, payload) {
        var transactionHeaderBytes = sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3__["TransactionHeader"].encode({
            familyName: this.Family_name,
            familyVersion: this.Family_version,
            inputs: [this.addrNs, this.address],
            outputs: [this.addrNs, this.address],
            signerPublicKey: this.publicKey,
            batcherPublicKey: this.publicKey,
            dependencies: [],
            payloadSha512: this.hash(payload),
            nonce: (Math.random() * 1000).toString()
        }).finish();
        return transactionHeaderBytes;
    };
    SawtoothService.prototype.getTransaction = function (transactionHeaderBytes, payloadBytes) {
        var transaction = sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3__["Transaction"].create({
            header: transactionHeaderBytes,
            headerSignature: this.signer.sign(transactionHeaderBytes),
            payload: payloadBytes
        });
        return transaction;
    };
    SawtoothService.prototype.getBatchHeaderBytes = function (transactionSignaturesList) {
        console.log("Inside get BAtch list");
        var batchHeader = sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3__["BatchHeader"].encode({
            signerPublicKey: this.publicKey,
            transactionIds: transactionSignaturesList
        }).finish();
        return batchHeader;
    };
    SawtoothService.prototype.getBatch = function (batchHeaderBytes, transactionsList) {
        var batch = sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3__["Batch"].create({
            header: batchHeaderBytes,
            headerSignature: this.signer.sign(batchHeaderBytes),
            transactions: transactionsList
        });
        return batch;
    };
    SawtoothService.prototype.getBatchListBytes = function (batchesList) {
        var batchListBytes = sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3__["BatchList"].encode({
            batches: batchesList
        }).finish();
        return batchListBytes;
    };
    SawtoothService.prototype.getBatchList = function (transactionsList) {
        var transactionSignatureList = transactionsList.map(function (tx) { return tx.headerSignature; });
        // Create batch header
        var batchHeader = this.getBatchHeaderBytes(transactionSignatureList);
        // Create the batch
        var batch = this.getBatch(batchHeader, transactionsList);
        // Batch List
        var batchList = this.getBatchListBytes([batch]);
        return batchList;
    };
    /*-------END Creating transactions & batches-----------*/
    // Get state of address from rest api
    SawtoothService.prototype.getState = function (address) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var getStateURL, fetchOptions;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                getStateURL = this.REST_API_BASE_URL + '/state/' + address;
                fetchOptions = { method: 'GET' };
                return [2 /*return*/, window.fetch(getStateURL, fetchOptions)];
            });
        });
    };
    SawtoothService.prototype.getDecodedData = function (responseJSON) {
        var dataBytes = responseJSON.data;
        var decodedData = new buffer___WEBPACK_IMPORTED_MODULE_6__["Buffer"](dataBytes, 'base64').toString();
        return decodedData;
    };
    SawtoothService.prototype.sendToRestAPI = function (batchListBytes) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (batchListBytes == null) {
                    //to match the donor n receipient we need txnid for detzai
                    // GET state
                    return [2 /*return*/, this.getState(this.address)
                            .then(function (response) {
                            console.log("batchlist null");
                            return response.json();
                        })
                            .then(function (responseJson) {
                            console.log("batchlist null2");
                            return _this.getDecodedData(responseJson);
                        })
                            .catch(function (error) {
                            console.error(error);
                        })];
                }
                else {
                    // POST batch list
                    console.log("calling postBatchList");
                    return [2 /*return*/, this.postBatchList(batchListBytes)];
                }
                return [2 /*return*/];
            });
        });
    };
    // Post batch list to rest api
    SawtoothService.prototype.postBatchList = function (batchListBytes) {
        var postBatchListURL = this.REST_API_BASE_URL + '/batches';
        var fetchOptions = {
            method: 'POST',
            body: batchListBytes,
            headers: {
                'Content-Type': 'application/octet-stream'
            }
        };
        return window.fetch(postBatchListURL, fetchOptions);
    };
    SawtoothService.prototype.getListData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                try {
                    this.address = this.hash("insureIT").substr(0, 70);
                    return [2 /*return*/, this.getState(this.address)
                            .then(function (resp) {
                            console.log("sendToRestAPI response", resp);
                            var addrArray = resp.toString().split(',');
                            console.log("hello", addrArray);
                            return addrArray;
                        })
                            .catch(function (error) {
                            console.log("error here", error);
                        })];
                }
                catch (e) {
                    console.log("Error in getting list  details", e);
                    return [2 /*return*/, "ERROR"];
                }
                return [2 /*return*/];
            });
        });
    };
    SawtoothService.prototype.superAddress = function (superAddress) {
        throw new Error("Method not implemented.");
    };
    SawtoothService.prototype.sendData = function (from, to, amt, Name, number, status, proc, action, familyName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var address, context, privateKey, data, encData, transactionHeader, transaction, transactionsList, batchList, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.Family_name = familyName;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        address = this.hash('insureIT').substr(0, 6) + this.hash(Name).substr(0, 32) + this.hash(from).substr(0, 32);
                        console.log(address);
                        context = Object(sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_4__["createContext"])('secp256k1');
                        privateKey = context.newRandomPrivateKey();
                        this.signer = new sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_4__["CryptoFactory"](context).newSigner(privateKey);
                        this.publicKey = this.signer.getPublicKey().asHex();
                        data = from + "," + to + "," + amt + "," + Name + "," + number + "," + status + "," + proc + "," + action;
                        console.log(data + "data");
                        encData = new text_encoding_lib_encoding__WEBPACK_IMPORTED_MODULE_7__["TextEncoder"]('utf8').encode(data);
                        console.log("ThisAddress" + this.address);
                        transactionHeader = this.getTransactionHeaderBytes([this.addrNs], [this.address], encData);
                        console.log("After txn header");
                        transaction = this.getTransaction(transactionHeader, encData);
                        console.log("After transaction");
                        transactionsList = [transaction];
                        console.log("After transactionsList");
                        batchList = this.getBatchList(transactionsList);
                        console.log("After batchList");
                        // Send the batch to REST API
                        return [4 /*yield*/, this.sendToRestAPI(batchList)
                                .then(function (resp) {
                                console.log("sendToRestAPI response", resp);
                            })
                                .catch(function (error) {
                                console.log("error here", error);
                            })];
                    case 2:
                        // Send the batch to REST API
                        _a.sent();
                        return [2 /*return*/, batchList];
                    case 3:
                        e_1 = _a.sent();
                        console.log("Error in reading the key details", e_1);
                        return [2 /*return*/, "ERROR"];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SawtoothService.prototype.sendData2 = function (gender, idproof, date, fname, lname, some, proc, action, familyName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var context, privateKey, data, encData, transactionHeader, transaction, transactionsList, batchList, e_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.Family_name = familyName;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        context = Object(sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_4__["createContext"])('secp256k1');
                        privateKey = context.newRandomPrivateKey();
                        this.signer = new sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_4__["CryptoFactory"](context).newSigner(privateKey);
                        this.publicKey = this.signer.getPublicKey().asHex();
                        data = idproof + "," + gender + "," + date + "," + fname + "," + lname + "," + some + "," + proc + "," + action;
                        console.log(data + "data");
                        encData = new text_encoding_lib_encoding__WEBPACK_IMPORTED_MODULE_7__["TextEncoder"]('utf8').encode(data);
                        console.log("ThisAddress" + this.address);
                        transactionHeader = this.getTransactionHeaderBytes([this.addrNs], [this.address], encData);
                        console.log("After txn header");
                        transaction = this.getTransaction(transactionHeader, encData);
                        console.log("After transaction");
                        transactionsList = [transaction];
                        console.log("After transactionsList");
                        batchList = this.getBatchList(transactionsList);
                        console.log("After batchList");
                        // Send the batch to REST API
                        return [4 /*yield*/, this.sendToRestAPI(batchList)
                                .then(function (resp) {
                                console.log("sendToRestAPI response", resp);
                            })
                                .catch(function (error) {
                                console.log("error here", error);
                            })];
                    case 2:
                        // Send the batch to REST API
                        _a.sent();
                        return [2 /*return*/, batchList];
                    case 3:
                        e_2 = _a.sent();
                        console.log("Error in reading the key details", e_2);
                        return [2 /*return*/, "ERROR"];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SawtoothService.prototype.insure = function (from, to, amt, Name, proc, action, familyName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var context, privateKey, data, encData, transactionHeader, transaction, transactionsList, batchList, e_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.Family_name = familyName;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        context = Object(sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_4__["createContext"])('secp256k1');
                        privateKey = context.newRandomPrivateKey();
                        this.signer = new sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_4__["CryptoFactory"](context).newSigner(privateKey);
                        this.publicKey = this.signer.getPublicKey().asHex();
                        data = from + "," + to + "," + amt + "," + Name + "," + proc + "," + action;
                        console.log(data + " " + "data");
                        encData = new text_encoding_lib_encoding__WEBPACK_IMPORTED_MODULE_7__["TextEncoder"]('utf8').encode(data);
                        console.log("ThisAddress" + this.address);
                        transactionHeader = this.getTransactionHeaderBytes([this.addrNs], [this.address], encData);
                        console.log("After txn header");
                        transaction = this.getTransaction(transactionHeader, encData);
                        console.log("After transaction inside second function");
                        transactionsList = [transaction];
                        console.log("After transactionsList");
                        batchList = this.getBatchList(transactionsList);
                        console.log("After batchList");
                        // Send the batch to REST API
                        return [4 /*yield*/, this.sendToRestAPI(batchList)
                                .then(function (resp) {
                                console.log("sendToRestAPI response", resp);
                            })
                                .catch(function (error) {
                                console.log("error here", error);
                            })];
                    case 2:
                        // Send the batch to REST API
                        _a.sent();
                        return [2 /*return*/, batchList];
                    case 3:
                        e_3 = _a.sent();
                        console.log("Error in reading the key details", e_3);
                        return [2 /*return*/, "ERROR"];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //automatic claming
    SawtoothService.prototype.matchadr = function (recpaddr, action, familyName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var context, privateKey, data, encData, transactionHeader, transaction, transactionsList, batchList, e_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("sawtooth service" + recpaddr + action);
                        this.Family_name = familyName;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        context = Object(sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_4__["createContext"])('secp256k1');
                        privateKey = context.newRandomPrivateKey();
                        this.signer = new sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_4__["CryptoFactory"](context).newSigner(privateKey);
                        this.publicKey = this.signer.getPublicKey().asHex();
                        // Encode the payload
                        /*const payload = this.getEncodedData(action, values);*/
                        this.leng = this.arr.length;
                        this.arr[this.leng + 1] = recpaddr;
                        data = recpaddr + "," + action;
                        console.log(data + "data");
                        encData = new text_encoding_lib_encoding__WEBPACK_IMPORTED_MODULE_7__["TextEncoder"]('utf8').encode(data);
                        console.log("ThisAddress" + this.addrm);
                        transactionHeader = this.getTransactionHeaderBytes([this.addrNs], [this.addrm], encData);
                        console.log("After txn header");
                        transaction = this.getTransaction(transactionHeader, encData);
                        console.log("After transaction");
                        transactionsList = [transaction];
                        console.log("After transactionsList");
                        batchList = this.getBatchList(transactionsList);
                        console.log("After batchList");
                        // Send the batch to REST API
                        return [4 /*yield*/, this.sendToRestAPI(batchList)
                                .then(function (resp) {
                                console.log("sendToRestAPI response", resp);
                            })
                                .catch(function (error) {
                                console.log("error here", error);
                            })];
                    case 2:
                        // Send the batch to REST API
                        _a.sent();
                        return [2 /*return*/, batchList];
                    case 3:
                        e_4 = _a.sent();
                        console.log("Error in reading the key details", e_4);
                        return [2 /*return*/, "ERROR"];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SawtoothService.prototype.getStateD = function (addre) {
        return this.http.get('http://localhost:4200/api/state/' + addre);
    };
    SawtoothService.prototype.getTxnD = function (txnid) {
        return this.http.get('http://localhost:4200/api/transactions/' + txnid);
    };
    SawtoothService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], SawtoothService);
    return SawtoothService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rafsal/01-DEVELOPMENT/Angular/Main_project/insureit/insureIT/insureIT/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map