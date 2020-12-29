/**
 * @file index file compiling global properties of all environments
 */

import development from './development';
import production from './production';
import staging from './staging';
import localproduction from './localproduction';

const globalSettings = {
    development,
    production,
    staging,
    localproduction,
};

export default globalSettings;
