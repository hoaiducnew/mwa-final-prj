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

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        HeaderComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent
    ],
    imports: [BrowserModule, FormsModule, routing, ReactiveFormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}