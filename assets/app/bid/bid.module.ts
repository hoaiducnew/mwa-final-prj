import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BidComponent} from './bid.component';
import {CreateBidComponent} from './createbid.component';
@NgModule({
  declarations: [
    BidComponent,
    CreateBidComponent
  ],
  imports: [
  BrowserModule,FormsModule,HttpModule, ReactiveFormsModule
  ],
  providers: []

})
export class BidModule { }
