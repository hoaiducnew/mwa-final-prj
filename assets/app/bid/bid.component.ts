import { Component } from '@angular/core';
import {BidService} from './bid.service';

@Component({
    selector: 'app-bid',
    templateUrl: "./bid.component.html"
})
export class BidComponent {
    constructor(private bidService: BidService) {}

    bidForm:{
        amount:number;
    }

}