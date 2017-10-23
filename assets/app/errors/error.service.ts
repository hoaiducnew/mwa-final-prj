import {EventEmitter} from '@angular/core';
import {Error} from './error.model';

export class ErrorService {
    errorOccurred = new EventEmitter<Error>();

    handleError(error: any) {
        const errorData = new Error(error.error.title, error.error.error.message);
        this.errorOccurred.emit(errorData);
    }
}