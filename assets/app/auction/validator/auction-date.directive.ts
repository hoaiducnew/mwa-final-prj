import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';


@Directive({
    selector: '[validDate]',
    providers: [{ provide: NG_VALIDATORS, useExisting: ValidDateDirective, multi: true }]
})
export class ValidDateDirective implements Validator {
    validate(control: AbstractControl):{ [key: string]: any } {
           return validDateValidator()(control);
     }
}

export function validDateValidator(): ValidatorFn {
    return (control: AbstractControl)=> {
      
        const isDate = new Date(control.value).toString() !== "Invalid Date";
        console.log("isDate"+isDate);
        return isDate ? null: { 'invalidDate': { value: control.value } };
    };
}
