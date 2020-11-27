import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';

import { isNotNull, isNotNullOrWhitespace } from '../utils/ensure';
import { User, PropTypes } from '../model';

const Unauthenticated: FC<PropTypes.Unauthenticated> = ({ user, children }) => {
    try {
        user = isNotNull<User>(user);
        isNotNullOrWhitespace(user.token);
        return <Redirect to="/login" />;
    } catch (err) {
        return <>{children}</>;
    }
};

export default Unauthenticated;
