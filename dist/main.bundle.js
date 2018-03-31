webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n</router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        // template: `<router-outlet></router-outlet>`,
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__todo_todo_component__ = __webpack_require__("../../../../../src/app/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__todo_list_todo_list_component__ = __webpack_require__("../../../../../src/app/todo-list/todo-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__todo_list_todo_edit_component__ = __webpack_require__("../../../../../src/app/todo-list/todo-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_todo_service_client__ = __webpack_require__("../../../../../src/app/services/todo.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
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
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_9__todo_todo_component__["a" /* TodoComponent */],
            __WEBPACK_IMPORTED_MODULE_10__todo_list_todo_list_component__["a" /* TodoListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__todo_list_todo_edit_component__["a" /* TodoEditComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_test_service_client__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_12__services_todo_service_client__["a" /* TodoService */], __WEBPACK_IMPORTED_MODULE_14__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_15__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_16__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_17__services_widget_service_client__["a" /* WidgetService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/**
 * Created by sesha on 7/26/17.
 */

















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:uid/website', component: __WEBPACK_IMPORTED_MODULE_2__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_7__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_8__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_10__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/widget-header', component: __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/widget-image', component: __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/widget-youtube', component: __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */] },
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Assignment Home Page</h1>\n<div class=\"container\">\n  <ul><a [routerLink]=\"['login']\">login</a></ul>\n  <ul><a [routerLink]=\"['register']\">register</a></ul>\n  <ul><a [routerLink]=\"['user/:uid']\">profile</a></ul>\n  <ul><a [routerLink]=\"['user/:uid/website']\">website-list</a></ul>\n  <ul><a [routerLink]=\"['user/:uid/website/new']\">website-new</a></ul>\n  <ul><a [routerLink]=\"['user/:uid/website/:wid']\">website-edit</a></ul>\n  <ul><a [routerLink]=\"['user/:uid/website/:wid/page']\">page-list</a></ul>\n  <ul><a [routerLink]=\"['user/:uid/website/:wid/page/new']\">page-new</a></ul>\n  <ul><a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\">page-edit</a></ul>\n  <ul><a [routerLink]=\"['/user/123/website/456/page/321/widget']\">widget-list</a></ul>\n  <ul><a [routerLink]=\"['user/:uid/website/:wid/page/321/widget/new']\">widget-chooser</a></ul>\n  <ul><a [routerLink]=\"['user/:uid/website/:wid/page/321/widget/123']\">widget-edit</a></ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\"\n     style=\"position: relative;right: 0px;\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\"\n       style=\"position:relative;\">\n    <a [routerLink]=\"['/user/:uid/website/:wid/page']\" class=\"pull-left navbar-text\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n    <div class=\"container-fluid\">\n      <a [routerLink]=\"['/user/' + userId + '/website/' + websiteId + '/page']\" class=\"pull-right navbar-text\">\n        <span (click) = \"updatePage()\" class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\">\n          Edit Page\n        </a>\n      </div>\n    </div>\n  </nav>\n  <label for=\"name\">\n    Name\n  </label>\n  <input [(ngModel)] = \"name\"\n         class=\"form-control\"\n         id=\"name\"\n         placeholder=\"Facebook\"/>\n  <label>\n    Title\n  </label>\n  <input [(ngModel)] = \"description\"\n         class=\"form-control\"\n         id=\"description\"\n         placeholder=\"Page Title\"/>\n  <a (click)=deletePage(pageId) class=\"btn btn-danger btn-block\">Delete</a>\n</div>\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user/:uid']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageEditComponent = (function () {
    function PageEditComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.page = {};
    }
    PageEditComponent.prototype.deletePage = function (pageId) {
        var _this = this;
        this.pageService.deletePage(pageId)
            .subscribe(function (pages) {
            _this.pages = pages;
            _this.router.navigate(['/user/' + _this.userId + '/website/' + _this.websiteId + '/page']);
        });
    };
    PageEditComponent.prototype.updatePage = function () {
        var _this = this;
        this.page = {
            websiteId: this.websiteId,
            name: this.name,
            description: this.description,
            _id: this.pageId
        };
        this.pageService.updatePage(this.pageId, this.page)
            .subscribe(function (updatePage) {
            _this.page = updatePage;
        });
    };
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.pageId = params['pid'];
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
        this.page = this.pageService.findPageById(this.pageId);
        this.name = this.page['name'];
        this.description = this.page['description'];
    };
    return PageEditComponent;
}());
PageEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], PageEditComponent);

var _a, _b, _c;
//# sourceMappingURL=page-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" style=\"position:relative;\">\n  <div class=\"container-fluid\">\n    <a [routerLink] = \"['/user/' +uid+'/website/' +wid + '/page/new']\" class=\"pull-right navbar-text\">\n      <span class=\"glyphicon glyphicon-plus\"></span>\n    </a>\n    <a [routerLink]=\"['/user/:uid/website']\" class=\"pull-left navbar-text\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\">\n        Pages\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid\" style=\"height: 100%;\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">\n      <div class=\"row\" *ngFor=\"let page of pages\">\n        <div class=\"col-xs-6\"><a [routerLink]=\"['/user/' +uid+'/website/'+wid+'/page/'+page._id+'/widget']\">{{page.name}}</a></div>\n        <div class=\"col-xs-6\">\n          <a [routerLink]=\"['/user/'+uid+'/website/'+wid+ '/page/'+ page._id]\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user/' +uid]\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageListComponent = (function () {
    function PageListComponent(_pageService, activatedRoute) {
        this._pageService = _pageService;
        this.activatedRoute = activatedRoute;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.wid = params['wid'];
            _this.uid = params['uid'];
            // this.pid = params['pid'];
        });
        this._pageService.findPageByWebsiteId(this.wid)
            .subscribe(function (pages) {
            _this.pages = pages;
        });
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], PageListComponent);

