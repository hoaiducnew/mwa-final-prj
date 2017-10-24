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
        startingBid:number,
        bidCount:number
    }

    save(){
        this.http.post("http://localhost:3000/admin/auction",this.auction).subscribe((data)=>console.log(data));
    }

}