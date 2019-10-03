import { HomeAction, HomeActionTypes } from './actions';

export interface HomeState {
    error: string | null;
    firstOne: string | undefined;
}

const initialState: HomeState = {
    error: null,
    firstOne: undefined,
};

export function reducer(state: HomeState = initialState, action: HomeAction): HomeState {
    switch (action.type) {
        case HomeActionTypes.FIRST_ONE:
            return { ...state, firstOne: action.payload};

        default:
            return state;
    }
}
