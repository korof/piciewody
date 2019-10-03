import { Action } from '@store/models';

export enum HomeActionTypes {
    CLEAR_PROGRESS = '[HOME] Clear Progress',
    DRINK_WATER = '[HOME] Drink Water',
}

export class ClearProgress implements Action<string> {
    readonly type = HomeActionTypes.CLEAR_PROGRESS;
}
export class DrinkWater implements Action<number> {
    readonly type = HomeActionTypes.DRINK_WATER;
    constructor(public payload: number) {}
}

export type HomeAction = ClearProgress | DrinkWater;
