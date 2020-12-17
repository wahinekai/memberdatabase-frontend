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
 * @param props.className - Optional classes to add to this component
 * @returns An error component
 */
const Error: FC<PropTypes.Error> = ({ children, className = '' }) => (
    <div className={`text-danger ${className}`}>{children}</div>
);

export default Error;
