import React, { FC, ReactChild } from 'react';

type PropTypes = {
    children: ReactChild;
};

const Error: FC<PropTypes> = ({ children }) => (
    <div className="text-danger">
        <small>{children}</small>
    </div>
);

export default Error;
