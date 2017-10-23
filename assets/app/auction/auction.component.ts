import { Component } from '@angular/core';
import {AuctionService} from './auction.service';

@Component({
    selector: 'app-bid',
    templateUrl: "./bid.component.html"
})
export class BidComponent {
    constructor(private auctionService: AuctionService) {}

    auction:{
        amount:number;
    }

}