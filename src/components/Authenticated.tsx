import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';

import { isNotNull, isNotNullOrWhitespace } from '../utils/ensure';
import { User, PropTypes } from '../model';

const Authenticated: FC<PropTypes.Authenticated> = ({ user, children }) => {
    try {
        user = isNotNull<User>(user);
        isNotNullOrWhitespace(user.token);
        return <>{children}</>;
    } catch (err) {
        return <Redirect to="/login" />;
    }
};

export default Authenticated;
