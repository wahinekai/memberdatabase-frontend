/**
 * @file Entrypoint for the project.
 * Renders the MainRouter container as the root container
 */

import React from 'react';
import { render } from 'react-dom';

import _$ from 'jquery'; // eslint-disable-line @typescript-eslint/no-unused-vars
import _Popper from 'popper.js'; // eslint-disable-line @typescript-eslint/no-unused-vars

import 'reflect-metadata';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';

render(<App />, document.getElementById('root'));
