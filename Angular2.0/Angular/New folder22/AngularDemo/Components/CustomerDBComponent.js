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
/// <reference path="../service/customerdbservice.ts" />
var core_1 = require("@angular/core");
var customerdb_1 = require("../model/customerdb");
var customerdbservice_1 = require("../service/customerdbservice");
var CustomerDBHome_1 = require("../Components/CustomerDBHome");
var CustomerDBComponent = (function () {
    function CustomerDBComponent(_service, _refresh) {
        this._service = _service;
        this._refresh = _refresh;
        this.model = new customerdb_1.CustomerDB();
        this.submitted = false;
    }
    CustomerDBComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("Sumbitted Form ! ");
        this.submitted = true;
        this._service.Add(this.model).then(function (data) {
            _this._service.announceChange(1212);
            _this._refresh.Refresh();
            _this.model = new customerdb_1.CustomerDB();
        });
    };
    Object.defineProperty(CustomerDBComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    return CustomerDBComponent;
}());
CustomerDBComponent = __decorate([
    core_1.Component({
        providers: [customerdbservice_1.CustomerDBService],
        selector: 'customerDb-Add',
        templateUrl: '../UI/CustomerDBAdd.html'
    }),
    __metadata("design:paramtypes", [customerdbservice_1.CustomerDBService, CustomerDBHome_1.ComponentDBHome])
], CustomerDBComponent);
exports.CustomerDBComponent = CustomerDBComponent;
//# sourceMappingURL=CustomerDBComponent.js.map