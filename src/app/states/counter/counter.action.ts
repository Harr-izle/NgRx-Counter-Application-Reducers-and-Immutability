import { createAction, props } from "@ngrx/store";

export const INCREMENT = '[Counter] Increment';
export const DECREMENT = '[Counter] Decrement';
export const RESET = '[Counter] Reset';
export const SET_COUNT = '[Counter] Set Count';
export const INCREMENT_BY = '[Counter] Increment By';
export const DECREMENT_BY = '[Counter] Decrement By';
export const MULTIPLY = '[Counter] Multiply';
export const UNDO = '[Counter] Undo';

export const increment = createAction(INCREMENT, props<{ count: number }>());
export const decrement = createAction(DECREMENT, props<{ count: number }>());
export const reset = createAction(RESET);
export const setCount = createAction(SET_COUNT, props<{ count: number }>());
export const incrementBy = createAction(INCREMENT_BY, props<{ amount: number, count: number }>());
export const decrementBy = createAction(DECREMENT_BY, props<{ amount: number, count: number }>());
export const multiply = createAction(MULTIPLY, props<{ factor: number, count: number }>());
export const undo = createAction(UNDO);

export type CounterActions = 
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof reset>
  | ReturnType<typeof setCount>
  | ReturnType<typeof incrementBy>
  | ReturnType<typeof decrementBy>
  | ReturnType<typeof multiply>
  | ReturnType<typeof undo>;