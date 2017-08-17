"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var Customer = (function () {
    function Customer() {
        this.CustomerType = "Customer";
        this.CustomerName = "";
        this.CustomerCode = "";
        this.CustomerAmount = 0;
        this.CustomerGroupValidator = null;
        // C1001 , C9001 , C6789
        var _builder = new forms_1.FormBuilder();
        this.CustomerGroupValidator = _builder.group({
            'CustomerName': ['', forms_1.Validators.required],
            'CustomerCode': ['', forms_1.Validators.compose([forms_1.Validators.required,
                    forms_1.Validators.pattern("^[A-Z]{1,1}[0-9]{4,4}$")])],
            'CustomerAmount': ['', forms_1.Validators.required]
        });
    }
    Customer.prototype.IsDirty = function (controlname) {
        if (controlname == undefined) {
            return this.CustomerGroupValidator.dirty;
        }
        else {
            return (this.CustomerGroupValidator.
                controls[controlname].dirty);
        }
    };
    Customer.prototype.IsValid = function (controlname, typeofvalidation) {
        if (controlname == undefined) {
            return this.CustomerGroupValidator.valid;
        }
        else {
            return (!this.CustomerGroupValidator.
                controls[controlname].hasError(typeofvalidation));
        }
    };
    return Customer;
}());
exports.Customer = Customer;
var Lead = (function (_super) {
    __extends(Lead, _super);
    function Lead() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CustomerType = "Lead";
        return _this;
    }
    Lead.prototype.IsValid = function () {
        if (this.CustomerName.length == 0) {
            return false;
        }
        if (this.CustomerCode.length == 0) {
            return false;
        }
        return true;
    };
    return Lead;
}(Customer));
exports.Lead = Lead;
//# sourceMappingURL=Customer.js.map