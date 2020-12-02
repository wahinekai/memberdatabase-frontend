/**
 * @file A Header to be used during the login portions of the application
 */

import React, { FC } from 'react';
import { PropTypes } from '../model';
import { Header, Logo } from '.';

/**
 * Returns the functional component for the login header
 *
 * @param props - Properties passed down from the parent components
 * @param props.text - The text to render in the header
 * @returns The login header component
 */
const LoginHeader: FC<PropTypes.LoginHeader> = ({ text }) => (
    <>
        <div className="row">
            <div className="col-12">
                <Logo className="mx-auto d-block m-3" />
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <Header className="text-center">{text}</Header>
            </div>
        </div>
    </>
);

export default LoginHeader;
