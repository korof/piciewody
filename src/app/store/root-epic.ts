import { homeEpic } from '@home';
import { combineEpics } from 'redux-observable';

export const rootEpic = combineEpics(homeEpic);
