/**
 * @file Definition of Form Help component
 */

import React, { FC } from 'react';
import FormText from 'react-bootstrap/FormText';

import { PropTypes } from '../../model';

/**
 * A Formik/Bootstrap help component
 *
 * @param props - React properties passed from from parents to children
 * @param props.id - The id of this component
 * @param props.children - Children of this component
 * @param props.className - Additional class names to pass to this component
 * @returns A Form Help component
 */
const Help: FC<PropTypes.FormHelp> = ({ id, children, className = '' }) => (
    <FormText id={id} className={`${className} text-muted`}>
        {children}
    </FormText>
);

export default Help;
