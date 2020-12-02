/**
 * @file Redux Action functions related to authentication
 */

import { apiCallAsync, clearAuthTokenHeader, setAuthTokenHeader } from '../../utils/apicall';
import { Action, ActionTypes, HttpMethodTypes, LoginObject, ReduxTypes, RegisterObject, User } from '../../model';
import { Dispatch } from '../../model/ReduxTypes';

/**
 * Wrapper function around loginAsync
 *
 * @param data - The login information to send to the backend
 * @returns A redux thunk
 */
export const onLogin: ReduxTypes.onLogin = (data): ReduxTypes.Thunk => {
    return (dispatch) => {
        loginAsync(dispatch, data);
    };
};

/**
 * Wrapper function around registerAsync
 *
 * @param data - The registration information to send to the backend
 * @returns A redux thunk
 */
export const onRegister: ReduxTypes.onRegister = (data): ReduxTypes.Thunk => {
    return (dispatch) => {
        registerAsync(dispatch, data);
    };
};

/**
 * Logs in the user, setting up the user in the redux store as the return from the login call
 *
 * @param dispatch - Redux async dispatch
 * @param data - Login data
 */
const loginAsync = async (dispatch: Dispatch, data: LoginObject) => {
    const user = await apiCallAsync<User>(HttpMethodTypes.POST, '/user/login', data);
    setAuthTokenHeader(user.token);
    dispatch({
        type: ActionTypes.SET_USER,
        user,
    });
};

/**
 * Registers the user, setting up the user in the redux store as the return from the register call
 *
 * @param dispatch - Redux async dispatch
 * @param data - Registration data
 */
const registerAsync = async (dispatch: Dispatch, data: RegisterObject) => {
    const user = await apiCallAsync<User>(HttpMethodTypes.POST, '/user/register', data);
    setAuthTokenHeader(user.token);
    dispatch({
        type: ActionTypes.SET_USER,
        user,
    });
};

/**
 * Logs the user out, clearing the Redux store and Auth Token Header
 *
 * @returns A redux action clearing the user from the store
 */
export const onLogout = (): Action => {
    clearAuthTokenHeader();
    return {
        type: ActionTypes.CLEAR_USER,
    };
};
