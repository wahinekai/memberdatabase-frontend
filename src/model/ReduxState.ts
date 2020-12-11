/**
 * @file Types relating to the redux store
 */

import { User } from '.';

type ReduxState = {
    user: User | null;
};

export const initialReduxState: ReduxState = {
    user: null,
};

export default ReduxState;
