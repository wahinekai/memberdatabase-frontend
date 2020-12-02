/**
 * @file Higher order component that makes sure all children can only be mounted if the user is NOT authenticated
 */

import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';

import { Ensure } from '../utils';
import { PropTypes } from '../model';

/**
 * Higher order component making sure all children can only be mounted if the user is NOT authenticated
 *
 * @param props - Properties passed down from parent components
 * @param props.token - The current user's token
 * @param props.children - Children in the react DOM tree
 * @returns The child component if NOT authenticated, or redirects to the login page
 */
const Unauthenticated: FC<PropTypes.Unauthenticated> = ({ token, children }) => {
    try {
        Ensure.isNotNullOrWhitespace(() => token);
        return <Redirect to="/login" />;
    } catch (err) {
        return <>{children}</>;
    }
};

export default Unauthenticated;
