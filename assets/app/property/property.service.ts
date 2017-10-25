import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Property} from './property.model';
import {Subject} from 'rxjs/Subject';
import {ErrorService} from '../errors/error.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PropertyService {
    propertiesChanged = new Subject<Property[]>();

    private properties: Property[] = [];
    // propertyIsEdit = new EventEmitter<Property>();

    constructor(private http: HttpClient,
                private errorService: ErrorService) {
    }

    getProperties() {
        var headers = new HttpHeaders().set('Content-Type', 'application/json');
        // var headers = new HttpHeaders().set('token', localStorage.getItem('token'));
        // headers.append('Content-Type', 'application/json');
        // console.log(localStorage.getItem('token'));
        // console.log(localStorage.getItem('token'));
        return this.http.get<Property[]>('http://localhost:3000/property', {headers: headers})
            .map(properties => this.properties = properties)
            .catch(error => {
                this.errorService.handleError(error.error);
                return Observable.throw(error.error);
            });
    }

    getProperty(id: string) {
        return this.properties.filter(property => property._id === id)[0];

        // const headers = new HttpHeaders().set('Content-Type', 'application/json');
        //
        // const token = localStorage.getItem('token')
        //     ? '?token=' + localStorage.getItem('token')
        //     : '';
        // return this.http.get('http://localhost:3000/property/' + id + token, {headers: headers})
        //     .catch(error => {
        //         this.errorService.handleError(error.error);
        //         return Observable.throw(error.error);
        //     });
    }

    deleteProperty(property: Property) {
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete('http://localhost:3000/property/' + property._id + token)
            .map(data => {
                this.properties = this.properties.filter(property => property._id !== data['obj']._id);
                this.propertiesChanged.next(this.properties.slice());
            })
            .catch(error => {
                this.errorService.handleError(error.error);
                return Observable.throw(error.error);
            });
    }

    addProperty(property: Property) {
        var headers = new HttpHeaders().set('Content-Type', 'application/json');
        const body = JSON.stringify(property);
        return this.http.post<Property>('http://localhost:3000/property', body, {headers: headers})
            .map(property => {
                this.properties.push(property);
                this.propertiesChanged.next(this.properties.slice());
            })
            .catch(error => {
                this.errorService.handleError(error.error);
                return Observable.throw(error.error);
            });
    }

    updateProperty(_id: string, newProperty: Property) {
        const body = JSON.stringify(newProperty);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.put<Property>('http://localhost:3000/property/' + _id + token, body, {headers: headers})
            .map(property => {
                const index = this.properties.findIndex(property => property._id === _id);
                this.properties[index] = property;
                this.propertiesChanged.next(this.properties.slice());
            })
            .catch(error => {
                this.errorService.handleError(error.error);
                return Observable.throw(error.error);
            });
    }
}