var _a, _b;
//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\"\n     style=\"position: relative;right: 0px;\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\"\n       style=\"position:relative;\">\n    <a [routerLink]=\"['/user/:uid/website/:wid/page']\" class=\"pull-left navbar-text\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n    <div class=\"container-fluid\">\n      <a [routerLink]=\"['/user/'+userId+'/website/'+websiteId+'/page']\" class=\"pull-right navbar-text\">\n        <span (click)=\"createPage()\" class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\">\n          New Pages\n        </a>\n      </div>\n    </div>\n\n\n  </nav>\n  <label for=\"name\">\n    Name\n  </label>\n  <input class=\"form-control\"\n         [(ngModel)]=\"name\"\n         id=\"name\"\n         placeholder=\"Facebook\"/>\n  <label for=\"description\">\n    Title\n  </label>\n  <textarea class=\"form-control\"\n            [(ngModel)]=\"description\"\n            id=\"description\"></textarea>\n</div>\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user/:uid']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageNewComponent = (function () {
    function PageNewComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    PageNewComponent.prototype.createPage = function () {
        var _this = this;
        var newPage = {
            _id: this.pageId,
            name: this.name,
            description: this.description,
            websiteId: this.websiteId
        };
        this.pageService.createPage(this.websiteId, newPage)
            .subscribe(function (pages) {
            _this.pages = pages;
        });
    };
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.pageService.findPageByWebsiteId(_this.websiteId)
                .subscribe(function (pages) {
                _this.pages = pages;
            });
        });
    };
    return PageNewComponent;
}());
PageNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], PageNewComponent);

var _a, _b, _c;
//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>Test</h1>\n\n  <div *ngIf=\"alertMessage\"\n       class=\"alert alert-danger\">\n    \"Failed to create\"\n  </div>\n\n  <div *ngIf=\"successMessage\"\n       class=\"alert alert-success\">\n    \"Succesfully created/deleted\"\n  </div>\n\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>Test Message</th>\n      <th>&nbsp;</th>\n    </tr>\n\n\n    <tr>\n      <td>\n        <input [(ngModel)]=\"message\"\n               placeholder=\"message\"\n               class=\"form-control\"/>\n      </td>\n\n\n      <td>\n        <button (click)=\"createMessage()\"\n                class=\"btn btn-primary pull-right\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </button>\n      </td>\n    </tr>\n    </thead>\n\n\n    <tbody>\n    <tr *ngFor=\"let message of messages\">\n      <td>\n        {{message.message}}\n      </td>\n      <td>\n        <button (click)=\"deleteMessage(message._id)\"\n                class=\"btn btn-danger pull-right\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <h1>Login</h1>\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n    <input placeholder=\"username\"\n           name=\"username\"\n           type=\"text\"\n           class=\"form-control\"\n           ngModel\n           required\n           #username=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n Please enter username!\n </span>\n    <input placeholder=\"password\"\n           name=\"password\"\n           type=\"text\"\n           class=\"form-control\"\n           ngModel\n           required\n           #username=\"ngModel\"/>\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\" [disabled]=\"!f.valid\">Login</button>\n    <a [routerLink]=\"['/register']\" ><button class=\"btn btn-success btn-block\"\n                                              type=\"submit\">Register</button></a>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        var _this = this;
        // fetching data from loginForm
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.findUserByCredentials(this.username, this.password)
            .subscribe(function (user) {
            _this.errorFlag = false;
            _this.router.navigate(['/user', user._id]);
        }, function (error) {
            _this.errorFlag = true;
        });
    };
    return LoginComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-blue\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Profile</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user/' +  uid]\" class=\"navbar-link\">\n        <span (click)=\"updateUser()\" class=\"glyphicon glyphicon-ok navbar-white\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input [(ngModel)]= \"username\"\n             name=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"username\">\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input [(ngModel)] = \"email\"\n             name=\"email\"\n             type=\"email\"\n             class=\"form-control\"\n             id=\"email\" >\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label>First Name</label>\n      <input [(ngModel)] = \"firstname\"\n             type = \"text\"\n             name=\"first\"\n             class=\"form-control\"\n             id=\"firstName\">\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label>Last Name</label>\n      <input [(ngModel)] = \"lastname\"\n             name=\"last\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"lastName\" >\n    </div>\n  </form>\n  <a class=\"btn btn-primary btn-block\"\n     [routerLink]=\"['/user/'+ uid + '/website']\">Websites</a>\n  <a class=\"btn btn-danger btn-block \"\n     [routerLink]=\"['/login']\" >Logout</a>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom navbar-blue\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user',uid]\">\n        <span class=\"glyphicon glyphicon-user navbar-white\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(userService, activatedRoute) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.user = {};
    }
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        this.user = {
            username: this.username,
            password: this.password,
            firstName: this.firstname,
            lastName: this.lastname,
            _id: this.uid
        };
        this.userService.updateUser(this.uid, this.user)
            .subscribe(function (updateUser) {
            _this.user = updateUser;
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.userService.findUserById(_this.uid)
                .subscribe(function (user) {
                _this.user = user;
                _this.username = _this.user['username'];
                _this.email = _this.user['email'];
                _this.firstname = _this.user['firstName'];
                _this.lastname = _this.user['lastName'];
            });
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Register</h1>\n  <label>Username</label>\n  <input placeholder=\"username\"\n         id=\"username\"\n         [(ngModel)]=\"username\"\n         type=\"text\"\n         class=\"form-control\"/>\n  <label>Password</label>\n  <input placeholder=\"password\"\n         type=\"password\"\n         id=\"password\"\n         [(ngModel)]=\"password\"\n         class=\"form-control\"/>\n  <label>Verify Password</label>\n  <input placeholder=\"verify password\"\n         type=\"password2\"\n         class=\"form-control\"/>\n  <a (click)=\"createUser()\" class=\"btn btn-primary btn-block\">\n    Register\n  </a>\n  <a [routerLink]=\"['/login']\"\n     class=\"btn btn-danger btn-block\">\n    Cancel\n  </a>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
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
    function RegisterComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    RegisterComponent.prototype.createUser = function () {
        var _this = this;
        var newUser = {
            username: this.username,
            password: this.password
        };
        this.userService.createUser(newUser).subscribe(function (user) {
            _this.userId = user._id;
            _this.router.navigate(['/user/', _this.userId]);
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"height: 100%;\">\n  <div class=\"row\" style=\"position: relative;height: 100%;\">\n    <div class=\"col-xs-3 hidden-xs\">\n      <nav class=\"navbar navbar-default navbar-blue\">\n        <div class=\"container-fluid\">\n          <a [routerLink]=\"['/user/:uid/website']\" class=\"pull-right navbar-text\">\n            <span class=\"glyphicon glyphicon-plus \"></span>\n          </a>\n          <a [routerLink]=\"['/user/:uid/website']\" class=\"pull-left navbar-text\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n          <div class=\"navbar-header\">\n            <a class=\"navbar-brand navbar-blue\">\n              Websites\n            </a>\n          </div>\n        </div>\n      </nav>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor = \"let website of websites\">\n          {{website.name}}\n          <a  class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-sm-9 col-xs-12\">\n      <nav class=\"navbar navbar-default navbar-blue\">\n        <div class=\"container-fluid\">\n          <a [routerLink]=\"['/user/' + userId + '/website']\" class=\"pull-right navbar-text\">\n            <span (click)=\"updateWebsite()\" class=\"glyphicon glyphicon-ok\"></span>\n          </a>\n          <div class=\"navbar-header\">\n            <a class=\"navbar-brand\">\n              Edit Websites\n            </a>\n          </div>\n        </div>\n      </nav>\n      <label for=\"name\">\n        Website Name\n      </label>\n      <input [(ngModel)]=\"name\"\n             class=\"form-control\"\n             id=\"name\"\n             placeholder=\"Facebook\"/>\n      <label for=\"description\">\n        Website Description\n      </label>\n      <textarea [(ngModel)]=\"description\"\n                class=\"form-control\"\n                id=\"description\"></textarea>\n      <a (click)= \"deleteWebsite(websiteId)\" class=\"btn btn-danger btn-block\">Delete</a>\n    </div>\n    <nav class=\"navbar navbar-default navbar-fixed-bottom navbar-blue\">\n      <div class=\"container-fluid\">\n        <p class=\"navbar-text pull-right\">\n          <a [routerLink]=\"['/user/:uid']\">\n            <span class=\"glyphicon glyphicon-user\"></span>\n          </a>\n        </p>\n\n      </div>\n    </nav>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteEditComponent = (function () {
    function WebsiteEditComponent(_websiteService, activatedRoute, router) {
        this._websiteService = _websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.website = {};
    }
    WebsiteEditComponent.prototype.deleteWebsite = function (websiteId) {
        var _this = this;
        this._websiteService.deleteWebsite(websiteId)
            .subscribe(function (websites) {
            _this.websites = websites;
            _this.router.navigate(['/user/' + _this.userId + '/website']);
        });
    };
    WebsiteEditComponent.prototype.updateWebsite = function () {
        var _this = this;
        this.website = {
            name: this.name,
            description: this.description,
            _id: this.websiteId,
            developerId: this.userId
        };
        this._websiteService.updateWebsite(this.websiteId, this.website)
            .subscribe(function (updatedWebsite) {
            _this.website = updatedWebsite;
        });
    };
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this._websiteService.findWebsitesByUser(_this.userId)
                .subscribe(function (websites) {
                _this.websites = websites;
                for (var i = 0; i < _this.websites.length; i++) {
                    if (websites[i]._id === _this.websiteId) {
                        _this.name = websites[i].name;
                        _this.description = websites[i].description;
                    }
                }
            });
        });
    };
    return WebsiteEditComponent;
}());
WebsiteEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], WebsiteEditComponent);

