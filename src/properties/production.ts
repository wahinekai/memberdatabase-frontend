/**
 * @file Constant definition for production environment
 */

import { Settings } from '../model';
import globalSettings from './global';

const settings: Readonly<Settings> = {
    backendEndpoint: 'http://localhost:5000',
    ...globalSettings,
};

export default settings;
