import { Component, inject, Input} from '@angular/core';
import { Counter } from '../services/counter';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  cService = inject(Counter)
  }



