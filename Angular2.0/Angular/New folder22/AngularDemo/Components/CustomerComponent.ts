import { Component } from "@angular/core"
import { Customer } from "../Model/Customer"
import { FactoryCustomer } from "../Service/FactoryCustomer"
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Component({
    providers: [FactoryCustomer],
    templateUrl: "../UI/Customer.html"
})
export class CustomerComponent {
    // binding logic
    currentCustomer: Customer = null;
    private http: Http = null;
    private CustomerType: string = "Customer";

    onCustomerTypeChange(_TypeofCustomer) {
        this.CustomerType = _TypeofCustomer;
        this.currentCustomer = this.factorycustomer.Create(this.CustomerType);

    }
    factorycustomer: FactoryCustomer = null;
    constructor(_factorycustomer: FactoryCustomer,
        _http: Http) {
        this.http = _http;
        this.factorycustomer = _factorycustomer;
        this.currentCustomer = this.factorycustomer.Create(this.CustomerType);

    }
    loadData(): Promise<ICustomer[]> {
        debugger;
        return this.http.get('/Home/getAll')
            .toPromise()
            .then(response => this.extractArray(response))
            .catch(this.handleErrorPromise);
    }  
    Submit() {
        // Post to http://localhost:48720/API/Customer
        var custs = [];
        debugger;
        // just taken the necessary customer data 
        // this custs collection we will send to the server
        for (let entry of this.customers) {
            var cust: any = {};
            cust.CustomerCode = entry.CustomerCode;
            cust.CustomerName = entry.CustomerName;
            cust.CustomerAmount = entry.CustomerAmount;
            custs.push(cust);
        }
        // converting the customers collection 
        // JSON string
        let data = JSON.stringify(custs);
        // Prepared by headers
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        let options = new RequestOptions({ headers: headers });
        // Final thing is to make HTTPOST
        // with async data streams
        var observable = this.http.get("http://localhost:54412/Home/getAll");
        // filter , copy , subscribe
        observable.subscribe(res => this.Success(res),
            res => this.Error(res));

    }
    Error(err) {
        console.log(err);
    }
    Success(res) {
        this.customers = res.json();
    }

    // customer collection
    customers: Array<Customer> = new Array<Customer>();
    Select(custselected: Customer) {
        this.currentCustomer = this.factorycustomer.Create(this.CustomerType);
        this.currentCustomer.CustomerAmount = custselected.CustomerAmount;
        this.currentCustomer.CustomerCode = custselected.CustomerCode;
        this.currentCustomer.CustomerName = custselected.CustomerName;
        this.currentCustomer.CustomerType = custselected.CustomerType;
        this.CustomerType = custselected.CustomerType;
    }
    Clear() {
        this.currentCustomer = new Customer();
    }
    Update() {
        for (let cust of this.customers) {
            if (cust.CustomerCode == this.currentCustomer.CustomerCode) {
                cust.CustomerName = this.currentCustomer.CustomerName;
                cust.CustomerAmount = this.currentCustomer.CustomerAmount;
            }
        }
        this.currentCustomer = new Customer();
    }
    Add() {
        this.customers.push(this.currentCustomer);
        // new fresh reference
        this.customers = this.customers.slice();
        this.currentCustomer = new Customer();
    }

    protected extractArray(res: Response, showprogress: boolean = true) {
        let data = res.json();

        return data || [];
    }

    protected handleErrorPromise(error: any): Promise<void> {
        try {
            error = JSON.parse(error._body);
        } catch (e) {
        }

        let errMsg = error.errorMessage
            ? error.errorMessage
            : error.message
                ? error.message
                : error._body
                    ? error._body
                    : error.status
                        ? `${error.status} - ${error.statusText}`
                        : 'unknown server error';

        console.error(errMsg);
        return Promise.reject(errMsg);
    }
}
export interface ICustomer {
    id: number,
    name: string,
    description: string
}
