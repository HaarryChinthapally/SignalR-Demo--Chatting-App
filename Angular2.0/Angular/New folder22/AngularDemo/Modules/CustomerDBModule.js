"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CustomerDBHome_1 = require("../Components/CustomerDBHome");
var http_1 = require("@angular/http");
var CustomerDBComponent_1 = require("../Components/CustomerDBComponent");
var CustomerDbService_1 = require("../Service/CustomerDbService");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var forms_2 = require("@angular/forms");
var common_1 = require("@angular/common");
var CustomerDBRouting_1 = require("../Routing/CustomerDBRouting");
var CustomerDBModule = (function () {
    function CustomerDBModule() {
    }
    return CustomerDBModule;
}());
CustomerDBModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(CustomerDBRouting_1.CustomerDBRoutes),
            forms_1.FormsModule,
            common_1.CommonModule,
            forms_2.ReactiveFormsModule,
            http_1.HttpModule
        ],
        declarations: [CustomerDBHome_1.ComponentDBHome, CustomerDBComponent_1.CustomerDBComponent],
        providers: [
            CustomerDbService_1.CustomerDBService
        ],
        bootstrap: [CustomerDBHome_1.ComponentDBHome, CustomerDBComponent_1.CustomerDBComponent]
    })
], CustomerDBModule);
exports.CustomerDBModule = CustomerDBModule;
//# sourceMappingURL=CustomerDBModule.js.map