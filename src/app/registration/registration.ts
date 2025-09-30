import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';
import { CustomValidator } from "../custom-validator";

@Component({
  selector: 'app-registration',
  imports: [FormsModule, CommonModule, CustomValidator],
  templateUrl: './registration.html',
  styleUrls: ['./registration.scss']
})
export class Registration {
  onSubmit(registrationForm: NgForm){
  }
}
