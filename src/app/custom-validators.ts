import { FormControl } from '@angular/forms';

export class CustomValidators {
    static timeFormat(ctrl: FormControl) {
        const pattern: RegExp = /\d\d:\d\d/;
        return pattern.test(ctrl.value) ? null : { timeFormat: true}; 
    }
}
