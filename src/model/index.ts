/**
 * @file Index file compiling exports from the model module
 */

import ReduxState, { initialReduxState } from './ReduxState';
import { User, UserWithToken, noUser } from './User';
import * as PropTypes from './PropTypes';
import * as Validation from './Validation';
import * as ReduxTypes from './ReduxTypes';
import { LoginObject, RegisterObject, initialLoginObject, initialRegisterObject } from './Authentication';
import Action, { ActionTypes } from './Action';
import { MethodTypes as HttpMethodTypes } from './Http';

export type { Action, ReduxState, ReduxTypes, LoginObject, RegisterObject, User, UserWithToken, PropTypes };

export {
    ActionTypes,
    HttpMethodTypes,
    initialLoginObject,
    initialReduxState,
    initialRegisterObject,
    noUser,
    Validation,
};