var _a, _b, _c;
//# sourceMappingURL=website-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-blue\">\n    <div class=\"container-fluid\">\n        <a [routerLink] = \"['/user/' + userId + '/website/new']\" class=\"pull-right navbar-text\">\n            <span class=\"glyphicon glyphicon-plus navbar-white\"></span>\n        </a>\n        <a [routerLink] = \"['/user/:uid']\" class=\"pull-left navbar-text\">\n            <span class=\"glyphicon glyphicon-chevron-left navbar-white\"></span>\n        </a>\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\">\n                Websites\n            </a>\n        </div>\n    </div>\n</nav>\n\n<div class=\"container-fluid\" style=\"height: 100%;\">\n    <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n            <div  *ngFor=\"let website of websites\" class=\"row\">\n                <div class=\"col-xs-6\"><a [routerLink]=\"['/user/'+userId+'/website/'+ website._id +'/page']\">{{website.name}}</a></div>\n                <div class=\"col-xs-6\">\n                    <a [routerLink]=\"['/user/'+userId +'/website/'+website._id]\" class=\"pull-right\">\n                        <span class=\"glyphicon glyphicon-cog\"></span>\n                    </a>\n                </div>\n            </div>\n        </li>\n    </ul>\n</div>\n<nav class=\"navbar navbar-default navbar-fixed-bottom navbar-blue\">\n    <div class=\"container-fluid\">\n        <p class=\"navbar-text pull-right\">\n            <a [routerLink] = \"['/user/:uid']\">\n                <span class=\"glyphicon glyphicon-user navbar-white\"></span>\n            </a>\n        </p>\n\n    </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteListComponent = (function () {
    function WebsiteListComponent(_websiteService, activatedRoute) {
        this._websiteService = _websiteService;
        this.activatedRoute = activatedRoute;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this._websiteService.findWebsitesByUser(this.userId)
            .subscribe(function (websites) {
            _this.websites = websites;
        });
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], WebsiteListComponent);

