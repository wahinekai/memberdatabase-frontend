/**
 * @file Link to switch to sign in page
 */

import React, { FC } from 'react';
import { Link } from 'react-router-dom';

/**
 * Link to switch to sign in page
 *
 * @returns React component for switching from register to sign in page
 */
const SwitchToSignIn: FC = () => (
    <div className="col-12 d-block text-center mt-4">
        Already have an account?
        <Link className="text-primary" to="/login">
            {' '}
            Sign in
        </Link>
    </div>
);

export default SwitchToSignIn;
