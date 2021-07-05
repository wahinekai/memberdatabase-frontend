/**
 * @file Lists all members of Wahine Kai as a UserCard
 */

import React, { FC, useCallback, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Guid } from 'guid-typescript';
import { plainToClass } from 'class-transformer';

import { HttpMethodTypes, IUser, PropTypes, User } from '../model';
import { apiCallAsync, Ensure } from '../utils';

import AdminToolsTableHeader from './AdminToolsTableHeader';
import AdminToolsTableUserRow from './AdminToolsTableUserRow';
import PageChooser from './PageChooser';

/**
 * Number of users shown per page
 */
const NUM_USERS_PER_PAGE = 10;

/**
 * Update the user in the database and return the updated user.
 *
 * @param id - The id of the user to get from the database
 * @param updatedUserObject The updated to user to add to the database
 * @returns The updated user from the database
 */
const updateByIdAsync = (id: Guid, updatedUserObject: IUser): Promise<IUser> =>
    apiCallAsync<IUser>(HttpMethodTypes.PUT, `/Users/Id/${id.toString()}`, updatedUserObject);

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
 * @param props.fields - The list of user fields to display
 * @returns A list of user cards in a container
 */
const UsersGrid: FC<PropTypes.UsersGrid> = ({ needsRefresh, clearRefresh, fields }) => {
    const [users, setUsers] = useState<IUser[]>();
    const [page, setPage] = useState(0);

    const getAllCallbackAsync = useCallback(async () => {
        const users = await getAllAsync();
        setUsers(users);
        clearRefresh();
    }, [clearRefresh, setUsers]);

    // Update state with newest user on first render
    useEffect(() => {
        getAllCallbackAsync();
    }, [getAllCallbackAsync]);

    const setUser = useCallback(
        async (id: Guid | undefined, userData: IUser) => {
            // Validate User
            const updatedUser = plainToClass(User, userData);
            updatedUser.validate();

            // Update user in frontend
            const idNotNull = Ensure.isNotNull(() => updatedUser.id);
            const userFromBackend = await updateByIdAsync(idNotNull, updatedUser);

            // Set user from backendd in state
            setUsers(users?.map((user) => (user.id !== id ? user : userFromBackend)));
        },
        [setUsers, users]
    );

    if (needsRefresh) {
        getAllCallbackAsync();
    }

    // Pagination
    const numUsers = users?.length ?? 0;
    const pageCount = Math.ceil(numUsers / NUM_USERS_PER_PAGE);
    const filteredUsers = users?.slice(page * NUM_USERS_PER_PAGE, page * NUM_USERS_PER_PAGE + NUM_USERS_PER_PAGE);

    // Display
    const rowsMaybeNull = filteredUsers?.map((user, key) => (
        <tr key={key}>
            <AdminToolsTableUserRow
                fields={fields}
                user={user}
                setUser={(updatedUser) => setUser(user.id, updatedUser)}
            />
        </tr>
    ));

    const rows = rowsMaybeNull ?? null;
    const pageChooser = pageCount > 1 ? <PageChooser pageCount={pageCount} onChange={setPage} /> : null;

    return (
        <>
            <Table striped hover>
                <AdminToolsTableHeader fields={fields} />
                <tbody>{rows}</tbody>
            </Table>
            {pageChooser}
        </>
    );
};

export default UsersGrid;