var _a, _b;
//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"height: 100%;\">\n  <div class=\"row\" style=\"position: relative;height: 100%;\">\n    <div class=\"col-xs-3 hidden-xs\"\n         style=\"width: 25%;overflow: scroll;bottom: 166px;top: 0px;\">\n      <nav class=\"navbar navbar-default navbar-blue\">\n        <div class=\"container-fluid\">\n          <a [routerLink]=\"['/user/'+userId +'/website']\" class=\"pull-right navbar-text\">\n            <span class=\"glyphicon glyphicon-plus navbar-white\"></span>\n          </a>\n          <a [routerLink]=\"['/user/:uid/website']\" class=\"pull-left navbar-text\">\n            <span class=\"glyphicon glyphicon-chevron-left navbar-white\" style=\"padding-right: 20px;\"></span>\n          </a>\n          <div class=\"navbar-header\">\n            <a class=\"navbar-brand navbar-blue\">\n              Websites\n            </a>\n          </div>\n        </div>\n      </nav>\n      <div class=\"container-fluid\" style=\"height: 100%;\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\">\n            <div  *ngFor=\"let website of websites\" class=\"row\">\n              <div class=\"col-xs-6\"><a [routerLink]=\"['/user/'+ userId +'/website/'+website._id +'/page']\">{{website.name}}</a></div>\n              <div class=\"col-xs-6\">\n                <a [routerLink]=\"['/user/'+ userId +'/website/'+website._id]\" class=\"pull-right\">\n                  <span class=\"glyphicon glyphicon-cog\"></span>\n                </a>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"col-sm-9 col-xs-12\"\n         style=\"position: absolute;right: 0px;\">\n      <nav class=\"navbar navbar-default navbar-blue\">\n        <div class=\"container-fluid\">\n          <a [routerLink]=\"['/user/' + userId + '/website']\" class=\"pull-right navbar-text\">\n            <span (click)=\"createWebsite(name)\" class=\"glyphicon glyphicon-ok navbar-white\"></span>\n          </a>\n          <div class=\"navbar-header navbar-blue\">\n            <a class=\"navbar-brand navbar-blue\">\n              New Websites\n            </a>\n          </div>\n        </div>\n      </nav>\n\n      <label for=\"name\">\n        Name\n      </label>\n      <input class=\"form-control\"\n             [(ngModel)]=\"name\"\n             id=\"name\"\n             placeholder=\"Facebook\"/>\n\n      <label for=\"description\">\n        Description\n      </label>\n      <textarea class=\"form-control\"\n                [(ngModel)]=\"description\"\n                id=\"description\"></textarea>\n    </div>\n  </div>\n</div>\n<nav class=\"navbar navbar-default navbar-fixed-bottom navbar-blue\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['user/'+userId]\">\n        <span class=\"glyphicon glyphicon-user navbar-white\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_website_website_model_client__ = __webpack_require__("../../../../../src/app/models/website/website.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebsiteNewComponent = (function () {
    function WebsiteNewComponent(_websiteService, activatedRoute, router) {
        this._websiteService = _websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WebsiteNewComponent.prototype.createWebsite = function (name) {
        var _this = this;
        var website = new __WEBPACK_IMPORTED_MODULE_1__models_website_website_model_client__["a" /* Website */]('', name, '');
        this._websiteService.createWebsite(this.userId, website)
            .subscribe((function (websites) {
            _this.websites = websites;
        }));
    };
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this._websiteService.findWebsitesByUser(_this.userId)
                .subscribe(function (websites) {
                _this.websites = websites;
            });
        });
    };
    return WebsiteNewComponent;
}());
WebsiteNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], WebsiteNewComponent);

var _a, _b, _c;
//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" style=\"position:relative;\">\n  <div class=\"container-fluid\">\n\n    <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\" class=\"pull-left navbar-text\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\">\n        Choose Widget\n      </a>\n    </div>\n  </div>\n</nav>\n<p class=\"p-sytle\"><a [routerLink]=\"['/user/' + uid + '/website/'+ wid +'/page/'+ pid + '/widget/new/widget-header' ]\">Header</a></p>\n<p class=\"p-sytle\"><a href=\"#\">Label</a></p>\n<p class=\"p-sytle\"><a href=\"#\">HTML</a></p>\n<p class=\"p-sytle\"><a href=\"#\">Text Input</a></p>\n<p class=\"p-sytle\"><a href=\"#\">Link</a></p>\n<p class=\"p-sytle\"><a href=\"#\">Button</a></p>\n<p class=\"p-sytle\"><a [routerLink]=\"['/user/' + uid + '/website/'+ wid +'/page/'+ pid + '/widget/new/widget-image' ]\">Image</a></p>\n<p class=\"p-sytle\"><a [routerLink]=\"['/user/' + uid + '/website/'+ wid +'/page/'+ pid + '/widget/new/widget-youtube' ]\">Youtube</a></p>\n<p class=\"p-sytle\"><a href=\"#\">Data Table</a></p>\n<p class=\"p-sytle\"><a href=\"#\">Repeater</a></p>\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user/:uid']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetChooserComponent = (function () {
    function WidgetChooserComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
        });
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetChooserComponent);

var _a, _b;
//# sourceMappingURL=widget-chooser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget.widgetType\">\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-header></app-widget-header>\n  </div>\n\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetEditComponent = (function () {
    function WidgetEditComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.widgetId = params['wgid'];
            _this.widgetService.findWidgetById(_this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetEditComponent);

