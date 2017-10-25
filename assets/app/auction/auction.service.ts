import { Property } from './../property/property.model';
import { Injectable } from "@angular/core";
import 'rxjs/Rx';

import { Auction } from "./auction.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuctionService {

    auction:Auction;
    constructor(private http: HttpClient) {
        this.auction=new Auction();
    }
    

    set property(property: Property) {
        this.auction.property = property;

    }

    saveAuction(auction: Auction) {
        const body = JSON.stringify(auction);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http.post('http://localhost:3000/auction', body, { headers: headers });
    }
}