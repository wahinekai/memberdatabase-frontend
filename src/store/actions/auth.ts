/**
 * @file Redux actions regarding authentication
 */

import { ActionTypes, ReduxTypes } from '../../model';
import { signInAuthProvider } from '../../utils';

/**
 * Wrapper function around logoutThunk for redux thunk
 *
 * @returns The redux thunk
 */
export const logout = (): ReduxTypes.Thunk => {
    return (dispatch) => {
        logoutThunk(dispatch);
    };
};

/**
 * Logout the user, updating the redux store as necessary
 *
 * @param dispatch - Redux dispatch
 */
const logoutThunk = (dispatch: ReduxTypes.Dispatch) => {
    // Clear user from the redux store
    dispatch({
        type: ActionTypes.CLEAR_USER,
    });

    // Logout
    signInAuthProvider.logout();
};
