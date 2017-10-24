import { User } from './../user/user.model';

export class Auction {
    _property:string;
    startDate:Date;
    amount:number;
    endDate:Date;
    startingBid:number;
    bidCount:number = 0;

    get Property(){
        return this._property;
    }
    
}