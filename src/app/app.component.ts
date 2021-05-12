import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  counter: number = 0;

  get isGreaterZero (): boolean {
    return this.counter> 0
  }

  increase() {
    this.counter++;
  }

  decrease() {
    this.counter--;
  }

  resetCount() {
    this.counter = 0;
  }
}
