/**
 * @file Contains all the components of the login page, as well as its authentication status
 */

import React, { FC } from 'react';
import { Login, Unauthenticated } from '../containers';
import { SwitchToRegister } from '../components/Login';
import LoginHeader from '../components/LoginHeader';

/**
 * Contains the components and authentication status for the login page
 *
 * @returns the Register page
 */
const LoginPage: FC = () => (
    <Unauthenticated>
        <LoginHeader text="Sign In" />
        <Login />
        <SwitchToRegister />
    </Unauthenticated>
);

export default LoginPage;
