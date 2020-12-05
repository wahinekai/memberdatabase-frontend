/**
 * @file Types related to Redux Actions
 */

import { RehydrateAction } from 'redux-persist';
import { User } from '.';

export enum ActionTypes {
    CLEAR_USER = 'user/CLEAR_USER',
    SET_USER = 'user/SET_USER',
    REHYDRATE = 'persist/REHYDRATE', // From redux-persist, can't use imported const in enum
}

type SetUserAction = {
    type: ActionTypes.SET_USER;
    payload: User;
};

type ClearUserAction = {
    type: ActionTypes.CLEAR_USER;
};

type UserActions = SetUserAction | ClearUserAction;

type Actions = UserActions | RehydrateAction;

export default Actions;
