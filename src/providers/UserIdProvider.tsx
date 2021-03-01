/**
 * @file Definition of UserId context provider
 */

import { Guid } from 'guid-typescript';
import React, { FC, useEffect, useState } from 'react';
import { UserIdContext } from '../contexts';

import { HttpMethodTypes } from '../model';
import { apiCallAsync } from '../utils';

/**
 * Gets the administrator status of the authenticated user
 *
 * @returns The administrator status of the authenticated user
 */
const getUserIdAsync = (): Promise<Guid> => apiCallAsync<Guid>(HttpMethodTypes.GET, '/Users/UserId/Me');

/**
 * Provider of React context of the administrator state of the current user
 *
 * @param props - Properties passed down from parents to children
 * @param props.children - Children in the React DOM tree
 * @returns The context provider
 */
const UserIdProvider: FC = ({ children }) => {
    const [userId, setUserId] = useState(Guid.createEmpty());

    useEffect(() => {
        getUserIdAsync().then((userId) => setUserId(userId));
    });

    return <UserIdContext.Provider value={userId}>{children}</UserIdContext.Provider>;
};

export default UserIdProvider;
