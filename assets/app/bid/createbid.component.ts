import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Bid} from './bid.model'
@Component({
    selector: 'create-bid',
    templateUrl: './createbid.component.html'
})
export class CreateBidComponent {
    createbidForm: FormGroup;
    constructor() {}

    ngOnInit() {
        this.createbidForm = new FormGroup({
            property: new FormControl(null, Validators.required),
            bidAmount: new FormControl(null, Validators.required),
            bidTime: new FormControl(null, Validators.required),
            bidUser: new FormControl(null, Validators.required)
        });
    }

    onSubmit() {
        const bid = new Bid(
            this.createbidForm.value.property,
            this.createbidForm.value.bidAmount,
            this.createbidForm.value.bidTime,
            this.createbidForm.value.bidUser
        );

        // this.userService.signup(user).subscribe(
        //     data => console.log(data),
        //     error => console.error(error)
        // );

        this.createbidForm.reset();
    }


}