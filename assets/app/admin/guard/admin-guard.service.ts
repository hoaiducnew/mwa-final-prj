import { UserService } from './../../user/user.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private userService: UserService,
                private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.userService.isLoggedIn() && this.userService.isAdmin()) {
            return true;
        }

        this.router.navigate(['/user', 'signin']);
        return false;
    }
}