/**
 * @file Definition of the Header component
 */

import React, { FC } from 'react';

import { PropTypes } from '../model';
import TextCenter from './TextCenter';

/**
 * Header component
 *
 * @param props - Properties passed down from parents to children
 * @param props.children - Children in the React DOM tree
 * @param props.className - An optional parameter specifying additional classes to be supplied to this component
 * @returns the header component
 */
const Header: FC<PropTypes.Header> = ({ children, className = '' }) => (
    <TextCenter>
        <h1 className={`py-2 ${className}`}>{children}</h1>
    </TextCenter>
);

export default Header;
