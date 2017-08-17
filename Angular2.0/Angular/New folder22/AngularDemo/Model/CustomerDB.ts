import {
    NgForm,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms'
export class CustomerDB {
    id: number = 0;
    Name: string = "" ;
    Address1: string = "";
    Address2: string = "";
    City: string = "";
    State: string = "";
    Zipcode: string = "";
    Country: string = "";
}