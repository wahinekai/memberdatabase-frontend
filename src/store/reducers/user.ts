/**
 * @file Reducer functions based on user interaction
 */

import { ReduxState, User, noUser } from '../../model';

/**
 * Update the redux state by setting the user equal to the user passed in
 *
 * @param state - previous redux state
 * @param user - User passed in action
 * @returns The new redux state
 */
export const setUser = (state: ReduxState, user: User): ReduxState => {
    // Add token to user if not included
    if (state.user !== noUser && !user.token) {
        state.user.token = user.token;
    }
    return {
        ...state,
        user,
    };
};

/**
 * Update the rexux state by clearing the user
 *
 * @param state - previous redux state
 * @returns The new redux state
 */
export const clearUser = (state: ReduxState): ReduxState => {
    return {
        ...state,
        user: noUser,
    };
};
