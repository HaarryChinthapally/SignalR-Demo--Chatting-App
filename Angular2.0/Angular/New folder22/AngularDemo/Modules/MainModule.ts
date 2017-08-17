import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MasterPageComponent } from '../Components/MasterPageComponent';
import { WelcomeComponent } from '../Components/WelcomeComponent';
import { RouterModule } from '@angular/router';
import { MainRoutes } from '../Routing/MainRouting';

@NgModule({
    imports: [
        RouterModule.forRoot(MainRoutes),
        BrowserModule],
    declarations: [MasterPageComponent, WelcomeComponent],
    bootstrap: [MasterPageComponent]
})
export class MainModule { }
