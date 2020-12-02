import React, { FC } from 'react';
import { PropTypes } from '../model';
import { Header, Logo } from '.';

/**
 * @param root0
 * @param root0.text
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
