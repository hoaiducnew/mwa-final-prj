import { Component,Input} from '@angular/core';
import {FormControl, FormGroup, Validators,AbstractControl} from '@angular/forms';
import {Bid} from './bid.model';
import {BidService} from './bid.service';
import { User } from './../user/user.model';
import { Auction } from './../auction/auction.model';
import {CustomValidators} from './custom-validator'

@Component({
    selector: 'create-bid',
    templateUrl: './createbid.component.html'
})
export class CreateBidComponent {
    createbidForm: FormGroup;

    @Input() auction: Auction;
   
    constructor(private bidService: BidService) {}
    
 
    onSubmit() {
        const bid = new Bid(
      
            this.createbidForm.value.bidAmount,  
            this.auction
           
        );

        this.bidService.bidAuction(bid).subscribe(
            data => console.log(data),
            error => console.error(error)
        );

        this.createbidForm.reset();
    }


    ngOnInit() {
        this.createbidForm = new FormGroup({
   //         bidAmount: new FormControl('',[Validators.required,CustomValidators.rangeValidator(this.auction.startingBid,this.auction.property.expectedPrice)]),
            bidAmount: new FormControl('',[Validators.required,CustomValidators.minBidValidator(this.auction.startingBid,this.auction.currentBid)]),
        });
    }

    get bidAmount(){
        return this.createbidForm.get('bidAmount');
    }

    
    

}



