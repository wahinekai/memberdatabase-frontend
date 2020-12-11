/**
 * @file Definition of the logout button component
 */

import React, { FC } from 'react';
import { signInAuthProvider } from '../utils';

/**
 * The logout button component
 *
 * @returns The logout button
 */
const Logout: FC = () => (
    <button
        className="rounded bg-primary text-white border-0 px-2 py-2 fixed-top m-2"
        onClick={signInAuthProvider.logout}
    >
        Logout
    </button>
);

export default Logout;
