import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './states/counter/counter.reducer';
import { counterHistoryReducer } from './states/counter/counter-history.reducer';
import { logger } from './states/counter/meta-reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({}, { metaReducers: [logger] }),
    provideState({ name: 'counter', reducer: counterReducer }),
    provideState({ name: 'counterHistory', reducer: counterHistoryReducer }),
  ]
};