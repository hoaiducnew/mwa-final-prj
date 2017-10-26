import { Component,Input } from '@angular/core';
import {Bid} from './bid.model';
import {BidService} from './bid.service';
import { DatePipe } from '@angular/common';
@Component({
    selector: 'app-bid',
    templateUrl: './bid.component.html'
    
})
export class BidComponent {
  
    private bids: Bid[] = [];
    constructor(private bidService: BidService) {}

    ngOnInit() {
      
        // this.bidService.getBids(this.bidService.).subscribe(
        //     (bids: Bid[]) => {
        //         this.bids = bids;
        //     }
        // );

        
    }
}