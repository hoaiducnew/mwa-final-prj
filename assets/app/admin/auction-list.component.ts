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
        selectedAuction.status="APPROVED";
        this.auctionService.statusUpdateAuction(selectedAuction);
       // this.http.put("http://localhost:3000/admin/auction/changeStatus",selectedAuction).subscribe((data)=>console.log(data));
    }

    reject(selectedAuction:Auction){
        selectedAuction.status="REJECTED";
        this.auctionService.statusUpdateAuction(selectedAuction);
        //this.http.put("http://localhost:3000/admin/auction/changeStatus",selectedAuction).subscribe((data)=>console.log(data));
    }

}