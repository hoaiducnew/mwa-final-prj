import { Subject } from 'rxjs/Subject';
import { ErrorService } from './../errors/error.service';
import { Property } from './../property/property.model';
import { Injectable } from "@angular/core";
import 'rxjs/Rx';

import { Auction } from "./auction.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';



@Injectable()
export class AuctionService {

    auction:Auction;
    auctions:Auction[];
    auctionChanged = new Subject<Auction[]>();

    constructor(private http: HttpClient, private errorService:ErrorService) {
        this.auction=new Auction();
    }
    

    set property(property: Property) {
        this.auction.property = property;

    }

    saveAuction(auction: Auction) {
        const body = JSON.stringify(auction);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/admin/auction', body, { headers: headers })
        .map(data=>this.auctionChanged.next());
    }
    bidAuction(auction: Auction) {
        this.http.put("http://localhost:3000/admin/auction/addBid",auction).subscribe((data)=>console.log(data));
    }

    getActiveAuctions() {
        var headers = new HttpHeaders().set('Content-Type', 'application/json');
         return this.http.get<Auction[]>('http://localhost:3000/admin/auction/active', {headers: headers})
            .map(auctions => this.auctions = auctions)
            .catch(error => {
                this.errorService.handleError(error.error);
                return Observable.throw(error.error);
            });
    }

    getAuctions() {
        var headers = new HttpHeaders().set('Content-Type', 'application/json');
         return this.http.get<Auction[]>('http://localhost:3000/admin/auction', {headers: headers})
            .map(auctions => this.auctions = auctions)
            .catch(error => {
                this.errorService.handleError(error.error);
                return Observable.throw(error.error);
            });
    }
    statusUpdateAuction(auction:Auction){
        this.http.put("http://localhost:3000/admin/auction/changeStatus",auction).subscribe((data)=>console.log(data));
        
    }

}