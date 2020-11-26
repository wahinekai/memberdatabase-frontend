import React, { FC, ReactChild } from 'react';

type PropTypes = {
    className?: string;
    children: ReactChild;
};

const Header: FC<PropTypes> = ({ children, className }) => <h1 className={`${className}`}>{children}</h1>;

export default Header;
