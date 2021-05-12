import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {changeUpdatedAt, counterSelector, decrease, increase, reset, setUpdatedAt} from "./reducers/counter";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private _store: Store) {

  }

  updatedAt$: Observable<any> = this._store.select(changeUpdatedAt);
  count$: Observable<number> = this._store.select(counterSelector)
  isGreaterZero$: Observable<boolean> = this.count$.pipe(
    map(x => x <= 0));
  increase() {
    this._store.dispatch(increase());

  }

  decrease() {
    this._store.dispatch(decrease());


  }

  resetCount() {
    this._store.dispatch(reset());


  }
}
