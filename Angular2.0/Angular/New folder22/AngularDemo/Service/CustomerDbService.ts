import { Injectable } from '@angular/core';
import { Http,RequestMethod,Request, Response, RequestOptions, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CustomerDBService {
    constructor(private _http: Http) { }
    private RegenerateData = new Subject<number>();
    // Observable string streams
    RegenerateData$ = this.RegenerateData.asObservable();

    announceChange(mission: number) {

        this.RegenerateData.next(mission);
    }
    loadData(): Promise<ICustomerDB[]>
    {
        debugger;
        return this._http.get('http://localhost:54412/Home/getAll')
            .toPromise()
            .then(response => this.extractArray(response))
            .catch(this.handleErrorPromise);
    }
    Add(model)
    {
        debugger;
        //let Cust = JSON.stringify(model);
        //let headers = new Headers({ 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/x-www-form-urlencoded' });
        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(model);
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
    }
    Update(model) {
        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(model);
        return this._http.put('/Home/UpdateCustomer/', body, options)
            .toPromise()
            .catch(this.handleErrorPromise);
    }
    Delete(id: number) {
        return this._http.delete('/Home/DeleteEmployee/?id=' + id).toPromise().catch(this.handleErrorPromise);
    }

    protected extractArray(res: Response, showprogress: boolean = true)
    {
        debugger;
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
export class ICustomerDB {
    id: number;
    Name: string;
    Address1: string;
    Address2: string;
    City: string;
    State: string;
    Zipcode: number;
    Country: string;
}

