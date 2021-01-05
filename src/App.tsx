/**
 * @file entrypoint for application
 */

import React, { FC, StrictMode } from 'react';
import AzureAD from 'react-aad-msal';
import { ErrorBoundary } from 'react-error-boundary';
import HttpsRedirect from 'react-https-redirect';

import { MainRouter } from './routers';
import { ErrorPage } from './pages';
import { authProvider } from './utils';
import { ApplicationNavbar } from './components';
import { IsAdminProvider } from './providers';

/**
 * Application entrypoint definition - root of the React DOM tree
 *
 * @returns The whole react dom tree
 */
const App: FC = () => {
    return (
        <StrictMode>
            <HttpsRedirect>
                <ErrorBoundary FallbackComponent={ErrorPage}>
                    <AzureAD provider={authProvider} forceLogin={true}>
                        <IsAdminProvider>
                            <ApplicationNavbar />
                            <MainRouter />
                        </IsAdminProvider>
                    </AzureAD>
                </ErrorBoundary>
            </HttpsRedirect>
        </StrictMode>
    );
};

export default App;
