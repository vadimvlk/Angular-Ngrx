import {createAction, createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";

export interface AppCounterState {
  counter: number;
}

export const initialState: AppCounterState = {
  counter: 0,
};


export const increase = createAction("[APP.COUNTER] increase")
export const decrease = createAction("[APP.COUNTER] decrease")
export const reset = createAction("[APP.COUNTER] reset")


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
  }))
)


export const featureSelector = createFeatureSelector<AppCounterState>("counter");
export const counterSelector = createSelector(featureSelector, state => state.counter);
``
