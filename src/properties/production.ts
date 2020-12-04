/**
 * @file Constant definition for production environment
 */

import { Settings } from '../model';
import globalSettings from './global';

const tenant = 'wahinekaidevelopment.onmicrosoft.com';
const applicationID = 'feb5b82e-38d1-4b53-ae80-71818e92bb9e';
const tenantSubdomain = tenant.split('.')[0];
const instance = `https://${tenantSubdomain}.b2clogin.com/tfp/`;

const signInPolicy = 'B2C_1_signup_signin';
const signInAuthority = `${instance}${tenant}/${signInPolicy}`;

const settings: Readonly<Settings> = {
    backendEndpoint: 'http://localhost:5000',
    ...globalSettings,
    msal: {
        authenticationParameters: {
            scopes: [],
        },
        signInConfig: {
            auth: {
                authority: signInAuthority,
                clientId: applicationID,
            },
        },
        options: globalSettings.msal.options,
    },
};

export default settings;
