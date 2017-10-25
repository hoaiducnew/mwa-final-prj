import { User } from './../user/user.model';
import { Property } from './../property/property.model';
import { Auction } from './../auction/auction.model';

export class Bid{
    constructor(
                public bidAmount : number,
                public auction: Auction
    ){}

}