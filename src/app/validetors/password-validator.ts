import { Directive } from '@angular/core';
import { FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordValidator,
      multi: true
    }
  ]
})
export class PasswordValidator implements Validator{
  validate(control: FormGroup): ValidationErrors | null{
    const password = control.controls?.['password']?.value;
    const config = control.controls?.['confirm']?.value;
    if(password != config){
      return{passwordMismatch: true}
    }
    return null;
  }
}
// export class PasswordValidator implements Validator{
//   validate(control: AbstractControl<String>): ValidationErrors | null{
//     const pvalid = control.parent?.get('password')?.value;
//     const valid = control.value?.valueOf() === pvalid;
//     return pvalid ? null : {cunstonFormat: true}
//   }
// }
