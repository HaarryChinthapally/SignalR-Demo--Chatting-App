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
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/toPromise");
var CustomerDBService = (function () {
    function CustomerDBService(_http) {
        this._http = _http;
        this.RegenerateData = new Rx_1.Subject();
        // Observable string streams
        this.RegenerateData$ = this.RegenerateData.asObservable();
    }
    CustomerDBService.prototype.announceChange = function (mission) {
        this.RegenerateData.next(mission);
    };
    CustomerDBService.prototype.loadData = function () {
        var _this = this;
        debugger;
        return this._http.get('http://localhost:54412/Home/getAll')
            .toPromise()
            .then(function (response) { return _this.extractArray(response); })
            .catch(this.handleErrorPromise);
    };
    CustomerDBService.prototype.Add = function (model) {
        debugger;
        //let Cust = JSON.stringify(model);
        //let headers = new Headers({ 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/x-www-form-urlencoded' });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(model);
        // var params = new URLSearchParams();
        //params.set('firstName', 'Ali');
        // delete model["id"];
        //let requestoptions: RequestOptions = new RequestOptions({
        //    method: RequestMethod.Post,
        //    url: 'http://localhost:54412/Home/AddEmployee/',
        //    headers: headers,
        //    body: Cust
        //})  new Request(requestoptions)
        return this._http.post('/Home/AddEmployee/', body, options)
            .toPromise()
            .catch(this.handleErrorPromise);
    };
    CustomerDBService.prototype.Update = function (model) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(model);
        return this._http.put('/Home/UpdateCustomer/', body, options)
            .toPromise()
            .catch(this.handleErrorPromise);
    };
    CustomerDBService.prototype.Delete = function (id) {
        return this._http.delete('/Home/DeleteEmployee/?id=' + id).toPromise().catch(this.handleErrorPromise);
    };
    CustomerDBService.prototype.extractArray = function (res, showprogress) {
        if (showprogress === void 0) { showprogress = true; }
        debugger;
        var data = res.json();
        return data || [];
    };
    CustomerDBService.prototype.handleErrorPromise = function (error) {
        try {
            error = JSON.parse(error._body);
        }
        catch (e) {
        }
        var errMsg = error.errorMessage
            ? error.errorMessage
            : error.message
                ? error.message
                : error._body
                    ? error._body
                    : error.status
                        ? error.status + " - " + error.statusText
                        : 'unknown server error';
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    return CustomerDBService;
}());
CustomerDBService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CustomerDBService);
exports.CustomerDBService = CustomerDBService;
var ICustomerDB = (function () {
    function ICustomerDB() {
    }
    return ICustomerDB;
}());
exports.ICustomerDB = ICustomerDB;
//# sourceMappingURL=CustomerDbService.js.map