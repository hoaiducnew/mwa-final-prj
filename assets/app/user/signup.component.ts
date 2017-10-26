import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from './user.service';
import {User} from './user.model';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
    signupForm: FormGroup;
    commonPasswords = ['root', 'password', '123456'];

    constructor(private userService: UserService) {
    }

    onSubmit() {
        const user = new User(
            this.signupForm.value.email,
            this.signupForm.value.password,
            this.signupForm.value.role,
            this.signupForm.value.firstName,
            this.signupForm.value.lastName
        );

        this.userService.signup(user).subscribe();

        this.signupForm.reset();
    }

    ngOnInit() {
        this.signupForm = new FormGroup({
            firstName: new FormControl(null, [Validators.required, Validators.minLength(4)]),
            lastName: new FormControl(null, [Validators.required, Validators.minLength(4)]),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, [Validators.required, Validators.minLength(6), this.forbiddenPasswordValidator.bind(this)]),
            role: new FormControl('user', Validators.required)
        });
    }

    forbiddenPasswordValidator(control: FormControl): { [s: string]: boolean } {
        if (this.commonPasswords.indexOf(control.value) !== -1) {
            return {'passwordIsForbidden': true};
        }
        return null;
    }
}