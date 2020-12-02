/**
 * @file Holds functions needed to create and persist the redux store
 */

import { Middleware, Store, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Persistor, persistStore } from 'redux-persist';

import logger from 'redux-logger';
import { Action, ReduxState } from '../model';
import rootReducer from './reducers';

/**
 * Configure and return the redux store
 *
 * @returns the redux store
 */
export const configureStore = (): Store<ReduxState, Action> => {
    const middlewares: Middleware[] = [thunk];

    if (process.env.NODE_ENV === 'development') {
        middlewares.push(logger);
    }

    const enhancers = applyMiddleware(...middlewares);

    const store = createStore(rootReducer, enhancers);
    return store;
};

/**
 * Persist a redux store using the redux persist module
 *
 * @param store - redux store to persist
 * @returns A persisted store
 */
export const createPersistor = (store: Store<ReduxState, Action>): Persistor => persistStore(store);