var _a, _b;
//# sourceMappingURL=widget-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\"\n     style=\"position: relative;right: 0px;\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\"\n       style=\"position:relative;\">\n    <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\" class=\"pull-left navbar-text\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n    <div class=\"container-fluid\">\n      <a (click)=\"createHeader()\" [routerLink]=\"['/user/' + uid + '/website/'+ wid +'/page/'+ pid +'/widget/new']\" class=\"pull-right navbar-text\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\">\n          Widget Edit\n        </a>\n      </div>\n    </div>\n\n\n  </nav>\n  <label for=\"name\">\n    Name\n  </label>\n  <input [(ngModel)] = \"name\"\n         class=\"form-control\"\n         id=\"name\"\n         placeholder=\"Facebook\"/>\n  <label for=\"description\">\n    Text\n  </label>\n  <textarea [(ngModel)] = \"text\"\n          class=\"form-control\"\n          id=\"description\"></textarea>\n  <label for=\"size\">\n    Size\n  </label>\n  <input [(ngModel)] = \"size\"\n         class=\"form-control\"\n         id=\"size\"\n         placeholder=\"3\"/>\n  <a (click)=\"deleteHeader()\" class=\"btn btn-danger btn-block\">Delete</a>\n  <nav class=\"navbar navbar-default navbar-fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text pull-right\">\n        <a [routerLink]=\"['/user/:uid']\">\n          <span class=\"glyphicon glyphicon-user\"></span>\n        </a>\n      </p>\n\n    </div>\n\n  </nav>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetHeaderComponent = (function () {
    function WidgetHeaderComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widget = {};
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widgetService.findWidgetById(_this.wgid).subscribe(function (widget) {
                _this.widget = widget;
                _this.name = widget.widgetType;
                _this.text = widget.text;
                _this.size = widget.size;
            });
        });
    };
    WidgetHeaderComponent.prototype.createHeader = function () {
        var _this = this;
        var newHead = {
            widgetType: 'HEADING',
            pageId: this.pid,
            size: this.size,
            text: this.text
        };
        var updateHead = {
            widgetType: 'HEADING',
            pageId: this.pid,
            size: this.size,
            text: this.text,
            _id: this.wgid
        };
        if (this.wgid) {
            this.widgetService.updateWidget(this.wgid, updateHead)
                .subscribe(function (widgets) {
                _this.widgets = widgets;
            });
        }
        else {
            this.widgetService.createWidget(this.pid, newHead)
                .subscribe(function (widgets) {
                _this.widgets = widgets;
            });
        }
    };
    WidgetHeaderComponent.prototype.deleteHeader = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['/user/' + _this.uid + '/website/' + _this.wid + '/page/' + _this.pid + '/widget']);
        });
    };
    return WidgetHeaderComponent;
}());
WidgetHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], WidgetHeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\"\n     style=\"position: relative;right: 0px;\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\"\n       style=\"position:relative;\">\n    <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\" class=\"pull-left navbar-text\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n    <div class=\"container-fluid\">\n      <a (click)=\"createImage()\" [routerLink]=\"['/user/' + uid + '/website/'+ wid +'/page/'+ pid +'/widget/new']\" class=\"pull-right navbar-text\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\">\n          Widget Edit\n        </a>\n      </div>\n    </div>\n\n\n  </nav>\n\n  <label for=\"name\">Name</label>\n  <input [(ngModel)] = \"name\"\n          class=\"form-control\"\n         id=\"name\"\n         placeholder=\"Facebook\"/>\n\n  <label for=\"text\">Text</label>\n  <input [(ngModel)] = \"text\"\n          class=\"form-control\"\n         id=\"text\"/>\n\n  <label for=\"url\">URL</label>\n  <input [(ngModel)]=\"url\"\n          class=\"form-control\"\n         id=\"url\"/>\n\n  <label for=\"width\">Width</label>\n  <input [(ngModel)]=\"width\"\n          class=\"form-control\"\n         id=\"width\"/>\n\n  <label for=\"upload\">Upload</label>\n  <input class=\"form-control\"\n         type=\"file\"\n         id=\"upload\"/>\n\n  <a class=\"btn btn-primary btn-block\"\n     [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\">Upload image</a>\n  <a (click)=\"deleteImage()\" class=\"btn btn-danger btn-block\">Delete</a>\n  <nav class=\"navbar navbar-default navbar-fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text pull-right\">\n        <a [routerLink]=\"['/user/:uid']\">\n          <span class=\"glyphicon glyphicon-user\"></span>\n        </a>\n      </p>\n    </div>\n  </nav>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetImageComponent = (function () {
    function WidgetImageComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widget = {};
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widgetService.findWidgetById(_this.wgid).subscribe(function (widget) {
                _this.widget = widget;
                _this.name = widget.widgetType;
                _this.text = widget.widgetType;
                _this.width = widget.width;
                _this.url = widget.url;
            });
        });
    };
    WidgetImageComponent.prototype.createImage = function () {
        var _this = this;
        var newImage = {
            widgetType: 'IMAGE',
            pageId: this.pid,
            width: this.width,
            url: this.url
        };
        var updateImage = {
            widgetType: 'IMAGE',
            pageId: this.pid,
            width: this.width,
            url: this.url,
            _id: this.wgid
        };
        if (this.wgid) {
            this.widgetService.updateWidget(this.wgid, updateImage)
                .subscribe(function (widgets) {
                _this.widgets = widgets;
            });
        }
        else {
            this.widgetService.createWidget(this.pid, newImage)
                .subscribe(function (widgets) {
                _this.widgets = widgets;
            });
        }
    };
    WidgetImageComponent.prototype.deleteImage = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['/user/' + _this.uid + '/website/' + _this.wid + '/page/' + _this.pid + '/widget']);
        });
    };
    return WidgetImageComponent;
}());
WidgetImageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], WidgetImageComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\"\n     style=\"position: relative;right: 0px;\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\"\n       style=\"position:relative;\">\n    <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\" class=\"pull-left navbar-text\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n    <div class=\"container-fluid\">\n      <a (click)=\"createYoutube()\" [routerLink]=\"['/user/' + uid + '/website/'+ wid +'/page/'+ pid +'/widget/new']\" class=\"pull-right navbar-text\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\">\n          Widget Edit\n        </a>\n      </div>\n    </div>\n\n\n  </nav>\n\n  <label for=\"name\">Name</label>\n  <input [(ngModel)] = \"name\"\n          class=\"form-control\"\n         id=\"name\"\n         placeholder=\"Facebook\"/>\n\n  <label for=\"text\">Text</label>\n  <input [(ngModel)] = \"text\"\n          class=\"form-control\"\n         id=\"text\"/>\n\n  <label for=\"url\">URL</label>\n  <input [(ngModel)] = \"url\"\n          class=\"form-control\"\n         id=\"url\"/>\n\n  <label for=\"width\">Width</label>\n  <input [(ngModel)] = \"width\"\n          class=\"form-control\"\n         id=\"width\"/>\n\n  <a (click)=\"deleteYoutube()\" class=\"btn btn-danger btn-block\">Delete</a>\n  <nav class=\"navbar navbar-default navbar-fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text pull-right\">\n        <a [routerLink]=\"['user/:uid']\">\n          <span class=\"glyphicon glyphicon-user\"></span>\n        </a>\n      </p>\n    </div>\n  </nav>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent(widgetService, activateRoute, router) {
        this.widgetService = widgetService;
        this.activateRoute = activateRoute;
        this.router = router;
        this.widget = {};
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params
            .subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widgetService.findWidgetById(_this.wgid).subscribe(function (widget) {
                _this.widget = widget;
                _this.name = widget.widgetType;
                _this.text = widget.widgetType;
                _this.width = widget.width;
                _this.url = widget.url;
            });
        });
    };
    WidgetYoutubeComponent.prototype.createYoutube = function () {
        var _this = this;
        var newYoutube = {
            widgetType: 'YOUTUBE',
            pageId: this.pid,
            width: this.width,
            url: this.url,
        };
        var updateYoutube = {
            widgetType: 'YOUTUBE',
            pageId: this.pid,
            width: this.width,
            url: this.url,
            _id: this.wgid
        };
        if (this.wgid) {
            this.widgetService.updateWidget(this.wgid, updateYoutube)
                .subscribe(function (widgets) {
                _this.widgets = widgets;
            });
        }
        else {
            this.widgetService.createWidget(this.pid, newYoutube)
                .subscribe(function (widgets) {
                _this.widgets = widgets;
            });
        }
    };
    WidgetYoutubeComponent.prototype.deleteYoutube = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['/user/' + _this.uid + '/website/' + _this.wid + '/page/' + _this.pid + '/widget']);
        });
    };
    return WidgetYoutubeComponent;
}());
WidgetYoutubeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], WidgetYoutubeComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jga-widget\">\n  <span class=\"pull-right glyphicon glyphicon-menu-hamburger\"></span>\n  <span class=\"pull-right glyphicon glyphicon-cog\"></span>\n</div>\n<nav class=\"navbar navbar-default navbar-fixed-top\"\n     style=\"position:relative;\">\n  <a [routerLink]=\"['/user/:uid/website/:wid/page']\" class=\"pull-left navbar-text\">\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n  </a>\n  <div class=\"container-fluid\">\n    <a [routerLink]=\"['/user/' + uid + '/website/'+ wid +'/page/'+ pid +'/widget/new']\" class=\"pull-right navbar-text\">\n      <span class=\"glyphicon glyphicon-plus\"></span>\n    </a>\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\">\n        Widgets\n      </a>\n    </div>\n  </div>\n</nav>\n<div *ngFor=\"let widget of widgets\">\n  <div [ngSwitch]=\"widget.widgetType\">\n\n<div *ngSwitchCase = \"'HEADING'\" class=\"jga-widget\">\n  <span class=\"pull-right glyphicon glyphicon-menu-hamburger\"></span>\n  <a [routerLink]=\"['/user/' + uid + '/website/'+ wid +'/page/'+ pid +'/widget/'+widget._id]\">\n    <span class=\"pull-right glyphicon glyphicon-cog\"></span></a>\n  <h1>{{widget.text}}</h1>\n</div>\n\n<div *ngSwitchCase = \"'IMAGE'\" class=\"jga-widget\">\n  <span class=\"pull-right glyphicon glyphicon-menu-hamburger\"></span>\n  <a [routerLink]=\"['/user/' + uid + '/website/'+ wid +'/page/'+ pid +'/widget/'+widget._id]\">\n    <span class=\"pull-right glyphicon glyphicon-cog\"></span></a>\n  <img class=\"jga-content\" [src]=\"widget.url\"/>\n</div>\n\n<div *ngSwitchCase = \"'HTML'\" class=\"jga-widget\">\n  <span class=\"pull-right glyphicon glyphicon-menu-hamburger\"></span>\n  <span class=\"pull-right glyphicon glyphicon-cog\"></span>\n  {{widget.text}}\n</div>\n\n<div *ngSwitchCase = \"'YOUTUBE'\" class=\"jga-widget\">\n  <span class=\"pull-right glyphicon glyphicon-menu-hamburger\"></span>\n  <a [routerLink]=\"['/user/' + uid + '/website/'+ wid +'/page/'+ pid +'/widget/'+widget._id]\">\n    <span class=\"pull-right glyphicon glyphicon-cog\"></span></a>\n  <iframe width=\"560\" height=\"315\" [src]=\"santinizeUrl(widget?.url)\" frameborder=\"0\" allowfullscreen></iframe>\n</div>\n</div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink] = \"['/user/:uid']\">\n        <span class=\"glyphicon glyphicon-play\"></span>\n      </a>\n    </p>\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink] = \"['/user/:uid']\">\n        <span class=\"glyphicon glyphicon-eye-open\"></span>\n      </a>\n    </p>\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user/:uid']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetListComponent = (function () {
    function WidgetListComponent(widgetService, activatedRoute, _sanitizer) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this._sanitizer = _sanitizer;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.widgetService.findWidgetsByPageId(_this.pid)
                .subscribe(function (widgets) {
                _this.widgets = widgets;
            });
        });
    };
    WidgetListComponent.prototype.santinizeUrl = function (url) {
        return this._sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _c || Object])
], WidgetListComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/website/website.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Website; });
var Website = (function () {
    function Website(_id, name, description) {
        this._id = _id;
        this.name = name;
        this.description = description;
    }
    return Website;
}());

