/**
 * @file index file compiling global properties of all environments
 */

import development from './development';
import production from './production';
import staging from './staging';

const globalSettings = {
    development,
    production,
    staging,
};

export default globalSettings;
