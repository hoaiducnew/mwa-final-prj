import { Component,Input } from '@angular/core';
import { Auction } from './../auction/auction.model';
import {AuctionService} from './../auction/auction.service';
import {Bid} from './bid.model';
import {BidService} from './bid.service';

@Component({
    selector: 'auction-detail',
    templateUrl: './auctiondetail.component.html'
    
})
export class AuctionDetailComponent {
    auction: Auction;

    private bids: Bid[] = [];

    constructor(private auctionService: AuctionService,private bidService: BidService) {}

    ngOnInit() {
      this.auction = this.auctionService.auction;     
      
      this.bidService.getBids().subscribe(
        (bids: Bid[]) => {
            this.bids = bids;
        }
    );
    }
}