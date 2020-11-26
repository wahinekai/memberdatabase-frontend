import React, { ReactChild } from 'react';
import { Redirect } from 'react-router-dom';

import { isNotNull, isNotNullOrWhitespace } from '../utils/ensure';
import { IUser } from '../model';

type PropTypes = {
    user?: IUser | null;
    children: ReactChild;
};

const Unauthenticated = ({ user, children }: PropTypes) => {
    try {
        user = isNotNull<IUser>(user);
        isNotNullOrWhitespace(user.token);
        return <Redirect to="/login" />;
    } catch (err) {
        return children;
    }
};

export default Unauthenticated;
