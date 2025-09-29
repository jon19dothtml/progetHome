import { Component, Output, EventEmitter, inject } from '@angular/core';
import { Counter } from '../services/counter';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  cSerivce = inject(Counter)
  @Output() increment = new EventEmitter();
  //@Output() decrement = new EventEmitter();

  
  onIncrement() {
    this.increment.emit(1);
  }

  onDecrement() {
  this.increment.emit(-1);
  }

  // onDecrement() {
  // }
}
