import React, { FC } from 'react';
import { PropTypes } from '../../model';
import logo from './logo.png';

/**
 * @param root0
 * @param root0.className
 */
const Logo: FC<PropTypes.Logo> = ({ className }) => <img src={logo} className={`${className}`} alt="GOAT Logo" />;

export default Logo;
