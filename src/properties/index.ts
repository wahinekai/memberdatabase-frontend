/**
 * @file index file compiling global properties of all environments
 */

import development from './development';
import production from './production';

const globalSettings = {
    development,
    production,
};

export default globalSettings;
