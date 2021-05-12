import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {appCounterReducer, AppCounterState} from "./counter";

export interface State {
  counter: AppCounterState
}

export const reducers: ActionReducerMap<State> = {
  counter: appCounterReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
