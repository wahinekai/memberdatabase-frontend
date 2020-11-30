import { User } from '.';
import { noUser } from './User';

type ReduxState = {
    user: User;
};

export const initialReduxState = {
    user: noUser,
};

export default ReduxState;
