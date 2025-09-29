import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Counter } from './services/counter';
import { Home } from "./home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  cService = inject(Counter)
  //protected readonly title = signal('progetHome');
  counter : number = 0;

  onCounterChange(change: number) {
    this.counter += change;
  }
}
