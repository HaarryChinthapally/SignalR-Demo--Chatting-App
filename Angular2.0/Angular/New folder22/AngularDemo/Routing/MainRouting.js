"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WelcomeComponent_1 = require("../Components/WelcomeComponent");
exports.MainRoutes = [
    { path: '', component: WelcomeComponent_1.WelcomeComponent },
    { path: 'UI/MasterAngular.html', component: WelcomeComponent_1.WelcomeComponent },
    { path: 'Customer', loadChildren: 'Modules/CustomerModule#CustomerModule' },
    { path: 'Supplier', loadChildren: 'Modules/SupplierModule#SupplierModule' },
    { path: 'CustomerDB', loadChildren: 'Modules/CustomerDBModule#CustomerDBModule' }
];
//# sourceMappingURL=MainRouting.js.map