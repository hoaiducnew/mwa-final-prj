import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Property} from './property.model';
import {Subject} from 'rxjs/Subject';
import {ErrorService} from '../errors/error.service';
import {Observable} from 'rxjs/Observable';
import {Message} from '@angular/compiler/src/i18n/i18n_ast';

@Injectable()
export class PropertyService {
    propertiesChanged = new Subject<Property[]>();

    private properties: Property[] = [];
    propertyIsEdit = new EventEmitter<Property>();

    constructor(private http: HttpClient,
                private errorService: ErrorService) {
    }

    getProperties() {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.get('http://localhost:3000/property' + token, {headers: headers})
            .map(data => {
                let transformedProperties: Property[] = [];
                for (let property of data['obj']) {
                    transformedProperties.push(new Property(
                        property.name,
                        property._id
                        )
                    );
                }
                this.properties = transformedProperties;
                return transformedProperties;
            })
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
        const body = JSON.stringify(property);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('http://localhost:3000/property' + token, body, {headers: headers})
            .map(data => {
                this.properties.push(
                    new Property(data['obj'].name, data['obj']._id)
                )
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
            .map(data => {
                const index = this.properties.findIndex(property => property._id === _id);
                this.properties[index] = data;
                this.propertiesChanged.next(this.properties.slice());
            })
            .catch(error => {
                this.errorService.handleError(error.error);
                return Observable.throw(error.error);
            });
    }
}