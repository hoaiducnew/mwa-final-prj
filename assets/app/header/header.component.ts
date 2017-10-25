import {Component} from '@angular/core';
import {UserService} from '../user/user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    constructor(private userService: UserService,
                private router: Router) {}

    onLogout() {
        this.userService.logout();
        this.router.navigate(['/user', 'signin']);
    }

}