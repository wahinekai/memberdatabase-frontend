/**
 * @file Helper functions to reload redux state from persisted state, if it exists
 */

import { ReduxState, initialReduxState } from '../../model';
import { loadSettings, signInAuthProvider } from '../../utils';

/**
 * Attempts to re-create the redux store from saved information.  Returns redux
 * to initial state on failure.
 *
 * @param _state Previous redux state, unused
 * @param payload The persisted state from web storage, if it exists
 * @returns The persisted (or an initial) redux state
 */
export const rehydrate = (_state: ReduxState, payload: unknown): ReduxState => {
    try {
        // Pull user from persisted store
        const persistedStore = payload as ReduxState;

        const { accessTokenScopes } = loadSettings().auth;

        // Get access token for API requests
        signInAuthProvider.getAccessToken({
            scopes: accessTokenScopes,
        });

        return persistedStore;
    } catch (err) {
        return initialReduxState;
    }
};
