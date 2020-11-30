import { User } from '.';

import { RehydrateAction } from 'redux-persist';

export enum ActionTypes {
    CLEAR_USER = 'user/CLEAR_USER',
    SET_USER = 'user/SET_USER',
    REHYDRATE = 'persist/REHYDRATE', // From redux-persist, can't use imported const in enum
}

type SetUserAction = {
    type: ActionTypes.SET_USER;
    user: User;
};

type ClearUserAction = {
    type: ActionTypes.CLEAR_USER;
};

type Action = SetUserAction | ClearUserAction | RehydrateAction;

export default Action;
