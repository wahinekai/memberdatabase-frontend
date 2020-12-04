/**
 * @file Helper library for MS authentication through AAD B2C
 */

import { MsalAuthProvider } from 'react-aad-msal';
import { Settings } from '../model';
import { loadSettings } from './loadSettings';

/**
 * Creates a MSAL auth provider with the given settings
 *
 * @param settings Global settings for the application
 * @returns A Msal auth provider
 */
const createSignInAuthProvider = (settings: Settings): MsalAuthProvider => {
    console.log(settings);
    const {
        msal: { options, authenticationParameters, signInConfig },
    } = settings;
    return new MsalAuthProvider(signInConfig, authenticationParameters, options);
};

export const signInAuthProvider = createSignInAuthProvider(loadSettings());
