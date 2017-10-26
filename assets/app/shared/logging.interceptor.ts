import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';

export class LoggingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var date = new Date()
        console.log("Request URL: " + req.urlWithParams);
        console.log("Request Headers: " + JSON.stringify(req.headers));
        console.log("Request Body: " + JSON.stringify(req.body));
        console.log("Time: " + date.toDateString() + " " + date.toTimeString());
        return next.handle(req).do(
            event => {
                console.log('Event after handling the request: ', event);
            }
        )
    }
}