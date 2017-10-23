import {Injectable} from "@angular/core";
import 'rxjs/Rx';

import {User} from "./user.model";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ErrorService} from '../errors/error.service';

@Injectable()
export class UserService {
    constructor(private http: HttpClient, private errorService: ErrorService) {
    }

    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http.post('http://localhost:3000/user', body, {headers: headers});
            // .map(response => response.json())
            // .catch((error: HttpErrorResponse) => Observable.throw(error.error));
    }

    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http.post('http://localhost:3000/user/signin', body, {headers: headers});
            // .map((response: Response) => response.json())
            // .catch((error: Response) => Observable.throw(error));
    }

    logout() {
        localStorage.clear();
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }
}