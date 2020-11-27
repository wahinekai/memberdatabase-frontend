import React, { FC } from 'react';

import { PropTypes } from '../model';

const Header: FC<PropTypes.Header> = ({ children, className }) => <h1 className={`${className}`}>{children}</h1>;

export default Header;
