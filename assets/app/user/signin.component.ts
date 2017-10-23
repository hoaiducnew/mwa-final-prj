import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from './user.model';
import {UserService} from './user.service';
import {Router} from '@angular/router';
import {ErrorService} from '../errors/error.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {
    signinForm: FormGroup;

    constructor(private userService: UserService,
                private router: Router,
                private errorService: ErrorService) {
    }

    onSubmit() {
        const user = new User(this.signinForm.value.email, this.signinForm.value.password);
        this.userService.signin(user).subscribe(
            data => {
                console.log(data);
                localStorage.setItem('token', data['token']);
                localStorage.setItem('userId', data['userId']);
                this.router.navigateByUrl('/');
            },
            error => {
                this.errorService.handleError(error);
            }
        );
        this.signinForm.reset();
    }

    ngOnInit() {
        this.signinForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });
    }
}