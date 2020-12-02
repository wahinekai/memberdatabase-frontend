/**
 * @file Redux actions regarding users
 */

import { ActionTypes, ReduxTypes, User } from '../../model';
import { MethodTypes } from '../../model/Http';
import { apiCallAsync } from '../../utils/apicall';

/**
 * Wrapper function around getUserAsync for redux thunk
 *
 * @returns The redux thunk
 */
export const getUser = (): ReduxTypes.Thunk => {
    return (dispatch, getState) => {
        getUserAsync(dispatch, getState);
    };
};

/**
 * Wrapper function around updateUserAsync for redux thunk
 *
 * @param data - The data to update the user with
 * @returns The redux thunk
 */
export const updateUser = (data: User): ReduxTypes.Thunk => {
    return (dispatch) => {
        updateUserAsync(dispatch, data);
    };
};

/**
 * Updates the user information in the Redux store from the backend
 *
 * @param dispatch - Redux dispatch
 * @param getState - Redux ability to get the state of the store
 */
const getUserAsync = async (dispatch: ReduxTypes.Dispatch, getState: ReduxTypes.GetState) => {
    const data = getState().user;
    const user = await apiCallAsync<User>(MethodTypes.GET, `/user/profile/get?username=${data.email}`);
    dispatch({
        type: ActionTypes.SET_USER,
        user,
    });
};

/**
 * Updates the user information in the backend, then updates the redux store on success
 *
 * @param dispatch - Redux dispatch
 * @param data - New user data to update the backend with
 */
const updateUserAsync = async (dispatch: ReduxTypes.Dispatch, data: User) => {
    const user = await apiCallAsync<User>(MethodTypes.PUT, `/user/profile/update?username=${data.email}`, data);
    dispatch({
        type: ActionTypes.SET_USER,
        user,
    });
};
