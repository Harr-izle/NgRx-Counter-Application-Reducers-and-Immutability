import { counterReducer, initialCounterState } from './counter.reducer';
import * as CounterActions from './counter.action';

describe('Counter Reducer', () => {
  it('should increment the count', () => {
    const action = CounterActions.increment();
    const state = counterReducer(initialCounterState, action);
    expect(state.count).toBe(1);
  });

  it('should decrement the count', () => {
    const action = CounterActions.decrement();
    const state = counterReducer({ ...initialCounterState, count: 1 }, action);
    expect(state.count).toBe(0);
  });

  it('should not decrement below zero', () => {
    const action = CounterActions.decrement();
    const state = counterReducer(initialCounterState, action);
    expect(state.count).toBe(0);
  });

  it('should reset the count', () => {
    const action = CounterActions.reset();
    const state = counterReducer({ ...initialCounterState, count: 10 }, action);
    expect(state.count).toBe(0);
  });

  it('should set the count', () => {
    const action = CounterActions.setCount({ count: 5 });
    const state = counterReducer(initialCounterState, action);
    expect(state.count).toBe(5);
  });

  it('should undo the last action', () => {
    const incrementAction = CounterActions.increment();
    let state = counterReducer(initialCounterState, incrementAction);
    expect(state.count).toBe(1);

    const undoAction = CounterActions.undo();
    state = counterReducer(state, undoAction);
    expect(state.count).toBe(0);
  });
});