/**
 * @file Types related to Redux Actions
 */

import { RehydrateAction } from 'redux-persist';
import { User } from '.';

export enum ActionTypes {
    CLEAR_USER = 'user/CLEAR_USER',
    SET_USER = 'user/SET_USER',
    SET_TOKEN = 'authentication/SET_TOKEN',
    // eslint-disable-next-line no-secrets/no-secrets
    CLEAR_TOKEN = 'authentication/CLEAR_TOKEN',
    REHYDRATE = 'persist/REHYDRATE', // From redux-persist, can't use imported const in enum
}

type SetUserAction = {
    type: ActionTypes.SET_USER;
    user: User;
};

type SetTokenAction = {
    type: ActionTypes.SET_TOKEN;
    token: string;
};

type ClearTokenAction = {
    type: ActionTypes.CLEAR_TOKEN;
};

type ClearUserAction = {
    type: ActionTypes.CLEAR_USER;
};

type Action = SetUserAction | ClearUserAction | RehydrateAction | SetTokenAction | ClearTokenAction;

export default Action;
