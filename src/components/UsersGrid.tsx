/* eslint-disable no-loops/no-loops */
/**
 * @file Lists all members of Wahine Kai as a UserCard
 */

import React, { FC, useCallback, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import { Guid } from 'guid-typescript';
import { plainToClass } from 'class-transformer';

import { HttpMethodTypes, IUser, PropTypes, User } from '../model';
import { apiCallAsync, Ensure } from '../utils';
import { useFilterType } from '../hooks';

import AdminToolsTableHeader from './AdminToolsTableHeader';
import AdminToolsTableUserRow from './AdminToolsTableUserRow';
import PageChooser from './PageChooser';
import { TextCenter } from './Style';

/**
 * A Component that displays Admin Table feedback text
 *
 * @param props - Parameters passed down from React parents to children
 * @param props.children - Children in the React DOM Tree
 * @returns The containing Components for Search Feedback Text
 */
const AdminTableFeedbackComponent: FC = ({ children }) => (
    <Col>
        <TextCenter>
            <h2 className="text-muted font-weight-light pt-3">{children}</h2>
        </TextCenter>
    </Col>
);

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
    const [sortingInformation, setSortingInformation] = useState<{ field: keyof IUser; ascending: boolean }>({
        field: 'id',
        ascending: true,
    });
    const [searchingInformation, search, removeSearch] = useFilterType<string>();
    const [booleanFilters, addOrEditBooleanFilters, removeBooleanFilters] = useFilterType<boolean[]>();

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

    // Boolean Dropdown Filtering
    let filteredUsers = users;

    for (const filter of booleanFilters) {
        filteredUsers = filteredUsers?.filter((value) => {
            const searchValue = value[filter.field];
            if (!(typeof searchValue === 'boolean')) {
                // This should only be applied to boolean filters - so don't do anything if it isn't
                return true;
            }
            return filter.value.includes(searchValue);
        });
    }

    // Searching
    let searchedUsers = filteredUsers;

    for (const search of searchingInformation) {
        const searchableQuery = search.value.toLowerCase();
        searchedUsers = searchedUsers?.filter((value) => {
            const stringSearchValue = value[search.field]?.toString().toLowerCase() ?? '';
            return stringSearchValue.includes(searchableQuery);
        });
    }

    // Sorting
    const sortedUsers = searchedUsers?.sort((first, second) => {
        const firstField = first[sortingInformation.field] ?? 0;
        const secondField = second[sortingInformation.field] ?? 0;
        const result = firstField <= secondField;

        // Return -1 if result && ascending or !result && !ascending
        return result === sortingInformation.ascending ? -1 : 1;
    });

    // Pagination
    const numUsers = sortedUsers?.length ?? 0;
    const pageCount = Math.ceil(numUsers / NUM_USERS_PER_PAGE);
    const paginatedUsers = sortedUsers?.slice(
        page * NUM_USERS_PER_PAGE,
        page * NUM_USERS_PER_PAGE + NUM_USERS_PER_PAGE
    );

    // Display
    const rowsMaybeNull = paginatedUsers?.map((user, key) => (
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

    // Add no users found
    const underTable =
        rows === null ? (
            <AdminTableFeedbackComponent>Loading</AdminTableFeedbackComponent>
        ) : rows.length === 0 ? (
            <AdminTableFeedbackComponent>No Users Found</AdminTableFeedbackComponent>
        ) : null;

    return (
        <>
            <Table striped hover>
                <AdminToolsTableHeader
                    fields={fields}
                    setSortingInformation={setSortingInformation}
                    search={search}
                    removeSearch={removeSearch}
                    addOrEditBooleanFilters={addOrEditBooleanFilters}
                    removeBooleanFilters={removeBooleanFilters}
                />
                <tbody>{rows}</tbody>
            </Table>
            {underTable}
            {pageChooser}
        </>
    );
};

export default UsersGrid;
