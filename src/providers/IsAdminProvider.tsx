/**
 * @file Definition of IsAdmin context provider
 */

import React, { FC, useEffect, useState } from 'react';
import { IsAdminContext } from '../contexts';

import { HttpMethodTypes } from '../model';
import { apiCallAsync } from '../utils';

/**
 * Gets the administrator status of the authenticated user
 *
 * @returns The administrator status of the authenticated user
 */
const getIsAdminAsync = (): Promise<boolean> => apiCallAsync<boolean>(HttpMethodTypes.GET, '/Users/IsAdmin/Me');

/**
 * Provider of React context of the administrator state of the current user
 *
 * @param props - Properties passed down from parents to children
 * @param props.children - Children in the React DOM tree
 * @returns The context provider
 */
const IsAdminProvider: FC = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(true);

    useEffect(() => {
        getIsAdminAsync().then((isAdmin) => setIsAdmin(isAdmin));
    });

    return <IsAdminContext.Provider value={isAdmin}>{children}</IsAdminContext.Provider>;
};

export default IsAdminProvider;
