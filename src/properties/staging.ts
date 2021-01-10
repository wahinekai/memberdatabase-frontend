/**
 * @file Constant definition for development environment
 */

import { Settings } from '../model';
import globalSettings from './global';

const tenant = 'wahinekaidevelopment.onmicrosoft.com';
const applicationID = 'feb5b82e-38d1-4b53-ae80-71818e92bb9e';
const tenantSubdomain = tenant.split('.')[0];
const instance = `https://${tenantSubdomain}.b2clogin.com/tfp/`;
const reactRedirectUri = 'https://development-wahinekaimemberdatabase.azurewebsites.net';

const signInPolicy = 'B2C_1_signup_signin_api';
const signInAuthority = `${instance}${tenant}/${signInPolicy}`;
const frontendAssetsPrefix = 'https://wahinekaidevelopment.blob.core.windows.net/frontend-assets';

const settings: Readonly<Settings> = {
    backendEndpoint: 'https://backend-development-wahinekaimemberdatabase.azurewebsites.net/api/v1',
    frontendAssetsPrefix,
    emptyProfileImage: `${frontendAssetsPrefix}/no-image.png`,
    ...globalSettings,
    auth: {
        authenticationParameters: {
            scopes: [
                'https://graph.microsoft.com/Directory.Read.All',
                `https://${tenant}/wahinekaifrontend/user_impersonation`,
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
