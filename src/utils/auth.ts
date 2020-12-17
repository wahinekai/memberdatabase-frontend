/**
 * @file Helper library for MS authentication through AAD B2C
 */

import { MsalAuthProvider } from 'react-aad-msal';
import { settings } from './settings';

/**
 * Creates a MSAL auth provider with the given settings
 *
 * @returns A Msal auth provider
 */
const createSignInAuthProvider = (): MsalAuthProvider => {
    const {
        auth: { options, authenticationParameters, signInConfig },
    } = settings;
    return new MsalAuthProvider(signInConfig, authenticationParameters, options);
};

export const authProvider = createSignInAuthProvider();
