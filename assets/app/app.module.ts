import { AdminModule } from './admin/admin.module';
import {AuctionModule} from './auction/auction.module';
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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UserService} from './user/user.service';
import {BidModule} from './bid/bid.module';

import {ErrorComponent} from './errors/error.component';
import {ErrorService} from './errors/error.service';
import {PropertiesComponent} from './property/properties.component';
import {PropertyDetailComponent} from './property/property-detail/property-detail.component';
import {PropertyListComponent} from './property/property-list/property-list.component';
import {PropertyItemComponent} from './property/property-list/property-item/property-item.component';
import {PropertyService} from './property/property.service';
import {PropertyStartComponent} from './property/property-start/property-start.component';
import {PropertyEditComponent} from './property/property-edit/property-edit.component';
import {AuthInterceptor} from './shared/auth.interceptor';
import {LoggingInterceptor} from './shared/logging.interceptor';


@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        HeaderComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent,
        ErrorComponent,
        PropertiesComponent,
        PropertyDetailComponent,
        PropertyListComponent,
        PropertyItemComponent,
        PropertyStartComponent,
        PropertyEditComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpClientModule,
        AuctionModule,
        BidModule,
        AdminModule
    ],
    providers: [
        UserService,
        ErrorService,
        PropertyService,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}