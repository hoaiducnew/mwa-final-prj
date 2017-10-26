import { AuctionService } from './../auction/auction.service';
import {Injectable} from "@angular/core";
import {ErrorService} from '../errors/error.service';
import {Bid} from "./bid.model";
import {HttpClient,  HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Auction } from './../auction/auction.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class BidService {
    bidsChanged = new Subject<Bid[]>();
    
    bid:Bid;
    private bids: Bid[] = [];
    constructor(private http: HttpClient,private errorService: ErrorService, private auctionService:AuctionService) {
    }

    // set auction(auction: Auction) {
    //     this.bid.auction = auction;

    // }

    bidAuction(bid: Bid) {
        bid.auction.currentBid = bid.bidAmount;
        this.auctionService.bidAuction(bid.auction);
        const body = JSON.stringify(bid);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';


        return this.http.post('http://localhost:3000/bidapi'+token, body, {headers: headers})
            .map( data => {
                this.bids.push(data['obj']);
                this.bidsChanged.next(this.bids.slice());
            });
     }

     getBids(auction: Auction){
        console.log("auction._id" +auction._id);
        return this.http.get('http://localhost:3000/bidapi/' + auction._id)
        .map(data => {
            this.bids = data['obj'];
            return data['obj'];
        })
        .catch((error: Response) => {
            this.errorService.handleError(error.json());
            return Observable.throw(error);
        });
    
      }

    // getBids(){
    //     return this.http.get('http://localhost:3000/bidapi/')
    //         .map(data => {
    //             this.bids = data['obj'];
    //             return data['obj'];
    //         })
    //         .catch((error: Response) => {
    //             this.errorService.handleError(error.json());
    //             return Observable.throw(error.json());
    //         });
    //
    // }
      
}