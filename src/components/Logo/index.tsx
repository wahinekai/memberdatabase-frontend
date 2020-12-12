/**
 * @file Logo component
 */

import React, { FC } from 'react';
import Image from 'react-bootstrap/Image';

import { PropTypes } from '../../model';
import logo from './logo.png';

/**
 * Reusable logo component using image in this folder
 *
 * @param props Properties passed down from parents
 * @param props.className - An optional parameter indicating additional class names that should be put on the logo
 * @returns logo component
 */
const Logo: FC<PropTypes.Logo> = ({ className = '' }) => (
    <Image src={logo} className={`${className}`} alt="GOAT Logo" />
);

export default Logo;
