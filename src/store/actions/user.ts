/**
 * @file Redux actions regarding users
 */

import { ActionTypes, ReduxTypes, HttpMethodTypes, User } from '../../model';
import { apiCallAsync } from '../../utils';

/**
 * Wrapper function around getUserAsync for redux thunk
 *
 * @returns The redux thunk
 */
export const getUser = (): ReduxTypes.Thunk => {
    return (dispatch) => {
        getUserAsync(dispatch);
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
 */
const getUserAsync = async (dispatch: ReduxTypes.Dispatch) => {
    const user = await apiCallAsync<User>(HttpMethodTypes.GET, `/user`);
    console.log(user);
    dispatch({
        type: ActionTypes.SET_USER,
        payload: user,
    });
};

/**
 * Updates the user information in the backend, then updates the redux store on success
 *
 * @param dispatch - Redux dispatch
 * @param data - New user data to update the backend with
 */
const updateUserAsync = async (dispatch: ReduxTypes.Dispatch, data: User) => {
    const user = await apiCallAsync<User>(HttpMethodTypes.PUT, `/user/profile/update?username=${data.email}`, data);
    dispatch({
        type: ActionTypes.SET_USER,
        payload: user,
    });
};
