/**
 * @file Definition of TextRight component
 */

import React, { FC } from 'react';

/**
 * A Component that right justifies text below it
 *
 * @param props - React properties passed down from parents to children
 * @param props.children - Children in the React DOM tree
 * @returns A Component where text is centered for all children inthe DOM tree
 */
const TextRight: FC = ({ children }) => <div className="text-right">{children}</div>;

export default TextRight;
