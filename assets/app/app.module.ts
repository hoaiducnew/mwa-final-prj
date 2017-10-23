import { BidComponent } from './bid/bid.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {UserComponent} from './user/user.component';

import {HeaderComponent} from './common/header.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {LogoutComponent} from './user/logout.component';
import {SignupComponent} from './user/signup.component';
import {SigninComponent} from './user/signin.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './user/user.service';
import {HeaderComponent} from './header/header.component';
import {ErrorComponent} from './errors/error.component';
import {ErrorService} from './errors/error.service';




@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        HeaderComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent,
        BidComponent,
      ErrorComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        UserService, ErrorService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}