/**
 * @file Contains definitions for the Error component
 */
import React, { FC } from 'react';

import { PropTypes } from '../model';

/**
 * A component for errors
 *
 * @param props - Properties passed down from parents to children
 * @param props.children - Children in the React DOM tree
 * @returns An error component
 */
const Error: FC<PropTypes.Error> = ({ children }) => (
    <div className="text-danger">
        <small>{children}</small>
    </div>
);

export default Error;
