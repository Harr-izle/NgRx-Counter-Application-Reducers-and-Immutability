import { createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.action';

export interface CounterHistoryState {
  history: number[];
}

export const initialCounterHistoryState: CounterHistoryState = {
  history: []
};

export const counterHistoryReducer = createReducer(
  initialCounterHistoryState,
  on(CounterActions.increment, CounterActions.decrement, CounterActions.setCount, 
     CounterActions.incrementBy, CounterActions.decrementBy, CounterActions.multiply, 
     (state, action) => ({
    ...state,
    history: [...state.history, (action as any).count]
  })),
  on(CounterActions.undo, (state) => ({
    ...state,
    history: state.history.slice(0, -1)
  })),
  on(CounterActions.reset, () => ({
    history: []
  }))
);