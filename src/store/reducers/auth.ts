/**
 * @file Reducer functions based on authentication
 */

import { ReduxState, initialReduxState } from '../../model';

/**
 * Update the redux state by setting the token equal to the token passed in
 *
 * @param state - previous redux state
 * @param token - Authentication token to save
 * @returns The new redux state
 */
export const setToken = (state: ReduxState, token: string): ReduxState => ({
    ...state,
    token,
});

/**
 * Update the redux state by clearing the token
 *
 * @param state - previous redux state
 * @returns The new redux state
 */
export const clearToken = (state: ReduxState): ReduxState => ({
    ...state,
    token: initialReduxState.token,
});
