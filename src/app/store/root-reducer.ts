import { reducer as homeReducer } from '@home';
import { combineReducers } from 'redux';
import { Reducer } from 'redux';

import { AppAction, AppState } from './models';

export const rootReducer: Reducer<AppState, AppAction> = combineReducers({
    home: homeReducer,
});
