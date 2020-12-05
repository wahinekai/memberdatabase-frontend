/**
 * @file Reducer functions based on authentication.  Note - no state related to authentication is saved here.
 * However, the axios access token for the backend is set here.
 */

import { AccessTokenResponse, IAccountInfo } from 'react-aad-msal';
import { ReduxState } from '../../model';
import { clearAuthTokenHeader, loadSettings, setAuthTokenHeader, signInAuthProvider } from '../../utils';

/**
 * Update the redux state on acquisition of access token
 *
 * @param state - previous redux state
 * @param payload - The payload of the action
 * @returns The new redux state
 */
export const acquiredAccessTokenSuccess = (state: ReduxState, payload: AccessTokenResponse): ReduxState => {
    setAuthTokenHeader(payload.accessToken);
    return state;
};

/**
 * Update the redux state on acquisition of access token failure
 *
 * @param state - previous redux state
 * @returns The new redux state
 */
export const acquiredAccessTokenError = (state: ReduxState): ReduxState => {
    clearAuthTokenHeader();
    return state;
};

/**
 * Update the redux state on successful login
 *
 * @param state - previous redux state
 * @param _payload - The payload of the action
 * @returns The new redux state
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const loginSuccess = (state: ReduxState, _payload: IAccountInfo): ReduxState => {
    const { accessTokenScopes } = loadSettings().auth;

    // Get access token for API requests
    signInAuthProvider.getAccessToken({
        scopes: accessTokenScopes,
    });

    return state;
};

/**
 * Update the redux state on successful logout
 *
 * @param state - previous redux state
 * @returns The new redux state
 */
export const logoutSuccess = (state: ReduxState): ReduxState => {
    clearAuthTokenHeader();
    return state;
};
