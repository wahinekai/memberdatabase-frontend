/**
 * @file Higher order component that makes sure all children can only be mounted if the user is authenticated
 */

import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';

import { Ensure } from '../utils';
import { PropTypes } from '../model';

/**
 * Higher order component making sure all children can only be mounted if the user is authenticated
 *
 * @param props - Properties passed down from parent components
 * @param props.token - The current user's token
 * @param props.children - Children in the react DOM tree
 * @returns The child component if authenticated, or redirects to the login page
 */
const Authenticated: FC<PropTypes.Authenticated> = ({ token, children }) => {
    try {
        Ensure.isNotNullOrWhitespace(() => token);
        return <>{children}</>;
    } catch (err) {
        return <Redirect to="/login" />;
    }
};

export default Authenticated;
