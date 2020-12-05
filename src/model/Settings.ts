/**
 * @file type definition for global application settings/context
 */

import { AuthenticationParameters, Configuration } from 'msal';
import { IMsalAuthProviderConfig } from 'react-aad-msal';

export type Settings = EnvironmentSettings & GlobalSettings;

export type EnvironmentSettings = {
    backendEndpoint: string;
    auth: {
        signInConfig: Configuration;
        authenticationParameters: AuthenticationParameters;
        accessTokenScopes: string[];
    };
};

export type GlobalSettings = {
    supportedCountries: string[];
    auth: {
        options: IMsalAuthProviderConfig;
    };
};
