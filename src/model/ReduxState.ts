/**
 * @file Types relating to the redux store
 */

import { User, noUser } from '.';

type ReduxState = {
    user: User;
};

export const initialReduxState: ReduxState = {
    user: noUser,
};

export default ReduxState;
