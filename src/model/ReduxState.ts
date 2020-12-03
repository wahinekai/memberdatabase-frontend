/**
 * @file Types relating to the redux store
 */

import { User, noUser } from '.';

type ReduxState = {
    user: User;
    token: string;
};

export const initialReduxState = {
    user: noUser,
    token: '',
};

export default ReduxState;
