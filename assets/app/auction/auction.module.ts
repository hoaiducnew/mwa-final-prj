import { FutureDateDirective } from './validator/auction-future.directive';
import { ValidDateDirective } from './validator/auction-date.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DatePickerComponent } from './../date-picker/date-picker.component';
import { MatDatepickerModule } from '@angular/material';
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
      CommonModule,
      MatDatepickerModule,
      NgbModule,
      NgbModule.forRoot()
      
    ],
    declarations: [AuctionComponent, HomeComponent,DatePickerComponent,ValidDateDirective, FutureDateDirective],
    exports: [AuctionComponent,HomeComponent,DatePickerComponent],
    providers: [AuctionService]
})
export class AuctionModule { }