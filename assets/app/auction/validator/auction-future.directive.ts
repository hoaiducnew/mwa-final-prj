import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';


@Directive({
    selector: '[futureDate]',
    providers: [{ provide: NG_VALIDATORS, useExisting: FutureDateDirective, multi: true }]
})
export class FutureDateDirective implements Validator {
    validate(control: AbstractControl):{ [key: string]: any } {
           return futureDateValidator()(control);
     }
}

export function futureDateValidator(): ValidatorFn {
    return (control: AbstractControl)=> {

        const isDate = new Date(control.value).toString() !== "Invalid Date";
        if(!isDate)
        return { 'invalidDate': { value: control.value } }
        
        const isValid = new Date(control.value) > new Date();     
        console.log("is Future "+isValid);
        return isValid ? null: { 'pastDate': { value: control.value } };
    };
}
