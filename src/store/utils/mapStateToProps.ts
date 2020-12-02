/**
 * @file Provides common mappings of state to props
 */

import { ReduxState, User } from '../../model';

/**
 * Maps the full redux store, and returns only the needed state as props to the component
 *
 * @param state - The Redux State
 * @param state.user - The current user
 * @returns Only the required redux state
 */
export const onlyUser = ({ user }: ReduxState): { user: User } => ({
    user,
});
