import { User } from './../user/user.model';

export class Bid {
    amount:number;
    bidder:User;
    time:Date;
    property:string;

}