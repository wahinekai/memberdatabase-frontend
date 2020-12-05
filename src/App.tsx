/**
 * @file entrypoint for application
 */

import React, { FC, StrictMode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import AzureAD from 'react-aad-msal';

import { Loading } from './components';
import { store, createPersistor } from './store';
import { MainRouter } from './routers';
import { signInAuthProvider } from './utils';

/**
 * Application entrypoint definition - root of the React DOM tree
 *
 * @returns The whole react dom tree
 */
const App: FC = () => {
    return (
        <StrictMode>
            <Provider store={store}>
                <PersistGate loading={<Loading />} persistor={createPersistor(store)}>
                    <AzureAD provider={signInAuthProvider} forceLogin={true} reduxStore={store}>
                        <MainRouter />
                    </AzureAD>
                </PersistGate>
            </Provider>
        </StrictMode>
    );
};

export default App;
