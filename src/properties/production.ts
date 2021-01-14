/**
 * @file Constant definition for production environment
 */

import { Settings } from '../model';
import globalSettings from './global';

const tenant = 'wahinekaimemberdatabaseauth.onmicrosoft.com';
const applicationID = '71a0a9e2-6348-4e12-a13f-b380dc069b33';
const tenantSubdomain = tenant.split('.')[0];
const instance = `https://${tenantSubdomain}.b2clogin.com/tfp/`;
const reactRedirectUri = 'https://wahinekai-memberdatabase.azurewebsites.net';

const signInPolicy = 'B2C_1_signup_signin_api';
const signInAuthority = `${instance}${tenant}/${signInPolicy}`;
const frontendAssetsPrefix = 'https://memberdatabasestorage.blob.core.windows.net/frontend-assets';

const settings: Readonly<Settings> = {
    backendEndpoint: 'https://api-wahinekai-memberdatabase.azurewebsites.net/api/v1',
    frontendAssetsPrefix,
    emptyProfileImage: `${frontendAssetsPrefix}/no-image.png`,
    templateCsv: `${frontendAssetsPrefix}/csv_template_with_town.csv`,
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
