import {
    NgForm,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms'
export class Customer {
    CustomerType: string = "Customer";
    CustomerName: string = "";
    CustomerCode: string = "";
    CustomerAmount: number = 0;
    CustomerGroupValidator: FormGroup = null;
    constructor() {
        // C1001 , C9001 , C6789
        var _builder = new FormBuilder();
        this.CustomerGroupValidator = _builder.group({
            'CustomerName': ['', Validators.required],
            'CustomerCode': ['', Validators.compose([Validators.required,
            Validators.pattern("^[A-Z]{1,1}[0-9]{4,4}$")])],
            'CustomerAmount': ['', Validators.required]
        });
    }
    IsDirty(controlname): boolean {
        if (controlname == undefined) {
            return this.CustomerGroupValidator.dirty;
        }
        else {
            return (this.CustomerGroupValidator.
                controls[controlname].dirty);
        }

    }
    IsValid(controlname, typeofvalidation): boolean {
        if (controlname == undefined) {
            return this.CustomerGroupValidator.valid;
        }
        else {
            return (!this.CustomerGroupValidator.
                controls[controlname].hasError(typeofvalidation));
        }

    }
}
export class Lead extends Customer {
    CustomerType: string = "Lead";
    IsValid(): boolean {
        if (this.CustomerName.length == 0) {
            return false;
        }
        if (this.CustomerCode.length == 0) {
            return false;
        }

        return true;

    }
}