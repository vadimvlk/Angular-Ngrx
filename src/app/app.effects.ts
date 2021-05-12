import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {decrease, increase, reset, setUpdatedAt} from "./reducers/counter";
import {map} from "rxjs/operators";

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {
  }

  updatedAt$ = createEffect(() => this.actions$.pipe(
    ofType(increase, decrease, reset),
    map(_ => setUpdatedAt({updatedAt: Date.now()}))
  ))
}
