import { apiCallAsync, clearAuthTokenHeader, setAuthTokenHeader } from '../../utils/apicall';
import { ActionTypes, LoginObject, ReduxTypes, RegisterObject, User } from '../../model';
import { Dispatch } from '../../model/ReduxTypes';

/**
 * @param data
 */
export const onLogin: ReduxTypes.onLogin = (data): ReduxTypes.Thunk => {
    return (dispatch) => {
        loginAsync(dispatch, data);
    };
};

/**
 * @param data
 */
export const onRegister: ReduxTypes.onRegister = (data): ReduxTypes.Thunk => {
    return (dispatch) => {
        registerAsync(dispatch, data);
    };
};

/**
 * @param dispatch
 * @param data
 */
const loginAsync = async (dispatch: Dispatch, data: LoginObject) => {
    const user = await apiCallAsync<User>('POST', '/user/login', data);
    setAuthTokenHeader(user.token);
    dispatch({
        type: ActionTypes.SET_USER,
        user,
    });
};

/**
 * @param dispatch
 * @param data
 */
const registerAsync = async (dispatch: Dispatch, data: RegisterObject) => {
    const user = await apiCallAsync<User>('POST', '/user/register', data);
    setAuthTokenHeader(user.token);
    dispatch({
        type: ActionTypes.SET_USER,
        user,
    });
};

/**
 *
 */
export const logout = () => {
    clearAuthTokenHeader();
    return {
        type: ActionTypes.CLEAR_USER,
    };
};
