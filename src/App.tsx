/**
 * @file entrypoint for application
 */

import React, { FC, StrictMode } from 'react';
import AzureAD from 'react-aad-msal';
import { ErrorBoundary } from 'react-error-boundary';

import { MainRouter } from './routers';
import { ErrorPage } from './pages';
import { authProvider } from './utils';
import { ApplicationNavbar } from './components';

/**
 * Application entrypoint definition - root of the React DOM tree
 *
 * @returns The whole react dom tree
 */
const App: FC = () => {
    return (
        <StrictMode>
            <ErrorBoundary FallbackComponent={ErrorPage}>
                <AzureAD provider={authProvider} forceLogin={true}>
                    <ApplicationNavbar />
                    <MainRouter />
                </AzureAD>
            </ErrorBoundary>
        </StrictMode>
    );
};

export default App;
