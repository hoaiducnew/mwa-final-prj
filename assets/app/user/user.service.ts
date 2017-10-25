import {Injectable} from "@angular/core";
import 'rxjs/Rx';

import {User} from "./user.model";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ErrorService} from '../errors/error.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
    constructor(private http: HttpClient, private errorService: ErrorService) {
    }

    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http.post('http://localhost:3000/user', body, {headers: headers})
            .catch(error => {
                this.errorService.handleError(error.error);
                return Observable.throw(error.error);
            });
    }

    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http.post('http://localhost:3000/user/signin', body, {headers: headers})
            .catch(error => {
                this.errorService.handleError(error.error);
                return Observable.throw(error.error);
            });
    }

    logout() {
        localStorage.clear();
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }

    isAdmin() {
        return localStorage.getItem('role') === 'admin';
    }
}