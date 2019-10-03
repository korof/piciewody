import { Action } from '@store/models';

export enum HomeActionTypes {
    FIRST_ONE = '[HOME] First One',
}

export class FirstOne implements Action<string> {
    readonly type = HomeActionTypes.FIRST_ONE;
    constructor(public payload: string) {}
}

export type HomeAction = FirstOne;
