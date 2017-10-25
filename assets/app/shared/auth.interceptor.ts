import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('token')) {
            const copiedReq = req.clone({  // to make sure NOT accidentally change the incoming requests multiple times
                headers: req.headers.set('token', localStorage.getItem('token'))
            });
            return next.handle(copiedReq);
        }

        return next.handle(req);
    }
}