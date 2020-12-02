/**
 * @file Submit button component
 */

import React, { FC } from 'react';
import { PropTypes } from '../model';

/**
 * Submit button component
 *
 * @param props - Properties passed down from parents
 * @param props.children - Children components in DOM tree
 * @returns Submit button component
 */
const Submit: FC<PropTypes.Submit> = ({ children }) => (
    <button className="rounded bg-primary text-white border-0 px-3 py-2" type="submit">
        {children}
    </button>
);

export default Submit;
