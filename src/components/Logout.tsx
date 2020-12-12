/**
 * @file Definition of the logout button component
 */

import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';

import { signInAuthProvider } from '../utils';

/**
 * The logout button component
 *
 * @returns The logout button
 */
const Logout: FC = () => (
    <Button variant="outline-light" className="rounded" onClick={signInAuthProvider.logout}>
        Logout
    </Button>
);

export default Logout;
