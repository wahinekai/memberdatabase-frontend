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
export const loadSettings = (): Readonly<Settings> => {
    // Development environment
    if (process.env.NODE_ENV == 'development') {
        return globalSettings.development;
    }

    // Production environment, default
    return globalSettings.production;
};
