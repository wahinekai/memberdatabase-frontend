import { applyMiddleware, createStore, Middleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import rootReducer from './reducers';
import logger from 'redux-logger';
import { ReduxState } from '../model';

export const configureStore = () => {
    const middlewares: Middleware[] = [thunk];

    if (process.env.NODE_ENV === 'development') {
        middlewares.push(logger);
    }

    const enhancers = applyMiddleware(...middlewares);

    const store = createStore(rootReducer, enhancers);
    return store;
};

export const createPersistor = (store: Store<ReduxState>) => persistStore(store);
