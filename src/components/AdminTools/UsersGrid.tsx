/* eslint-disable no-loops/no-loops */
/**
 * @file Lists all members of Wahine Kai as a UserCard
 */

import React, { FC, useCallback, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import { Guid } from 'guid-typescript';
import { plainToClass } from 'class-transformer';

import { HttpMethodTypes, IUser, PropTypes, User } from '../../model';
import { apiCallAsync, Ensure } from '../../utils';
import { useFilterType } from '../../hooks';

import PageChooser from '../PageChooser';
import { TextCenter } from '../Style';
import TableHeader from './TableHeader';
import UserRow from './UserRow';

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
    const [filters, addOrEditFilters, removeFilters] = useFilterType<boolean[] | string[]>();
    const [ranges, addOrEditRanges, removeRanges] = useFilterType<[number, number]>();

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

    // Dropdown Filtering
    let filteredUsers = users;

    for (const filter of filters) {
        filteredUsers = filteredUsers?.filter((value) => {
            // Set to never so that it can be checked for inclusion
            const searchValue = value[filter.field] as never;
            // Check that filters have length and check that array types match (check first element of array)
            if (filter.value.length === 0 || typeof filter.value[0] !== typeof searchValue) {
                // If can't be filtered - just return true
                return true;
            }

            // Return true iff searchValue is one of the filteredValues
            return filter.value.includes(searchValue);
        });
    }

    // Range Filtering
    for (const range of ranges) {
        filteredUsers = filteredUsers?.filter((value) => {
            // Set to never so that it can be checked for inclusion
            const user = plainToClass(User, value);
            const [first, second] = range.value;
            const searchValue = user[range.field] as string | number | Date | undefined;

            // If undefined, don't include
            if (searchValue === undefined) {
                return false;
            }

            // If number, do number comparison
            if (typeof searchValue == 'number') {
                return searchValue >= first && searchValue <= second;
            }

            // SearchDate is either a date already (this will do nothing) or a date string - make it unix number
            const searchDate = new Date(searchValue as string | Date).valueOf();

            // Compare to get answer
            return searchDate >= first && searchDate <= second;
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
            <UserRow fields={fields} user={user} setUser={(updatedUser) => setUser(user.id, updatedUser)} />
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
                <TableHeader
                    fields={fields}
                    setSortingInformation={setSortingInformation}
                    search={search}
                    removeSearch={removeSearch}
                    addOrEditFilters={addOrEditFilters}
                    removeFilters={removeFilters}
                    addOrEditRanges={addOrEditRanges}
                    removeRanges={removeRanges}
                />
                <tbody>{rows}</tbody>
            </Table>
            {underTable}
            {pageChooser}
        </>
    );
};

export default UsersGrid;
