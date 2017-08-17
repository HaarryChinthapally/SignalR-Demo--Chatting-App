"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var MasterPageComponent_1 = require("../Components/MasterPageComponent");
var WelcomeComponent_1 = require("../Components/WelcomeComponent");
var router_1 = require("@angular/router");
var MainRouting_1 = require("../Routing/MainRouting");
var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
MainModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(MainRouting_1.MainRoutes),
            platform_browser_1.BrowserModule
        ],
        declarations: [MasterPageComponent_1.MasterPageComponent, WelcomeComponent_1.WelcomeComponent],
        bootstrap: [MasterPageComponent_1.MasterPageComponent]
    })
], MainModule);
exports.MainModule = MainModule;
//# sourceMappingURL=MainModule.js.map