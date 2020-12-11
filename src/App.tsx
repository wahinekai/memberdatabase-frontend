/**
 * @file entrypoint for application
 */

import React, { FC, StrictMode } from 'react';
import AzureAD from 'react-aad-msal';

import { MainRouter } from './routers';
import { signInAuthProvider } from './utils';

/**
 * Application entrypoint definition - root of the React DOM tree
 *
 * @returns The whole react dom tree
 */
const App: FC = () => {
    return (
        <AzureAD provider={signInAuthProvider} forceLogin={true}>
            <StrictMode>
                <MainRouter />
            </StrictMode>
        </AzureAD>
    );
};

export default App;
