import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {AuctionService} from './auction.service';

@Component({
    selector: 'app-auction',
    templateUrl: "./auction.component.html"
})
export class AuctionComponent {
    constructor(private http: HttpClient, private auctionService: AuctionService) {}
    validForm:boolean =false;
    auction:{
        startDate:Date,
        amount:number,
        endDate:Date,
        startingBid:number = 100,
        bidCount:number
    }

    save(){
        this.http.post("/auction",this.auction).subscribe((data)=>console.log(data));
    }

}