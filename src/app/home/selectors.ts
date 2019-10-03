import { AppState } from '@store/models';
import { prop } from 'ramda';
import { createSelector } from 'reselect';

import { HomeState } from './reducer';

export const getHomeState = (state: AppState): HomeState => state.home;

export const getFirstOne = createSelector(
    getHomeState,
    prop('firstOne'),
);
