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
    declarations: [AuctionComponent],
    exports: [AuctionComponent],
    providers:[AuctionService]
})
export class AuctionModule { }