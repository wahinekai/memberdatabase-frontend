import { noUser, ReduxState, User } from '../../model';

export const setUser = (state: ReduxState, user: User): ReduxState => {
    // Add token to user if not included
    if (state.user !== noUser && !user.token) {
        state.user.token = user.token;
    }
    return {
        ...state,
        user,
    };
};

export const clearUser = (state: ReduxState): ReduxState => {
    return {
        ...state,
        user: noUser,
    };
};
