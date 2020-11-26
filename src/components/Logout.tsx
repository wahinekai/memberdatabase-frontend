import React, { FC } from 'react';

type PropTypes = {
    onLogout(): void;
};

const Logout: FC<PropTypes> = ({ onLogout }) => (
    <button className="rounded bg-primary text-white border-0 px-2 py-2 fixed-top m-2" onClick={onLogout}>
        Logout
    </button>
);

export default Logout;
