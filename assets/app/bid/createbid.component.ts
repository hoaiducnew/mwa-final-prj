import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Bid} from './bid.model';
import {BidService} from './bid.service';
import { User } from './../user/user.model';
@Component({
    selector: 'create-bid',
    templateUrl: './createbid.component.html'
})
export class CreateBidComponent {
    createbidForm: FormGroup;

   
    constructor(private bidService: BidService) {}

 
    onSubmit() {
        const bid = new Bid(
      
            this.createbidForm.value.bidAmount
            
           
        );

        this.bidService.bidAuction(bid).subscribe(
            data => console.log(data),
            error => console.error(error)
        );

        this.createbidForm.reset();
    }


    ngOnInit() {
        this.createbidForm = new FormGroup({
            bidAmount: new FormControl('', Validators.required),
        });
    }

    get bidAmount(){
        return this.createbidForm.get('bidAmount');
    }


}



