/**
 * @file Contains definitions for the Form Label component
 */
import React, { FC } from 'react';
import { PropTypes } from '../model';

/**
 * A component rendering a form label with specific styling
 *
 * @param props - Properties passed down from parents to children
 * @param props.children - Children in the React DOM tree
 * @param props.htmlFor - Who this label is for
 * @returns A form label component
 */
const FormLabel: FC<PropTypes.FormLabel> = ({ children, htmlFor }) => (
    <label className="px-2" htmlFor={htmlFor}>
        {children}
    </label>
);

export default FormLabel;
