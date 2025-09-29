import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Counter {
  count: number = 0;
  onCounterChange(change: number) {
    this.count += change;
  }
}
