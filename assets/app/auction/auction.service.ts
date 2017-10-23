import {Injectable} from "@angular/core";
import 'rxjs/Rx';

import {Auction} from "./auction.model";
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuctionService {
    constructor(private http: HttpClient) {
    }

    saveAuction(auction: Auction) {
        const body = JSON.stringify(auction);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http.post('http://localhost:3000/auction', body, {headers: headers});
     }
}