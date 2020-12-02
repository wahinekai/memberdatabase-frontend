/**
 * @file Redux Action functions related to authentication
 */

import { apiCallAsync, clearAuthTokenHeader, setAuthTokenHeader } from '../../utils';
import { ActionTypes, HttpMethodTypes, LoginObject, ReduxTypes, RegisterObject, UserWithToken } from '../../model';
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
 * Wrapper function around onLogoutThunk
 *
 * @returns A redux thunk
 */
export const onLogout = (): ReduxTypes.Thunk => {
    return (dispatch) => {
        onLogoutThunk(dispatch);
    };
};

/**
 * Logs in the user, setting up the user in the redux store as the return from the login call
 *
 * @param dispatch - Redux async dispatch
 * @param data - Login data
 */
const loginAsync = async (dispatch: Dispatch, data: LoginObject) => {
    // Login with the backend
    const user = await apiCallAsync<UserWithToken>(HttpMethodTypes.POST, '/authentication/login', data);

    // Set auth token header
    setAuthTokenHeader(user.token);

    // Set user in redux store
    dispatch({
        type: ActionTypes.SET_USER,
        user,
    });

    // Set authentication token in redux store
    dispatch({
        type: ActionTypes.SET_TOKEN,
        token: user.token,
    });
};

/**
 * Registers the user, setting up the user in the redux store as the return from the register call
 *
 * @param dispatch - Redux async dispatch
 * @param data - Registration data
 */
const registerAsync = async (dispatch: Dispatch, data: RegisterObject) => {
    // Register with the backend
    const user = await apiCallAsync<UserWithToken>(HttpMethodTypes.POST, '/authentication/register', data);

    // Set auth token header
    setAuthTokenHeader(user.token);

    // Set user in redux store
    dispatch({
        type: ActionTypes.SET_USER,
        user,
    });

    // Set authentication token in redux store
    dispatch({
        type: ActionTypes.SET_TOKEN,
        token: user.token,
    });
};

/**
 * Logs the user out, clearing the Redux store and Auth Token Header
 *
 * @param dispatch - Redux async dispatch
 */
const onLogoutThunk = (dispatch: Dispatch) => {
    // Clear token header for API calls
    clearAuthTokenHeader();

    // Clear user from store
    dispatch({
        type: ActionTypes.CLEAR_USER,
    });

    // Clear token from store
    dispatch({
        type: ActionTypes.CLEAR_TOKEN,
    });
};
