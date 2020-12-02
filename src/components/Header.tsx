import React, { FC } from 'react';

import { PropTypes } from '../model';

/**
 * @param root0
 * @param root0.children
 * @param root0.className
 */
const Header: FC<PropTypes.Header> = ({ children, className }) => <h1 className={`${className}`}>{children}</h1>;

export default Header;
