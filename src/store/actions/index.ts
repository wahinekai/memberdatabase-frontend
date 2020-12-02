/**
 * @file Index file compiling all available actions to the redux store
 */

import { onLogin, onRegister, onLogout } from './auth';
import { getUser, updateUser } from './user';

export { getUser, onLogin, onRegister, onLogout, updateUser };
