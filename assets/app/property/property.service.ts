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
                this.properties = data['obj'];
                return data['obj'];
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    getProperty(id: string) {
        return this.properties.filter(property => property._id === id)[0];
    }

    deleteProperty(property: Property) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete('http://localhost:3000/property/' + property._id + token, {headers: headers})
            .map(data => {
                this.properties = data['obj'];
                return data['obj'];
            })
            .catch((error: Response) => {
                this.errorService.handleError(error);
                return Observable.throw(error);
            });
    }

    addProperty(property: Property) {
        const body = JSON.stringify(property);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('http://localhost:3000/property' + token, body, {headers: headers});
            // .map((response: Response) => {
            //     const result = response.json();
            //     const message = new Message(
            //         result.obj.content,
            //         result.obj.user.firstName,
            //         result.obj._id,
            //         result.obj.user._id);
            //     this.messages.push(message);
            //     return message;
            // })
            // .catch((error: Response) => {
            //     this.errorService.handleError(error.json());
            //     return Observable.throw(error.json());
            // });
    }

    // getMessages() {
    //     return this.http.get('http://localhost:3000/message')
    //         .map((response: Response) => {
    //             const messages = response.json().obj;
    //             let transformedMessages: Message[] = [];
    //             for (let message of messages) {
    //                 transformedMessages.push(new Message(
    //                     message.content,
    //                     message.user.firstName,
    //                     message._id,
    //                     message.user._id)
    //                 );
    //             }
    //             this.messages = transformedMessages;
    //             return transformedMessages;
    //         })
    //         .catch((error: Response) => {
    //             this.errorService.handleError(error.json());
    //             return Observable.throw(error.json());
    //         });
    // }
    //
    // editMessage(message: Message) {
    //     this.messageIsEdit.emit(message);
    // }
    //
    // updateMessage(message: Message) {
    //     const body = JSON.stringify(message);
    //     const headers = new Headers({'Content-Type': 'application/json'});
    //     const token = localStorage.getItem('token')
    //         ? '?token=' + localStorage.getItem('token')
    //         : '';
    //     return this.http.patch('http://localhost:3000/message/' + message.messageId + token, body, {headers: headers})
    //         .map((response: Response) => response.json())
    //         .catch((error: Response) => {
    //             this.errorService.handleError(error.json());
    //             return Observable.throw(error.json());
    //         });
    // }
    //
    // deleteMessage(message: Message) {
    //     this.messages.splice(this.messages.indexOf(message), 1);
    //     const token = localStorage.getItem('token')
    //         ? '?token=' + localStorage.getItem('token')
    //         : '';
    //     return this.http.delete('http://localhost:3000/message/' + message.messageId + token)
    //         .map((response: Response) => response.json())
    //         .catch((error: Response) => {
    //             this.errorService.handleError(error.json());
    //             return Observable.throw(error.json());
    //         });
    // }
}