//# sourceMappingURL=website.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageService = (function () {
    function PageService(_http) {
        this._http = _http;
        this.pages = [
            { _id: '321', name: 'Post 1', websiteId: '456', description: 'Lorem' },
            { _id: '432', name: 'Post 2', websiteId: '456', description: 'Lorem' },
            { _id: '543', name: 'Post 3', websiteId: '456', description: 'Lorem' }
        ];
        this.api = {
            'createPage': this.createPage,
            'findPageByWebsiteId': this.findPageByWebsiteId,
            'findPageById': this.findPageById,
            'updatePage': this.updatePage,
            'deletePage': this.deletePage
        };
    }
    PageService.prototype.createPage = function (websiteId, page) {
        var url = 'http://localhost:3100/api/website/' + websiteId + '/page';
        return this._http.post(url, page)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        var url = 'http://localhost:3100/api/website/' + websiteId + '/page';
        return this._http.get(url)
            .map(function (response) {
            return response.json();
        });
        /*const pages_websiteId = []
        for (let x = 0; x < this.pages.length; x++) {
            if (this.pages[x].websiteId === websiteId) {
                pages_websiteId.push(this.pages[x]);
            }
        }
        return pages_websiteId;*/
    };
    PageService.prototype.findPageById = function (pageId) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                return this.pages[x];
            }
        }
    };
    PageService.prototype.updatePage = function (pageId, page) {
        var url = 'http://localhost:3100/api/page/' + pageId;
        return this._http.put(url, page)
            .map(function (response) {
            return response.json;
        });
        /*for (let x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                this.pages[x] = page;
            }
        }*/
    };
    PageService.prototype.deletePage = function (pageId) {
        var url = 'http://localhost:3100/api/page/' + pageId;
        return this._http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return PageService;
}());
PageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PageService);

