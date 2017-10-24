import {Injectable} from "@angular/core";
import 'rxjs/Rx';

import {Bid} from "./bid.model";
import {HttpClient,  HttpHeaders} from '@angular/common/http';

@Injectable()
export class BidService {
    constructor(private http: HttpClient) {
    }

    bidAuction(bid: Bid) {
        const body = JSON.stringify(bid);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http.post('http://localhost:3000/bid', body, {headers: headers});
     }

     
    
}