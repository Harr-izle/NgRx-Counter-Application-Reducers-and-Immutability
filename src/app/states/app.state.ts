import { CounterHistoryState } from "./counter/counter-history.reducer";
import { CounterState } from "./counter/counter.reducer";

export interface AppState{
    counter: CounterState
    counterHistory: CounterHistoryState;
}