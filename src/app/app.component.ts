import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    this.updatedAt = 0;
    this.counter = 0;
  }

  counter: number;
  updatedAt: number;

  get isGreaterZero(): boolean {
    return this.counter > 0
  }

  increase() {
    this.counter++;
    this.updatedAt = Date.now();
  }

  decrease() {
    this.counter--;
    this.updatedAt = Date.now();
  }

  resetCount() {
    this.counter = 0;
    this.updatedAt = Date.now();
  }
}
