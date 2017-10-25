import { Property } from './../property/property.model';
import { User } from './../user/user.model';

export class Auction {


    startTime: Date;
    endTime: Date;
    startingBid: number;
    currentBid: number;
    status: string;
    bidCount: number = 0;
    currentHighestBidder: User;
    property: Property;

    constructor(){}

}