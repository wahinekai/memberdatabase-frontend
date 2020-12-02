/**
 * @file Contains definition for th switch to register component
 */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

/**
 * The switch to register component
 *
 * @returns The switch to register component
 */
const SwitchToRegister: FC = () => (
    <div className="col-12 d-block text-center mt-4">
        {"Don't have an account?"}
        <Link className="text-primary" to="/register">
            {' '}
            Sign up
        </Link>
    </div>
);

export default SwitchToRegister;
