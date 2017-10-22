import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from './user.model';
import {UserService} from './user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent {
    signInForm: FormGroup;

    constructor(private userService: UserService,
                private router: Router) {
    }

    onSubmit() {
        const user = new User(this.signInForm.value.email, this.signInForm.value.password);
        this.userService.signin(user).subscribe(
            data => {
                localStorage.setItem('token', data.token);
                localStorage.setItem('userId', data.userId);
                this.router.navigateByUrl('/');
            },
            error => console.error(error)
        );
        this.signInForm.reset();
    }

    ngOnInit() {
        this.signInForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });
    }
}