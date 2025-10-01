import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';
import { CustomValidator } from "../validetors/custom-validator";
import { PasswordValidator } from '../validetors/password-validator';

@Component({
  selector: 'app-registration',
  imports: [FormsModule, CommonModule, CustomValidator, PasswordValidator],
  templateUrl: './registration.html',
  styleUrls: ['./registration.scss']
})
export class Registration {
  onSubmit(registrationForm: NgForm){
  }
}
