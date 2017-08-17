/// <reference path="../service/customerdbservice.ts" />
import { Component, OnInit } from '@angular/core';
import { CustomerDB } from '../model/customerdb';
import { CustomerDBService, ICustomerDB } from '../service/customerdbservice';
import { ComponentDBHome } from '../Components/CustomerDBHome';

@Component({
    providers: [CustomerDBService],
    selector: 'customerDb-Add',
    templateUrl: '../UI/CustomerDBAdd.html'
})

export class CustomerDBComponent {
    constructor(private _service: CustomerDBService, private _refresh: ComponentDBHome) { }
    model = new CustomerDB();
    submitted = false;
    onSubmit() {
        console.log("Sumbitted Form ! ");
        this.submitted = true;
        this._service.Add(this.model).then(data => {
            this._service.announceChange(1212);
            this._refresh.Refresh();
            this.model = new CustomerDB();
        })
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}