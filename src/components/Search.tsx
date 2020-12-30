/**
 * @file Definition of Wahine Kai Search Results List Component
 */

import React, { FC, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { HttpMethodTypes, PartialUser, PropTypes } from '../model';
import { apiCallAsync } from '../utils';
import UserCard from './UserCard';

/**
 * Gets all users from the backend
 *
 * @param query - The query string to give to the backend
 * @returns All users from the backend
 */
const getUsersAsync = (query: string): Promise<PartialUser.UserForCard[]> =>
    apiCallAsync<PartialUser.UserForCard[]>(HttpMethodTypes.GET, `/Search/Query?query=${query}`);

/**
 * A Component that displays results of a search as user cards
 *
 * @param props - Parameters passed down from React parents to children
 * @param props.query - The search query to run for this component
 * @returns A list of user cards in a container
 */
const Search: FC<PropTypes.Search> = ({ query }) => {
    const [users, setUsers] = useState<PartialUser.UserForCard[]>();

    // Update state with newest user on first render
    useEffect(() => {
        getUsersAsync(query).then((users) => setUsers(users));
    }, [setUsers, query]);

    const usersListMaybeNull = users?.map((user, i) => (
        <Col xs={12} sm={12} md={6} lg={4} xl={3} key={i}>
            <UserCard key={i} user={user} />
        </Col>
    ));

    const usersList = usersListMaybeNull ?? null;

    return (
        <Container>
            <Row>{usersList}</Row>
        </Container>
    );
};

export default Search;
