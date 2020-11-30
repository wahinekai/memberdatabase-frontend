import React, { FC } from 'react';
import { PropTypes } from '../model';

const Logout: FC<PropTypes.Logout> = ({ onLogout }) => (
    <button className="rounded bg-primary text-white border-0 px-2 py-2 fixed-top m-2" onClick={onLogout}>
        Logout
    </button>
);

export default Logout;