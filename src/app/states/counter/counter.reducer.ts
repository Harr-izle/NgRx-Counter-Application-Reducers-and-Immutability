import { createReducer, on } from "@ngrx/store";
import * as CounterActions from "./counter.action";

export interface CounterState {
    count: number;
}

export const initialCounterState: CounterState = {
    count: 0
};

export const counterReducer = createReducer(
    initialCounterState,
    on(CounterActions.increment, (state) => ({ 
        ...state, 
        count: state.count + 1
    })),
    on(CounterActions.decrement, (state) => ({ 
        ...state, 
        count: Math.max(0, state.count - 1)
    })),
    on(CounterActions.reset, () => ({ 
        count: 0
    })),
    on(CounterActions.setCount, (state, { count }) => ({ 
        ...state, 
        count
    })),
    on(CounterActions.incrementBy, (state, { amount }) => ({ 
        ...state, 
        count: state.count + amount
    })),
    on(CounterActions.decrementBy, (state, { amount }) => ({ 
        ...state, 
        count: Math.max(0, state.count - amount)
    })),
    on(CounterActions.multiply, (state, { factor }) => ({ 
        ...state, 
        count: state.count * factor
    })),
    on(CounterActions.undo, (state) => ({
        ...state,
        count: state.count
    }))
);