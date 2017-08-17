import { Customer } from "../Model/Customer"
import { Lead } from "../Model/Customer"
import { Injectable } from '@angular/core';

@Injectable()
export class FactoryCustomer {
    public Create(TypeOfCustomer): Customer {
        if (TypeOfCustomer == "Customer") {
            return new Customer();
        }
        else {
            return new Lead();
        }
    }
}