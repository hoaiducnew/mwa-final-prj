import { FormControl, AbstractControl, ValidatorFn } from '@angular/forms';

export class CustomValidators {

    public static rangeValidator(min: number, max: number): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
                return { 'range': true };
            }
            return null;

        };

    }

    public static minBidValidator(start: number,current: number): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            current = current?current:start;
            console.log("current:"+current);
            if (c.value !== undefined && (isNaN(c.value) || c.value <= current)) {
                return { 'min': true };
            }
            return null;

        };
    }


}