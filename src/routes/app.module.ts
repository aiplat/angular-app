import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router'
import { Aiplat } from './aiplat'

import { Globals } from '../plugins/globals'

@NgModule({
    declarations: Aiplat.Declarations,
    imports: [
        BrowserModule,
        RouterModule.forRoot(Aiplat.routes)
    ],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, Globals],
    bootstrap: [Aiplat.Declarations[0]]
})
export class AppModule { }
