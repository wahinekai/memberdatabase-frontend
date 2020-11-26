import React, { FC, ReactChild } from 'react';

type PropTypes = {
    htmlFor: string;
    children: ReactChild;
};

const FormLabel: FC<PropTypes> = ({ children, htmlFor }) => (
    <label className="px-2" htmlFor={htmlFor}>
        {children}
    </label>
);

export default FormLabel;
