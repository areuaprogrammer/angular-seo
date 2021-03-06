import { AppModule } from './app.module';
import {
    BrowserModule,
    BrowserTransferStateModule
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [],
    imports: [
        BrowserModule.withServerTransition({
            appId: 'my-app-id'
        }),
        BrowserTransferStateModule,
        AppModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class BrowserAppModule {}