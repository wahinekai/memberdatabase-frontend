import { initialReduxState, ReduxState } from '../../model';
import { setAuthTokenHeader } from '../../utils/apicall';

export const rehydrate = (_state: ReduxState, payload: object) => {
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
