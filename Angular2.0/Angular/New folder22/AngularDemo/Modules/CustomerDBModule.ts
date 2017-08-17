import { NgModule } from '@angular/core';
import { ComponentDBHome } from '../Components/CustomerDBHome';
import { HttpModule, JsonpModule } from '@angular/http';
import { CustomerDBComponent } from '../Components/CustomerDBComponent';
import { CustomerDBService } from '../Service/CustomerDbService';
import { FormsModule } from "@angular/forms"
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomerDBRoutes } from '../Routing/CustomerDBRouting';

@NgModule({
    imports: [
        RouterModule.forChild(CustomerDBRoutes),
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        HttpModule],
    declarations: [ComponentDBHome, CustomerDBComponent],
    providers: [
        CustomerDBService
    ],
    bootstrap: [ComponentDBHome, CustomerDBComponent]
})
export class CustomerDBModule { }