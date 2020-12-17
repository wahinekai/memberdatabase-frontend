/**
 * @file Lists all members of Wahine Kai as a UserCard
 */

import React, { FC, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { HttpMethodTypes, PartialUser } from '../model';
import { apiCallAsync, downloadFileAsync } from '../utils';
import { UserCard } from '.';

/**
 * Gets all users from the backend
 *
 * @returns All users from the backend
 */
const getAllAsync = (): Promise<PartialUser.UserForCard[]> =>
    apiCallAsync<PartialUser.UserForCard[]>(HttpMethodTypes.GET, '/Search/All');

/**
 * A Component that lists all users of the application in the form of user cards
 *
 * @returns A list of user cards in a container
 */
const ListAllUsers: FC = () => {
    const [users, setUsers] = useState<PartialUser.UserForCard[]>();

    // Update state with newest user on first render
    useEffect(() => {
        getAllAsync().then((users) => setUsers(users));
    }, [setUsers]);

    const usersListMaybeNull = users?.map((user, i) => (
        <Col xs={12} sm={12} md={6} lg={4} xl={3} key={i}>
            <UserCard key={i} user={user} />
        </Col>
    ));

    const usersList = usersListMaybeNull ?? null;

    return (
        <Container>
            <Row>{usersList}</Row>
            <Row>
                <Button
                    variant="primary"
                    className="rounded border-0 px-3 py-2 my-2"
                    onClick={() => downloadFileAsync('/Users/AllUsers.csv', 'AllUsers.csv')}
                    block
                >
                    Download a CSV of All Users
                </Button>
            </Row>
        </Container>
    );
};

export default ListAllUsers;
