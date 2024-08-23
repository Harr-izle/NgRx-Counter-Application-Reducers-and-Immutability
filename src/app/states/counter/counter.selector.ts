import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectCounterState = (state: AppState) => state.counter;
export const selectCounterHistoryState = (state: AppState) => state.counterHistory;

export const selectCount = createSelector(
    selectCounterState,
    (state) => state.count
);

export const selectCounterHistory = createSelector(
    selectCounterHistoryState,
    (state) => state.history
);