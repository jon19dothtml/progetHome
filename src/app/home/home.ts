import { Component, inject, Input} from '@angular/core';
import { Counter } from '../services/counter';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  cService = inject(Counter)
  }



