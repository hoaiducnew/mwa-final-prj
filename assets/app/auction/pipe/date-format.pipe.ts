import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
    transform(value: string) {
        console.log("value" + value);
        if (!value) {
            return null;
        }
        const isDate = new Date(value).toString() !== "Invalid Date";
        if (!isDate)
            return null;
        console.log("isDate" + isDate);
        let enterdDate: Date = new Date(value);
        let a = enterdDate.getFullYear() + "-" + enterdDate.getMonth() + "-" + enterdDate.getDay() + " " + enterdDate.getHours() + ":" + enterdDate.getMinutes();
        console.log("string : " + a);
        return a;


    }
}
