import {createAction, createFeatureSelector, createReducer, createSelector, on, props} from "@ngrx/store";

export interface AppCounterState {
  counter: number;
  updatedAt?: number;
}

export const initialState: AppCounterState = {
  counter: 0,

};


export const increase = createAction("[APP.COUNTER] increase")
export const decrease = createAction("[APP.COUNTER] decrease")
export const reset = createAction("[APP.COUNTER] reset")
export const setUpdatedAt = createAction("[APP.COUNTER] setUpdateAt", props<{ updatedAt: number }>());


export const appCounterReducer = createReducer(
  initialState,
  on(increase, state => ({
    ...state,
    counter: state.counter + 1
  })),
  on(decrease, state => ({
    ...state,
    counter: state.counter - 1
  })),
  on(reset, state => ({
    ...state,
    counter: 0
  })),
  on(setUpdatedAt, (state, action) => ({
    ...state,
   updatedAt : action.updatedAt
  })))


export const featureSelector = createFeatureSelector<AppCounterState>("counter");
export const counterSelector = createSelector(featureSelector, state => state.counter);
export const changeUpdatedAt = createSelector(featureSelector, state => state.updatedAt);
