/**
 * @file Entrypoint for the project.
 * Renders the MainRouter container as the root container
 */

import React from 'react';
import { render } from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIdBadge, faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import _$ from 'jquery'; // eslint-disable-line @typescript-eslint/no-unused-vars
import _Popper from 'popper.js'; // eslint-disable-line @typescript-eslint/no-unused-vars

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';

// Add full set of fontawesome library icons
library.add(faIdBadge, faSearch, faSignOutAlt);

render(<App />, document.getElementById('root'));
