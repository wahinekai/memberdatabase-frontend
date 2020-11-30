import { apiCallAsync, setAuthTokenHeader, clearAuthTokenHeader } from '../../utils/apicall';
import { ActionTypes, LoginObject, ReduxTypes, RegisterObject, User } from '../../model';
import { Dispatch } from '../../model/ReduxTypes';

export const onLogin: ReduxTypes.onLogin = (data): ReduxTypes.Thunk => {
    return (dispatch) => {
        loginAsync(dispatch, data);
    };
};

export const onRegister: ReduxTypes.onRegister = (data): ReduxTypes.Thunk => {
    return (dispatch) => {
        registerAsync(dispatch, data);
    };
};

const loginAsync = async (dispatch: Dispatch, data: LoginObject) => {
    const user = await apiCallAsync<User>('POST', '/user/login', data);
    setAuthTokenHeader(user.token);
    dispatch({
        type: ActionTypes.SET_USER,
        user,
    });
};

const registerAsync = async (dispatch: Dispatch, data: RegisterObject) => {
    const user = await apiCallAsync<User>('POST', '/user/register', data);
    setAuthTokenHeader(user.token);
    dispatch({
        type: ActionTypes.SET_USER,
        user,
    });
};

export const logout = () => {
    clearAuthTokenHeader();
    return {
        type: ActionTypes.CLEAR_USER,
    };
};
