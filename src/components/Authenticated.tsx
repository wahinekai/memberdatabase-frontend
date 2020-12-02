import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';

import { isNotNull, isNotNullOrWhitespace } from '../utils/ensure';
import { PropTypes, User } from '../model';

/**
 * @param root0
 * @param root0.user
 * @param root0.children
 */
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
