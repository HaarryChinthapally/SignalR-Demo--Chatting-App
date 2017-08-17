"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Customer_1 = require("../Model/Customer");
var FactoryCustomer_1 = require("../Service/FactoryCustomer");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var CustomerComponent = (function () {
    function CustomerComponent(_factorycustomer, _http) {
        // binding logic
        this.currentCustomer = null;
        this.http = null;
        this.CustomerType = "Customer";
        this.factorycustomer = null;
        // customer collection
        this.customers = new Array();
        this.http = _http;
        this.factorycustomer = _factorycustomer;
        this.currentCustomer = this.factorycustomer.Create(this.CustomerType);
    }
    CustomerComponent.prototype.onCustomerTypeChange = function (_TypeofCustomer) {
        this.CustomerType = _TypeofCustomer;
        this.currentCustomer = this.factorycustomer.Create(this.CustomerType);
    };
    CustomerComponent.prototype.Submit = function () {
        var _this = this;
        // Post to http://localhost:48720/API/Customer
        var custs = [];
        // just taken the necessary customer data 
        // this custs collection we will send to the server
        for (var _i = 0, _a = this.customers; _i < _a.length; _i++) {
            var entry = _a[_i];
            var cust = {};
            cust.CustomerCode = entry.CustomerCode;
            cust.CustomerName = entry.CustomerName;
            cust.CustomerAmount = entry.CustomerAmount;
            custs.push(cust);
        }
        // converting the customers collection 
        // JSON string
        var data = JSON.stringify(custs);
        // Prepared by headers
        var headers = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        // Final thing is to make HTTPOST
        // with async data streams
        var observable = this.http.
            post("http://localhost:57403/API/Customer", data, options);
        // filter , copy , subscribe
        observable.subscribe(function (res) { return _this.Success(res); }, function (res) { return _this.Error(res); });
    };
    CustomerComponent.prototype.Error = function (err) {
        console.log(err);
    };
    CustomerComponent.prototype.Success = function (res) {
        this.customers = res.json();
    };
    CustomerComponent.prototype.Select = function (custselected) {
        this.currentCustomer = this.factorycustomer.Create(this.CustomerType);
        this.currentCustomer.CustomerAmount = custselected.CustomerAmount;
        this.currentCustomer.CustomerCode = custselected.CustomerCode;
        this.currentCustomer.CustomerName = custselected.CustomerName;
        this.currentCustomer.CustomerType = custselected.CustomerType;
        this.CustomerType = custselected.CustomerType;
    };
    CustomerComponent.prototype.Clear = function () {
        this.currentCustomer = new Customer_1.Customer();
    };
    CustomerComponent.prototype.Update = function () {
        for (var _i = 0, _a = this.customers; _i < _a.length; _i++) {
            var cust = _a[_i];
            if (cust.CustomerCode == this.currentCustomer.CustomerCode) {
                cust.CustomerName = this.currentCustomer.CustomerName;
                cust.CustomerAmount = this.currentCustomer.CustomerAmount;
            }
        }
        this.currentCustomer = new Customer_1.Customer();
    };
    CustomerComponent.prototype.Add = function () {
        this.customers.push(this.currentCustomer);
        // new fresh reference
        this.customers = this.customers.slice();
        this.currentCustomer = new Customer_1.Customer();
    };
    return CustomerComponent;
}());
CustomerComponent = __decorate([
    core_1.Component({
        providers: [FactoryCustomer_1.FactoryCustomer],
        templateUrl: "../UI/Customer.html"
    }),
    __metadata("design:paramtypes", [FactoryCustomer_1.FactoryCustomer,
        http_1.Http])
], CustomerComponent);
exports.CustomerComponent = CustomerComponent;
//# sourceMappingURL=CustomerComponent.js.map