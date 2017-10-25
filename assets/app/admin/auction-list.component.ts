import { AuctionService } from './../auction/auction.service';
import { Auction } from './../auction/auction.model';
import { User } from './../user/user.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'auction-list',
    templateUrl: "./auction-list.component.html"
})
export class AuctionListComponent implements OnInit {
    constructor(private http: HttpClient, private auctionService: AuctionService) {}
    auctions:Auction[];

    ngOnInit(){
        this.auctionService.getAuctions().subscribe(
            (auctions: Auction[]) => {
                this.auctions = auctions;
            }
        );
    }

    approve(selectedAuction:Auction){
        this.http.post("http://localhost:3000/admin/approveAuction",selectedAuction).subscribe((data)=>console.log(data));
    }

    reject(selectedAuction:Auction){
        this.http.post("http://localhost:3000/admin/rejectAuction",selectedAuction).subscribe((data)=>console.log(data));
    }

}