/**
 * @file Types related to Redux Actions
 */

import { AuthError } from 'msal';
import { AccessTokenResponse, AuthenticationActions, IAccountInfo } from 'react-aad-msal';
import { RehydrateAction } from 'redux-persist';
import { User } from '.';

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

type UserActions = SetUserAction | ClearUserAction;

type CustomActions = UserActions | RehydrateAction;

type AcquiredAccessTokenSuccessAction = {
    type: AuthenticationActions.AcquiredAccessTokenSuccess;
    payload: AccessTokenResponse;
};

type AcquiredAccessTokenErrorAction = {
    type: AuthenticationActions.AcquiredAccessTokenError;
    payload: AuthError;
};

type LoginSuccessAction = {
    type: AuthenticationActions.LoginSuccess;
    payload: IAccountInfo;
};

type LogoutSuccessAction = {
    type: AuthenticationActions.LogoutSuccess;
};

type AadActions =
    | AcquiredAccessTokenSuccessAction
    | AcquiredAccessTokenErrorAction
    | LoginSuccessAction
    | LogoutSuccessAction;

type Action = CustomActions | AadActions;

export default Action;
