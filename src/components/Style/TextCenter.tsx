/**
 * @file Definition of TextCenter component
 */

import React, { FC } from 'react';

/**
 * A Component that centers text below it
 *
 * @param props - React properties passed down from parents to children
 * @param props.children - Children in the React DOM tree
 * @returns A Component where text is centered for all children inthe DOM tree
 */
const TextCenter: FC = ({ children }) => <div className="text-center">{children}</div>;

export default TextCenter;
