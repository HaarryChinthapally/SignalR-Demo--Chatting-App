"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CustomerComponent_1 = require("../Components/CustomerComponent");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var GridComponent_1 = require("../Components/GridComponent");
var router_1 = require("@angular/router");
var CustomerRouting_1 = require("../Routing/CustomerRouting");
var forms_2 = require("@angular/forms");
var common_1 = require("@angular/common");
var CustomerModule = (function () {
    function CustomerModule() {
    }
    return CustomerModule;
}());
CustomerModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(CustomerRouting_1.CustomerRoutes),
            http_1.HttpModule,
            common_1.CommonModule,
            forms_2.ReactiveFormsModule,
            forms_1.FormsModule
        ],
        declarations: [CustomerComponent_1.CustomerComponent,
            GridComponent_1.GridComponent],
        bootstrap: [CustomerComponent_1.CustomerComponent]
    })
], CustomerModule);
exports.CustomerModule = CustomerModule;
//# sourceMappingURL=CustomerModule.js.map