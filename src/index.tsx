/**
 * @file Entrypoint for the project. Sets up the Redux persisted store, and
 * renders the MainRouter container as the root container
 */

import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGamepad, faHandshake, faShoppingCart, faTrophy, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

import _$ from 'jquery'; // eslint-disable-line @typescript-eslint/no-unused-vars
import _Popper from 'popper.js'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { Loading, MainRouter } from './components';
import { configureStore, createPersistor } from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const store = configureStore();

library.add(faGamepad, faTrophy, faUser, faShoppingCart, faUsers, faHandshake);

render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate loading={<Loading />} persistor={createPersistor(store)}>
                <MainRouter />
            </PersistGate>
        </Provider>
    </StrictMode>,
    document.getElementById('root')
);