var _a;
//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/todo.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_list_todo_mock__ = __webpack_require__("../../../../../src/app/todo-list/todo-mock.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
        this.todos = __WEBPACK_IMPORTED_MODULE_1__todo_list_todo_mock__["a" /* TODOS */];
    }
    // findAllTodos(): Todo[] {
    TodoService.prototype.findAllTodos = function () {
        console.log('findAllTodos');
        return this.http.get('http://localhost:3100/api/todo')
            .map(function (res) {
            var data = res.json();
            return data;
        });
        // return this.todos;
    };
    TodoService.prototype.createTodo = function (todo) {
        var todoCopy = __assign({}, todo);
        this.todos.push(todoCopy);
        return this.http.post('http://localhost:3100/api/todo', todo)
            .map(function (res) {
            return res.json();
        });
    };
    TodoService.prototype.deleteTodo = function (index) {
        this.todos.splice(index, 1);
    };
    return TodoService;
}());
TodoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TodoService);

var _a;
//# sourceMappingURL=todo.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
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
    function UserService(_http) {
        this._http = _http;
        this.users = [
            { _id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder' },
            { _id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley' },
            { _id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia' }
        ];
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser
        };
    }
    UserService.prototype.createUser = function (user) {
        /* user._id = '456';
         this.users.push(user);
         return user;*/
        var url = 'http://localhost:3100/api/user/';
        return this._http.post(url, user).map(function (response) { return response.json(); });
    };
    UserService.prototype.findUserById = function (userId) {
        var url = 'http://localhost:3100/api/user/' + userId;
        return this._http.get(url).map(function (response) { return response.json(); });
    };
    UserService.prototype.findUserByUsername = function (username) {
        var url = 'http://localhost:3100/api/user?username=' + username;
        return this._http.get(url)
            .map(function (response) { return response.json(); });
        /*for (let x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username) {
                return this.users[x];
            }
        }*/
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        // for (let x = 0; x < this.users.length; x++) {
        // if (this.users[x].username === username && this.users[x].password === password){
        //        return this.users[x];
        //    }
        // this._http.get('some_url' + ).
        var url = 'http://localhost:3100/api/user?username=' + username + '&password=' + password;
        return this._http.get(url)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.updateUser = function (userId, user) {
        /*for (let x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                this.users[x] = user;
            }
        }*/
        var url = 'http://localhost:3100/api/user/' + userId;
        return this._http.put(url, user)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.deleteUser = function (userId) {
        /*for (let x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                delete this.users[x];
            }
        }*/
        var url = 'http://localhost:3100/api/' + userId;
        return this._http.delete(url)
            .map(function (response) { return response.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebsiteService = (function () {
    function WebsiteService(_http) {
        this._http = _http;
        this.websites = [
            { _id: '123', name: 'Facebook', developerId: '456', description: 'Lorem' },
            { _id: '234', name: 'Tweeter', developerId: '456', description: 'Lorem' },
            { _id: '456', name: 'Gizmodo', developerId: '456', description: 'Lorem' },
            { _id: '890', name: 'Go', developerId: '123', description: 'Lorem' },
            { _id: '567', name: 'Tic Tac Toe', developerId: '123', description: 'Lorem' },
            { _id: '678', name: 'Checkers', developerId: '123', description: 'Lorem' },
            { _id: '789', name: 'Chess', developerId: '234', description: 'Lorem' }
        ];
        this.api = {
            'createWebsite': this.createWebsite,
            'findWebsitesByUser': this.findWebsitesByUser,
            'findWebsiteById': this.findWebsitesById,
            'updateWebsite': this.updateWebsite,
            'deleteWebsite': this.deleteWebsite
        };
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var url = 'http://localhost:3100/api/user/' + userId + '/website';
        return this._http.post(url, website)
            .map(function (response) {
            return response.json();
        });
        /*website.developerId = userId;
        this.websites.push(website);
        return website;*/
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var url = 'http://localhost:3100/api/user/' + userId + '/website';
        return this._http.get(url)
            .map(function (response) {
            return response.json();
        });
        /*     const websites_userId = [];
             for (let x = 0; x < this.websites.length; x++) {
                 if (this.websites[x].developerId === userId) {
                     websites_userId.push(this.websites[x]);
                 }
             }
             return websites_userId;*/
    };
    WebsiteService.prototype.findWebsitesById = function (websiteId) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                return this.websites[x];
            }
        }
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        /*for (let x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                this.websites[x] = website;
            }
        }*/
        var url = 'http://localhost:3100/api/website/' + websiteId;
        return this._http.put(url, website)
            .map(function (response) {
            return response.json;
        });
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        var url = 'http://localhost:3100/api/website/' + websiteId;
        return this._http.delete(url)
            .map(function (response) {
            return response.json();
        });
        /*for (let x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                delete this.websites[x];
            }
        }*/
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], WebsiteService);

var _a;
//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetService = (function () {
    function WidgetService(_http) {
        this._http = _http;
        this.widgets = [
            { _id: '123', widgetType: 'HEADING', pageId: '321', size: 2, text: 'GIZMODO' },
            { _id: '234', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum' },
            { _id: '345', widgetType: 'IMAGE', pageId: '321', width: '100%',
                url: 'http://lorempixel.com/400/200/' },
            { _id: '456', widgetType: 'HTML', pageId: '321', text: 'Lorem ipsum' },
            { _id: '567', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum' },
            { _id: '678', widgetType: 'YOUTUBE', pageId: '321', width: '100%',
                url: 'https://www.youtube.com/embed/7t2Lu4t6n4E' },
            { _id: '789', widgetType: 'HTML', pageId: '321', text: 'Lorem ipsum' }
        ];
        this.api = {
            'createWidget': this.createWidget,
            'findWebsitesByUser': this.findWidgetsByPageId,
            'findWebsiteById': this.findWidgetById,
            'updateWebsite': this.updateWidget,
            'deleteWebsite': this.deleteWidget
        };
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        var url = 'http://localhost:3100/api/page/' + pageId + '/widget';
        return this._http.post(url, widget).map(function (response) { return response.json(); });
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var url = 'http://localhost:3100/api/page/' + pageId + '/widget';
        return this._http.get(url).map(function (response) { return response.json(); });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        var url = 'http://localhost:3100/api/widget/' + widgetId;
        return this._http.get(url).map(function (response) { return response.json(); });
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        var url = 'http://localhost:3100/api/widget/' + widgetId;
        return this._http.put(url, widget)
            .map(function (response) { return response.json(); });
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var url = 'http://localhost:3100/api/widget/' + widgetId;
        return this._http.delete(url)
            .map(function (response) { return response.json(); });
    };
    return WidgetService;
}());
WidgetService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], WidgetService);

var _a;
//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Edit Todo</h2>\n<label for=\"title\">Title</label>\n<input [(ngModel)]=\"todo.title\"\n       class=\"form-control\"\n       id=\"title\">\n<br/>\n<label for=\"description\">\n  Description</label>\n<textarea [(ngModel)]=\"todo.description\"\n          class=\"form-control\"\n          id=\"description\"></textarea>\n"

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo2__ = __webpack_require__("../../../../../src/app/todo-list/todo2.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoEditComponent = (function () {
    function TodoEditComponent() {
    }
    return TodoEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__todo2__["a" /* Todo */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__todo2__["a" /* Todo */]) === "function" && _a || Object)
], TodoEditComponent.prototype, "todo", void 0);
TodoEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-todo-edit',
        template: __webpack_require__("../../../../../src/app/todo-list/todo-edit.component.html")
    })
], TodoEditComponent);

