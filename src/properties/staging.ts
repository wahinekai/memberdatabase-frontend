/**
 * @file Constant definition for development environment
 */

import { Settings } from '../model';
import globalSettings from './global';

const tenant = 'devwahinekaimemberdbauth.onmicrosoft.com';
const applicationID = 'f1837521-8fa7-4b51-b860-ba1154a2e8d3';
const tenantSubdomain = tenant.split('.')[0];
const instance = `https://${tenantSubdomain}.b2clogin.com/tfp/`;
const reactRedirectUri = 'https://development-wahinekaimemberdatabase.azurewebsites.net';

const signInPolicy = 'B2C_1_signup_signin_api';
const signInAuthority = `${instance}${tenant}/${signInPolicy}`;
const frontendAssetsPrefix = 'https://devmemberdatabasestorage.blob.core.windows.net/frontend-assets';

const settings: Readonly<Settings> = {
    backendEndpoint: 'https://backend-development-wahinekaimemberdatabase.azurewebsites.net/api/v1',
    frontendAssetsPrefix,
    emptyProfileImage: `${frontendAssetsPrefix}/no-image.png`,
    ...globalSettings,
    auth: {
        authenticationParameters: {
            scopes: [
                'https://graph.microsoft.com/Directory.Read.All',
                `https://${tenant}/wahinekaifrontend-staging/user_impersonation`,
            ],
        },
        signInConfig: {
            auth: {
                authority: signInAuthority,
                clientId: applicationID,
                redirectUri: reactRedirectUri,
                validateAuthority: false,
                postLogoutRedirectUri: reactRedirectUri,
            },
            cache: {
                cacheLocation: 'sessionStorage',
                storeAuthStateInCookie: true,
            },
        },
        options: globalSettings.auth.options,
        accessTokenScopes: [`https://${tenant}/wahinekaibackend/user_impersonation`],
    },
};

export default settings;
