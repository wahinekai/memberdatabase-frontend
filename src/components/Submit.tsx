/**
 * @file Submit button component
 */

import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';

import { PropTypes } from '../model';

/**
 * Submit button component
 *
 * @param props - Properties passed down from parents
 * @param props.children - Children components in DOM tree
 * @returns Submit button component
 */
const Submit: FC<PropTypes.Submit> = ({ children }) => (
    <Button variant="primary" className="rounded text-white border-0 px-3 py-2 my-2" type="submit" block>
        {children}
    </Button>
);

export default Submit;
