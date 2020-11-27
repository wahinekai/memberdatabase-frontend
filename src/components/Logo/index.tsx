import React, { FC } from 'react';
import logo from './logo.png';

import { PropTypes } from '../../model';

const Logo: FC<PropTypes.Logo> = ({ className }) => <img src={logo} className={`${className}`} alt="GOAT Logo" />;

export default Logo;
