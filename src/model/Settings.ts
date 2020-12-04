/**
 * @file type definition for global application settings/context
 */

import { AuthenticationParameters, Configuration } from 'msal';
import { IMsalAuthProviderConfig } from 'react-aad-msal';

export type Settings = EnvironmentSettings & GlobalSettings;

export type EnvironmentSettings = {
    backendEndpoint: string;
    msal: {
        signInConfig: Configuration;
        authenticationParameters: AuthenticationParameters;
    };
};

export type GlobalSettings = {
    supportedCountries: string[];
    msal: {
        options: IMsalAuthProviderConfig;
    };
};
