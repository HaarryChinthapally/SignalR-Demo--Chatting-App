import { NgModule } from '@angular/core';
import { CustomerComponent } from '../Components/CustomerComponent';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from "@angular/forms"
import { GridComponent } from "../Components/GridComponent"
import { RouterModule } from '@angular/router';
import { CustomerRoutes } from '../Routing/CustomerRouting';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        RouterModule.forChild(CustomerRoutes),
        HttpModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule],
    declarations: [CustomerComponent,
        GridComponent],
    bootstrap: [CustomerComponent]
})
export class CustomerModule { }
