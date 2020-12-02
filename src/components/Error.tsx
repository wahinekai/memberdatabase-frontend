import React, { FC } from 'react';

import { PropTypes } from '../model';

/**
 * @param root0
 * @param root0.children
 */
const Error: FC<PropTypes.Error> = ({ children }) => (
    <div className="text-danger">
        <small>{children}</small>
    </div>
);

export default Error;
