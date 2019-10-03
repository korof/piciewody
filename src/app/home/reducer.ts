import { HomeAction, HomeActionTypes } from './actions';

export interface HomeState {
    drunkWater: number;
    error: string | null;
}

const initialState: HomeState = {
    drunkWater: 0,
    error: null,
};

export function reducer(state: HomeState = initialState, action: HomeAction): HomeState {
    switch (action.type) {
        case HomeActionTypes.CLEAR_PROGRESS:
            return initialState;

        case HomeActionTypes.DRINK_WATER:
            return { ...state, drunkWater: action.payload };

        default:
            return state;
    }
}
