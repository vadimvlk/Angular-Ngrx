import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {counterSelector, decrease, increase, reset} from "./reducers/counter";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private _store: Store) {
    this.updatedAt = 0;
  }

  updatedAt: number;

  count$ = this._store.select(counterSelector)


  get isGreaterZero(): boolean {
    let val = false;
    this.count$.subscribe(x => val = x > 0)
    return val;
  }

  increase() {
    this._store.dispatch(increase());

    this.updatedAt = Date.now();
  }

  decrease() {
    this._store.dispatch(decrease());

    this.updatedAt = Date.now();
  }

  resetCount() {
    this._store.dispatch(reset());

    this.updatedAt = Date.now();
  }
}
