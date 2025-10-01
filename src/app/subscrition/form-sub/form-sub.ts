import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidator } from "../../custom-validator";
import { CommonModule } from '@angular/common';
import { PasswordMatchValidator, PasswordValidator } from "../../password-validator";


@Component({
  selector: 'app-form-sub',
  imports: [FormsModule, ReactiveFormsModule, CustomValidator, CommonModule, PasswordValidator],
  templateUrl: './form-sub.html',
  styleUrl: './form-sub.scss'
})
export class FormSub {
logger() {
  console.log(':::name', this.group.value.name, ':::surname', this.group.value.surname, ':::fiscal code', this.group.value.fsCode
    , ':::password:', this.group.value.passwordGroup?.password, ':::confirm password:', this.group.value.passwordGroup?.confPassword
  );
}

group= new FormGroup({
  name: new FormControl('', [Validators.required]),
  surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
  fsCode: new FormControl('', [Validators.required]),
  passwordGroup : new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confPassword: new FormControl('', [Validators.required])
  }, [PasswordMatchValidator] )
  }, [])
 
ngOnInit() {
  this.group.get('surname')?.valueChanges.subscribe(value => {
    console.log(':::surname value', value);
  });
}

fscodeGroup = new FormGroup({
  fiscalCode: new FormControl('', [Validators.required]),
  documentGroup: new FormGroup({
    documentType: new FormControl('', [Validators.required]),
  }, []),
}, [] );

}