var _a;
//# sourceMappingURL=todo-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <div class=\"row\">\n    <div class=\"col-xs-5\">\n      <h1>Todo List</h1>\n      <div class=\"input-group\">\n        <input placeholder=\"Todo Title\"\n               [(ngModel)]=\"newTodo.title\"\n               class=\"form-control\">\n        <span class=\"input-group-btn\">\n    <button (click)=\"onAddTodo(newTodo)\"\n            class=\"btn btn-default\">\n       Add\n    </button>\n  </span>\n      </div>\n\n      <ul class=\"list-group\">\n        <li *ngFor=\"let todo of todos; let i = index\"\n            [class.selected]=\"todo === selectedTodo\"\n            class=\"list-group-item\">\n          {{todo.title}}\n          <a class=\"pull-right\"\n             (click)=\"onSelectTodo(todo)\">\n        <span class=\"glyphicon glyphicon-cog\">\n        </span>\n          </a>\n          <a class=\"pull-right\"\n             (click)=\"onDeleteTodo(i)\">\n        <span class=\"glyphicon\n           glyphicon-remove\"></span>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-xs-7\">\n      <app-todo-edit [todo]=\"selectedTodo\"\n                     *ngIf=\"selectedTodo\">\n      </app-todo-edit>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo2__ = __webpack_require__("../../../../../src/app/todo-list/todo2.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_todo_service_client__ = __webpack_require__("../../../../../src/app/services/todo.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoListComponent = (function () {
    function TodoListComponent(todoService) {
        this.todoService = todoService;
        this.todos = [];
        this.newTodo = new __WEBPACK_IMPORTED_MODULE_1__todo2__["a" /* Todo */]();
    }
    TodoListComponent.prototype.onSelectTodo = function (todo) {
        this.selectedTodo = todo;
    };
    TodoListComponent.prototype.onAddTodo = function (todo) {
        var _this = this;
        this.todoService.createTodo(todo)
            .subscribe(function (todos) {
            _this.todos = todos;
        });
    };
    TodoListComponent.prototype.onDeleteTodo = function (index) {
        this.todoService.deleteTodo(index);
    };
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.todos = this.todoService.findAllTodos();
        this.todoService.findAllTodos()
            .subscribe(function (todos) {
            _this.todos = todos;
        });
    };
    return TodoListComponent;
}());
TodoListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-todo-list',
        styles: [
            ".selected {\n     background-color: lightblue;\n   }"
        ],
        template: __webpack_require__("../../../../../src/app/todo-list/todo-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_todo_service_client__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_todo_service_client__["a" /* TodoService */]) === "function" && _a || Object])
], TodoListComponent);

var _a;
//# sourceMappingURL=todo-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TODOS; });
var TODOS = [
    { title: 'Pickup milk', description: 'Skim milk' },
    { title: 'Pickup kids', description: 'From school' },
    { title: 'Finish homework', description: 'Math' }
];
//# sourceMappingURL=todo-mock.js.map

/***/ }),

/***/ "../../../../../src/app/todo-list/todo2.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var Todo = (function () {
    function Todo() {
    }
    return Todo;
}());

//# sourceMappingURL=todo2.js.map

/***/ }),

/***/ "../../../../../src/app/todo/todo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<input [(ngModel)]=\"title\"/>\n<br/>\n<textarea [(ngModel)]=\"description\"></textarea>\n<br/>\n<button (click)=\"addTodo()\">Add</button>\n\n<ul>\n  <li *ngFor=\"let todo of todos\">\n    {{todo.title}}\n    <span (click)=\"deleteTodo(todo)\">X</span>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo__ = __webpack_require__("../../../../../src/app/todo/todo.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoComponent = (function () {
    function TodoComponent() {
        this.todos = [];
        this.addTodo = function () {
            var todo = new __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* Todo */](this.title, this.description);
            this.todos.push(todo);
        };
        this.deleteTodo = function (todo) {
            var index = this.todos.indexOf(todo);
            this.todos.splice(index, 1);
        };
    }
    TodoComponent.prototype.ngOnInit = function () {
    };
    return TodoComponent;
}());
TodoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-todo',
        template: __webpack_require__("../../../../../src/app/todo/todo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo/todo.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TodoComponent);

//# sourceMappingURL=todo.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo/todo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var Todo = (function () {
    function Todo(title, description) {
        this.title = title;
        this.description = description;
    }
    return Todo;
}());

//# sourceMappingURL=todo.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3100'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map