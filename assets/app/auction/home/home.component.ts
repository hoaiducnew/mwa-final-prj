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
         this.auctionService.getAuctions().subscribe(
            (auctions: Auction[]) => {
                this.auctions = auctions;
            }
        );
     }

    save(){
        this.http.get("http://localhost:3000/admin/auction").subscribe(
            (data)=>
            {
                console.log(data);              
            });
            this.router.navigate(['/home']);
    }
    viewDetail(auction:Auction){
        this.auctionService.auction = auction;
        this.router.navigate(["/auction"]);

    }

}