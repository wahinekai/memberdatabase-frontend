import React, { FC } from 'react';
import { PropTypes } from '../model';

/**
 * @param root0
 * @param root0.children
 * @param root0.htmlFor
 */
const FormLabel: FC<PropTypes.FormLabel> = ({ children, htmlFor }) => (
    <label className="px-2" htmlFor={htmlFor}>
        {children}
    </label>
);

export default FormLabel;
