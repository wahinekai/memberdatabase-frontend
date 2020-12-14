/**
 * @file index file compiling exports from the utility module
 */

import apiCallAsync from './apicall';
import * as Ensure from './ensure';
import * as Timer from './timer';
import { getAge } from './age';
import { loadSettings } from './loadSettings';
import { signInAuthProvider } from './auth';

export { apiCallAsync, Ensure, Timer, getAge, loadSettings, signInAuthProvider };
