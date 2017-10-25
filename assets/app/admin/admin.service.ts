import {Injectable} from "@angular/core";
import 'rxjs/Rx';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ErrorService} from '../errors/error.service';

@Injectable()
export class AdminService {
    constructor(private http: HttpClient, private errorService: ErrorService) {
    }

   
}