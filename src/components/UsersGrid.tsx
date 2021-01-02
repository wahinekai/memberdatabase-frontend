/**
 * @file Lists all members of Wahine Kai as a UserCard
 */

import { Guid } from 'guid-typescript';
import React, { FC, useCallback, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useHistory } from 'react-router-dom';

import { HttpMethodTypes, IUser } from '../model';
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
 * @returns A list of user cards in a container
 */
const UsersGrid: FC = () => {
    const [users, setUsers] = useState<IUser[]>();
    const history = useHistory();

    // Update state with newest user on first render
    useEffect(() => {
        getAllAsync().then((users) => setUsers(users));
    }, [setUsers]);

    const onClick = useCallback((id?: Guid) => history.push(`/users/${id}`), [history]);

    const rowsMaybeNull = users?.map((user, key) => (
        <tr key={key} onClick={() => onClick(user.id)}>
            <td>{`${user.firstName ?? ''} ${user.lastName ?? ''}`}</td>
            <td>{user.chapter ?? ''}</td>
            <td>{user.email ?? ''}</td>
            <td>{user.active ? 'Yes' : 'No'}</td>
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
                    <th>Active</th>
                    <th>Administrator</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
    );
};

export default UsersGrid;
