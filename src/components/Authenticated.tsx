import React from 'react';
import { Redirect } from 'react-router-dom';

import { isNotNull, isNotNullOrWhitespace } from '../utils/ensure';
import { IUser, PropTypes } from '../model';

const Authenticated = ({ user, children }: PropTypes.Authenticated) => {
    try {
        user = isNotNull<IUser>(user);
        isNotNullOrWhitespace(user.token);
        return children;
    } catch (err) {
        return <Redirect to="/login" />;
    }
};

export default Authenticated;
