/**
 * @file Contains definitions for the Form Label component
 */
import React, { FC } from 'react';
import FormLabel from 'react-bootstrap/FormLabel';

import { PropTypes } from '../../model';

/**
 * A component rendering a form label with specific styling
 *
 * @param props - Properties passed down from parents to children
 * @param props.children - Children in the React DOM tree
 * @param props.htmlFor - Who this label is for
 * @param props.className - Additional classes for this component
 * @returns A form label component
 */
const Label: FC<PropTypes.FormLabel> = ({ children, htmlFor, className = '' }) => (
    <FormLabel className={`${className} px-2`} htmlFor={htmlFor}>
        {children}
    </FormLabel>
);

export default Label;
