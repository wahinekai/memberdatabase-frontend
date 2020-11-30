import { ActionTypes, ReduxTypes, User } from '../../model';
import { apiCall } from '../../utils/apicall';

export const getUser = (): ReduxTypes.Thunk => {
    return (dispatch, getState) => {
        getUserAsync(dispatch, getState);
    };
};

export const updateUser = (data: User): ReduxTypes.Thunk => {
    return (dispatch) => {
        updateUserAsync(dispatch, data);
    };
};

const getUserAsync = async (dispatch: ReduxTypes.Dispatch, getState: ReduxTypes.GetState) => {
    const data = getState().user;
    const user = await apiCall<User>('GET', `/user/profile/get?username=${data.email}`);
    dispatch({
        type: ActionTypes.SET_USER,
        user,
    });
};

const updateUserAsync = async (dispatch: ReduxTypes.Dispatch, data: User) => {
    const user = await apiCall<User>('POST', `/user/profile/update?username=${data.email}`, data);
    dispatch({
        type: ActionTypes.SET_USER,
        user,
    });
};
