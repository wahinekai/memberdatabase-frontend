/**
 * @file Create a peprsisted root reducer from functions given
 */

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { ActionTypes, initialReduxState } from '../../model';
import { clearUser, setUser } from './user';
import { createReducer } from './CreateReducer';
import { rehydrate } from './persist';

// Configuration for redux persistance
const persistConfig = {
    storage: storage,
    key: 'reduxStorage',
    stateReconciler: autoMergeLevel2,
};

export default persistReducer(
    persistConfig,
    createReducer(initialReduxState, {
        [ActionTypes.SET_USER]: setUser,
        [ActionTypes.CLEAR_USER]: clearUser,
        [ActionTypes.REHYDRATE]: rehydrate,
    })
);
