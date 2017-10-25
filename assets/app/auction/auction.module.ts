import { DateFormatPipe } from './pipe/date-format.pipe';
import { FutureDateDirective } from './validator/auction-future.directive';
import { ValidDateDirective } from './validator/auction-date.directive';

import { HomeComponent } from './home/home.component';
import { Property } from './../property/property.model';
import { Auction } from './auction.model';
import { AuctionService } from './auction.service';
import { AuctionComponent } from './auction.component';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule }       from '@angular/common';

@NgModule({
    imports:[
      FormsModule,
      CommonModule
      
    ],
    declarations: [AuctionComponent, HomeComponent,ValidDateDirective, FutureDateDirective, DateFormatPipe],
    exports: [AuctionComponent,HomeComponent],
    providers: [AuctionService]
})
export class AuctionModule { }