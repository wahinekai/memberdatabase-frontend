/**
 * @file Lists all members of Wahine Kai as a UserCard
 */

import React, { FC, useCallback, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Guid } from 'guid-typescript';
import { useHistory } from 'react-router-dom';

import { HttpMethodTypes, IUser, PropTypes } from '../model';
import { apiCallAsync } from '../utils';

/**
 * Gets all users from the backend
 *
 * @returns All users from the backend
 */
const getAllAsync = (): Promise<IUser[]> => apiCallAsync<IUser[]>(HttpMethodTypes.GET, '/Users/All');

/**
 * A Component that lists all users of the application in the form of user cards
 *
 * @param props - Properties passed down from parents to children
 * @param props.needsRefresh - Whether a refresh is required
 * @param props.clearRefresh - Clears whether a refresh is required
 * @returns A list of user cards in a container
 */
const UsersGrid: FC<PropTypes.UsersGrid> = ({ needsRefresh, clearRefresh }) => {
    const history = useHistory();

    const [users, setUsers] = useState<IUser[]>();

    const getAllCallbackAsync = useCallback(async () => {
        const users = await getAllAsync();
        setUsers(users);
        clearRefresh();
    }, [clearRefresh, setUsers]);

    // Update state with newest user on first render
    useEffect(() => {
        getAllCallbackAsync();
    }, [getAllCallbackAsync]);

    if (needsRefresh) {
        getAllCallbackAsync();
    }

    const onClick = useCallback((id?: Guid) => history.push(`/users/${id}`), [history]);

    const rowsMaybeNull = users?.map((user, key) => (
        <tr key={key} onClick={() => onClick(user.id)}>
            <td>{`${user.firstName ?? ''} ${user.lastName ?? ''}`}</td>
            <td>{user.chapter ?? ''}</td>
            <td>{user.email ?? ''}</td>
            <td>{user.status}</td>
            <td>{user.admin ? 'Yes' : 'No'}</td>
            <td>
                {user.streetAddress ?? ''}
                <br />
                {`${user.city ?? ''}, ${user.region ?? ''} ${user.postalCode ?? ''}`}
                <br />
                {user.country ?? ''}
            </td>
        </tr>
    ));

    const rows = rowsMaybeNull ?? null;

    return (
        <Table striped hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Chapter</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Administrator</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
    );
};

export default UsersGrid;
