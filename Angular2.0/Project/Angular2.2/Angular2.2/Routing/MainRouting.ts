import { Component } from '@angular/core';

import { WelcomeComponent } from '../Components/WelcomeComponent';

export const MainRoutes = [
    { path: '', component: WelcomeComponent }, // at first at the start
    { path: 'UI/MasterAngular.html', component: WelcomeComponent }, // on demand
    { path: 'Customer', loadChildren: 'Modules/CustomerModule#CustomerModule' }, // on demand
    { path: 'Supplier', loadChildren: 'Modules/SupplierModule#SupplierModule' }

];
