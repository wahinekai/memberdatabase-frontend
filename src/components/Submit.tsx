import React, { FC } from 'react';

type PropTypes = {
    className?: string;
};

const Submit: FC<PropTypes> = ({ children }) => (
    <button className="rounded bg-primary text-white border-0 px-3 py-2" type="submit">
        {children}
    </button>
);

export default Submit;
