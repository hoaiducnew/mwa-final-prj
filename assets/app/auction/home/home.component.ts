import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Auction } from '../auction.model';
import { Property } from '../../property/property.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {AuctionService} from '../auction.service';

@Component({
    selector: 'app-home',
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    constructor(private http: HttpClient, private auctionService: AuctionService,private  router:Router) {}
  
    auctions:Auction[];
    
     ngOnInit(){
         this.auctionService.getActiveAuctions().subscribe(
            (auctions: Auction[]) => {
                this.auctions = auctions;
            }
        );
     }

    viewDetail(auction:Auction){
        this.auctionService.auction = auction;
        this.router.navigate(["/auctiondetail"]);

    }

}