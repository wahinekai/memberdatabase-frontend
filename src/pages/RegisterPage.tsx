/**
 * @file Contains all the components of the register page, as well as its authentication status
 */

import React, { FC } from 'react';
import { Register, Unauthenticated } from '../containers';
import { LoginHeader } from '../components';
import { SwitchToSignIn } from '../components/Register';

/**
 * Contains the components and authentication status for the register page
 *
 * @returns the Register page
 */
const RegisterPage: FC = () => (
    <Unauthenticated>
        <LoginHeader text="Sign Up" />
        <Register />
        <SwitchToSignIn />
    </Unauthenticated>
);

export default RegisterPage;
