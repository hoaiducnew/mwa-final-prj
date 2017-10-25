import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {BidComponent} from './bid.component';
import {CreateBidComponent} from './createbid.component';
import {BidService} from './bid.service';
import {ErrorService} from '../errors/error.service';

@NgModule({
  declarations: [
    BidComponent,
    CreateBidComponent
  ],
  imports: [
  BrowserModule,FormsModule,HttpModule, ReactiveFormsModule,HttpClientModule
  ],

  exports:[BidComponent,
    CreateBidComponent],
  providers: [BidService,ErrorService]


})
export class BidModule { }
