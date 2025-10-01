import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';


export function PasswordMatchValidator(ctrl: AbstractControl): ValidationErrors | null {
  const control= ctrl as FormGroup;
  const pass = control.controls?.['password']?.value;
    const confPass = control.controls?.['confPassword']?.value;
    if(pass!==confPass){
      return {passwordMismatch : true};
    }
    return null;
}

@Directive({
  selector: '[PasswordValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordValidator,
      multi: true
    }
  ]
})

export class PasswordValidator implements Validator{
  // validate(control:AbstractControl<string>): ValidationErrors | null {
  //   const pass= control.parent?.get('password')?.value;
  //   console.log(':::pass', pass);
  //   const valid= control.value?.valueOf===pass;
  //   return valid ? null : { passwordFormat: true };
  // }

  validate=PasswordMatchValidator;
  
  constructor() { }

}
