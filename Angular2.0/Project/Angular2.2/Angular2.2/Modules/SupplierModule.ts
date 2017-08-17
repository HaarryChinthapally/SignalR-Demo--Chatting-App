import { NgModule } from '@angular/core';
import { SupplierComponent } from '../Components/SupplierComponent';
import { RouterModule } from '@angular/router';
import { SupplierRoutes } from '../Routing/SupplierRouting';
@NgModule({
    imports: [
        RouterModule.forChild(SupplierRoutes)],
    declarations: [SupplierComponent],
    bootstrap: [SupplierComponent]
})
export class SupplierModule { }
