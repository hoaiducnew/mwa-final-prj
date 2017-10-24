import { Auction } from './../auction/auction.model';
import { User } from './../user/user.model';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
    selector: 'auction-list',
    templateUrl: "./auction-list.component.html"
})
export class AuctionListComponent {
    constructor(private http: HttpClient) {}

    approve(selectedAuction:Auction){
        this.http.post("http://localhost:3000/admin/approveAuction",selectedAuction).subscribe((data)=>console.log(data));
    }

    reject(selectedAuction:Auction){
        this.http.post("http://localhost:3000/admin/rejectAuction",selectedAuction).subscribe((data)=>console.log(data));
    }

}