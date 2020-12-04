/* eslint-disable react-redux/no-unused-prop-types */
/**
 * @file Definition for Logout component connecting to MSAL authentication
 */

import React, { FC } from 'react';
import AzureAD from 'react-aad-msal';
import { signInAuthProvider } from '../../utils';
import LogoutButton from './LogoutButton';

/**
 * Connector for login button to MSAL authentication
 *
 * @returns The login button, connected to AzureAD's logout function
 */
const Login: FC = () => (
    <AzureAD provider={signInAuthProvider} forceLogin={true}>
        {({ logout }: { logout: () => void }) => <LogoutButton onLogout={logout} />}
    </AzureAD>
);

export default Login;
