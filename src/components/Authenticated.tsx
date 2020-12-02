/**
 * @file Higher order component that makes sure all children can only be mounted if the user is authenticated
 */

import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';

import { isNotNull, isNotNullOrWhitespace } from '../utils/ensure';
import { PropTypes, User } from '../model';

/**
 * Higher order component making sure all children can only be mounted if the user is authenticated
 *
 * @param props - Properties passed down from parent components
 * @param props.user - The current user
 * @param props.children - Children in the react DOM tree
 * @returns The child component if authenticated, or redirects to the login page
 */
const Authenticated: FC<PropTypes.Authenticated> = ({ user, children }) => {
    try {
        user = isNotNull<User>(user);
        isNotNullOrWhitespace(user.token);
        return <>{children}</>;
    } catch (err) {
        return <Redirect to="/login" />;
    }
};

export default Authenticated;
