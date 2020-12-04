/**
 * @file Definition of the logout button component
 */

import React, { FC } from 'react';
import { PropTypes } from '../../model';

/**
 * The logout button component
 *
 * @param props - Properties passed down from parents to children
 * @param props.onLogout - The function required to log out of the application
 * @returns The logout button
 */
const Logout: FC<PropTypes.Logout> = ({ onLogout }) => (
    <button className="rounded bg-primary text-white border-0 px-2 py-2 fixed-top m-2" onClick={onLogout}>
        Logout
    </button>
);

export default Logout;
