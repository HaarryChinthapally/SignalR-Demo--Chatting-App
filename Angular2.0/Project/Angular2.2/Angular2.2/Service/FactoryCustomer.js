"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("../Model/Customer");
var Customer_2 = require("../Model/Customer");
var core_1 = require("@angular/core");
var FactoryCustomer = (function () {
    function FactoryCustomer() {
    }
    FactoryCustomer.prototype.Create = function (TypeOfCustomer) {
        if (TypeOfCustomer == "Customer") {
            return new Customer_1.Customer();
        }
        else {
            return new Customer_2.Lead();
        }
    };
    return FactoryCustomer;
}());
FactoryCustomer = __decorate([
    core_1.Injectable()
], FactoryCustomer);
exports.FactoryCustomer = FactoryCustomer;
//# sourceMappingURL=FactoryCustomer.js.map