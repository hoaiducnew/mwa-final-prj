import { AuctionModule } from './auction/auction.module';
import { BidComponent } from './bid/bid.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {UserComponent} from './user/user.component';

import {HeaderComponent} from './header/header.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {LogoutComponent} from './user/logout.component';
import {SignupComponent} from './user/signup.component';
import {SigninComponent} from './user/signin.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './user/user.service';
import {BidModule} from './bid/bid.module';

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
        ErrorComponent


    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpClientModule,
        AuctionModule,
        BidModule
    ],
    providers: [
        UserService, ErrorService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}