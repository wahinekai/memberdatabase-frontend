/**
 * @file Definition of the Header component
 */

import React, { FC } from 'react';

import { PropTypes } from '../model';

/**
 * Header component
 *
 * @param props - Properties passed down from parents to children
 * @param props.children - Children in the React DOM tree
 * @param props.className - An optional parameter specifying additional classes to be supplied to this component
 * @returns the header component
 */
const Header: FC<PropTypes.Header> = ({ children, className = '' }) => <h1 className={`${className}`}>{children}</h1>;

export default Header;
