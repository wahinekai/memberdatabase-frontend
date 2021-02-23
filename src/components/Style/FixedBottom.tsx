/**
 * @file Definition of FixedBottom component
 */

import React, { FC } from 'react';

/**
 * A Component that fixes its children to the bottom of the screen
 *
 * @param props - React properties passed down from parents to children
 * @param props.children - Children in the React DOM tree
 * @returns A Component where text is centered for all children inthe DOM tree
 */
const FixedBottom: FC = ({ children }) => <div className="fixed-bottom">{children}</div>;

export default FixedBottom;
