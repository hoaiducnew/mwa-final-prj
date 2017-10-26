import { UserService } from './../user/user.service';
import { Component,Input } from '@angular/core';
import { Auction } from './../auction/auction.model';
import {AuctionService} from './../auction/auction.service';
import {Bid} from './bid.model';
import {BidService} from './bid.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'auction-detail',
    templateUrl: './auctiondetail.component.html'
    
})
export class AuctionDetailComponent {
    auction: Auction;
    subscription: Subscription;

    private bids: Bid[] = [];

    constructor(private auctionService: AuctionService,private bidService: BidService,private userService: UserService) {}

    ngOnInit() {
      this.auction = this.auctionService.auction;

      this.subscription = this.bidService.bidsChanged.subscribe(
        (bids: Bid[]) => {
            this.bids = bids;
        }
      );

      this.bidService.getBids(this.auction).subscribe(
        (bids: Bid[]) => {
            this.bids = bids;
        }
    );
    }
}