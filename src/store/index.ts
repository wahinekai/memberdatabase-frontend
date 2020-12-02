import { Middleware, Store, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';
import { ReduxState } from '../model';
import rootReducer from './reducers';

/**
 *
 */
export const configureStore = () => {
    const middlewares: Middleware[] = [thunk];

    if (process.env.NODE_ENV === 'development') {
        middlewares.push(logger);
    }

    const enhancers = applyMiddleware(...middlewares);

    const store = createStore(rootReducer, enhancers);
    return store;
};

/**
 * @param store
 */
export const createPersistor = (store: Store<ReduxState>) => persistStore(store);
