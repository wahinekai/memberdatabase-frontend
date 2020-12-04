/**
 * @file Global settings definition
 */

import { LoginType } from 'react-aad-msal';
import { GlobalSettings } from '../model';

const settings: Readonly<GlobalSettings> = {
    supportedCountries: ['US', 'CA'],
    msal: {
        options: {
            loginType: LoginType.Redirect,
        },
    },
};

export default settings;
