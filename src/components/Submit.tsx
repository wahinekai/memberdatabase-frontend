import React, { FC } from 'react';
import { PropTypes } from '../model';

const Submit: FC<PropTypes.Submit> = ({ children }) => (
    <button className="rounded bg-primary text-white border-0 px-3 py-2" type="submit">
        {children}
    </button>
);

export default Submit;
