import { ReduxState, initialReduxState } from '../../model';
import { setAuthTokenHeader } from '../../utils/apicall';

/**
 * @param _state
 * @param payload
 */
export const rehydrate = (_state: ReduxState, payload: unknown) => {
    try {
        // Pull user from persisted store
        const persistedStore = payload as ReduxState;

        // Set auth token header
        if (persistedStore.user.token) {
            setAuthTokenHeader(persistedStore.user.token);
        }
        return persistedStore;
    } catch (err) {
        return initialReduxState;
    }
};
