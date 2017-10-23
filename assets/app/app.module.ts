import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {UserComponent} from './user/user.component';
import {HeaderComponent} from './header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {LogoutComponent} from './user/logout.component';
import {SignupComponent} from './user/signup.component';
import {SigninComponent} from './user/signin.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './user/user.service';
import {BidModule} from './bid/bid.module';

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        HeaderComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent,
   
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpClientModule,
        BidModule
    ],
    providers: [
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}