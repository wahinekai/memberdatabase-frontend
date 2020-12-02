/**
 * @file Contains all the components of the login page, as well as its authentication status
 */

import React, { FC } from 'react';
import { Login, Unauthenticated } from '../../containers';

/**
 * Contains the components and authentication status for the login page
 *
 * @returns the Register page
 */
const LoginPage: FC = () => (
    <Unauthenticated>
        <Login />
    </Unauthenticated>
);

export default LoginPage;
