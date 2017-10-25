import { FormControl,AbstractControl,ValidatorFn} from '@angular/forms';

    export class CustomValidators{

        public static rangeValidator(min:number,max:number): ValidatorFn{
           return (c:AbstractControl):{[key:string]:boolean} | null=>{
            if(c.value!==undefined && (isNaN(c.value)||c.value<min||c.value>max)){
                return {'range':true};
            }
            return null;
        
        };
    }

      
}