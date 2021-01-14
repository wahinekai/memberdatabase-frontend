/**
 * @file type definition for global application settings/context
 */

import { AuthenticationParameters, Configuration } from 'msal';
import { IMsalAuthProviderConfig } from 'react-aad-msal';

export type Settings = EnvironmentSettings & GlobalSettings;

export type EnvironmentSettings = {
    backendEndpoint: string;
    frontendAssetsPrefix: string;
    emptyProfileImage: string;
    templateCsv: string;
    auth: {
        signInConfig: Configuration;
        authenticationParameters: AuthenticationParameters;
        accessTokenScopes: string[];
    };
};

export type GlobalSettings = {
    auth: {
        options: IMsalAuthProviderConfig;
    };
};
