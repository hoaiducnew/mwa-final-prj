import { Router } from '@angular/router';
import { Auction } from './auction.model';
import { Property } from './../property/property.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {AuctionService} from './auction.service';

@Component({
    selector: 'app-auction',
    templateUrl: "./auction.component.html"
})
export class AuctionComponent implements OnInit {
    constructor(private http: HttpClient, private auctionService: AuctionService,private  router:Router) {}
    validForm:boolean =false;
    auction:Auction;
    auctions:Auction[];
    
     ngOnInit(){
         this.auction = this.auctionService.auction;
         this.auctionService.getAuctions().subscribe(
            (auctions: Auction[]) => {
                this.auctions = auctions;
            }
        );
     }

    save(){
        this.http.post("http://localhost:3000/admin/auction",this.auction).subscribe(
            (data)=>
            {
                console.log(data);              
            });
            this.router.navigate(['/user']);
    }

}