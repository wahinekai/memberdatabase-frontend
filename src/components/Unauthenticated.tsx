import React from 'react';
import { Redirect } from 'react-router-dom';

import { isNotNull, isNotNullOrWhitespace } from '../utils/ensure';
import { IUser, PropTypes } from '../model';

const Unauthenticated = ({ user, children }: PropTypes.Unauthenticated) => {
    try {
        user = isNotNull<IUser>(user);
        isNotNullOrWhitespace(user.token);
        return <Redirect to="/login" />;
    } catch (err) {
        return children;
    }
};

export default Unauthenticated;
