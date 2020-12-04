/**
 * @file Reducer functions based on user interaction
 */

import { ReduxState, User, initialReduxState } from '../../model';

/**
 * Update the redux state by setting the user equal to the user passed in
 *
 * @param state - previous redux state
 * @param user - User passed in action
 * @returns The new redux state
 */
export const setUser = (state: ReduxState, user: User): ReduxState => ({
    ...state,
    user,
});

/**
 * Update the redux state by clearing the user
 *
 * @param state - previous redux state
 * @returns The new redux state
 */
export const clearUser = (state: ReduxState): ReduxState => ({
    ...state,
    user: initialReduxState.user,
});
