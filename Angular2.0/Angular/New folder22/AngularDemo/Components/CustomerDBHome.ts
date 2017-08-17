import { Component, OnInit } from '@angular/core';
import { CustomerDBComponent } from '../Components/CustomerDBComponent';
import { CustomerDBService, ICustomerDB } from '../Service/CustomerDbService';
import { Subscription } from 'rxjs/Subscription';
@Component({
    providers: [CustomerDBService],
    templateUrl: "../UI/CustomerDB.html"
})
export class ComponentDBHome extends OnInit {
    subscription: Subscription;
    _customers: ICustomerDB[] = [];
    Refresh() {
        this._service.loadData().then(data =>
        {
            debugger;
            this._customers = data;
        })
    }
    constructor(private _service: CustomerDBService) {
        super();
        this.subscription = _service.RegenerateData$.subscribe(
            mission => {
                console.log("Good !! ", mission);
                this.Refresh();
            });
    }

    ngOnInit() {
        this.Refresh();
    }
    onUpdate(elem) {
        console.log(elem);
        this._service.Update(elem).then(data => {
            this.Refresh();
        })
    }
    onDelete(elem: number) {
        console.log("Delete Form ! ");
        console.log(elem);
        this._service.Delete(elem).then(data => {
            this.Refresh();
        })
    }
   

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }
}
