import React, { FC } from 'react';
import { PropTypes } from '../model';

const FormLabel: FC<PropTypes.FormLabel> = ({ children, htmlFor }) => (
    <label className="px-2" htmlFor={htmlFor}>
        {children}
    </label>
);

export default FormLabel;
