/**
 * @file Utility file for loading the application global settings into an object
 */

import { Settings } from '../model';
import globalSettings from '../properties';

/**
 * Loads settings from a the specified JSON file into the specified type
 *
 * @returns A TypeScript object from the data in that file
 */
const loadSettings = (): Readonly<Settings> => {
    // Production environment
    if (process.env.REACT_APP_CUSTOM_NODE_ENV == 'production') {
        return globalSettings.production;
    }

    // Staging environment
    if (process.env.REACT_APP_CUSTOM_NODE_ENV == 'staging') {
        return globalSettings.staging;
    }

    // Development environment, default
    return globalSettings.development;
};

export const settings = loadSettings();
