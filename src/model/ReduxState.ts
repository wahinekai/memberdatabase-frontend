/**
 * @file Types relating to the redux store
 */

import { noUser } from './User';
import { User } from '.';

type ReduxState = {
    user: User;
};

export const initialReduxState = {
    user: noUser,
};

export default ReduxState;
