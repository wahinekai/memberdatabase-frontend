/**
 * @file Constant definition for development environment
 */

import { Settings } from '../model';
import globalSettings from './global';

const tenant = 'devwahinekaimemberdbauth.onmicrosoft.com';
const applicationID = '5857ef27-79ee-4c6d-b3a3-0314ea4d485f';
const tenantSubdomain = tenant.split('.')[0];
const instance = `https://${tenantSubdomain}.b2clogin.com/tfp/`;
const reactRedirectUri = 'http://localhost:3000';

const signInPolicy = 'B2C_1_signup_signin_api';
const signInAuthority = `${instance}${tenant}/${signInPolicy}`;
const frontendAssetsPrefix = 'https://devmemberdatabasestorage.blob.core.windows.net/frontend-assets';

const settings: Readonly<Settings> = {
    backendEndpoint: 'http://localhost:5000/api/v1',
    frontendAssetsPrefix,
    emptyProfileImage: `${frontendAssetsPrefix}/no-image.png`,
    templateCsv: `${frontendAssetsPrefix}/csv_upload_template.csv`,
    ...globalSettings,
    auth: {
        authenticationParameters: {
            scopes: [
                'https://graph.microsoft.com/Directory.Read.All',
                `https://${tenant}/wahinekaifrontend-localdevelopment/user_impersonation`,
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
