/**
 * @file Definition of Wahine Kai Search Results List Component
 */

import React, { FC, useEffect, useState, useCallback } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import { Button, Card } from 'react-bootstrap';
import { HttpMethodTypes, PartialUser, PropTypes } from '../model';
import { apiCallAsync } from '../utils';
import UserCard from './UserCard';
import { TextCenter } from './Style';
import PageChooser from './PageChooser';

/**
 * Number of users shown per page
 */
const NUM_USERS_PER_PAGE = 20;

/**
 * A Component that displays search feedback text
 *
 * @param props - Parameters passed down from React parents to children
 * @param props.children - Children in the React DOM Tree
 * @returns The containing Components for Search Feedback Text
 */
const SearchFeedbackComponent: FC = ({ children }) => (
    <Col>
        <TextCenter>
            <h2 className="text-muted font-weight-light pt-3">{children}</h2>
        </TextCenter>
    </Col>
);

/**
 * A Component that displays results of a search as user cards
 *
 * @param props - Parameters passed down from React parents to children
 * @param props.query - The search query to run for this component
 * @returns A list of user cards in a container
 */
const Search: FC<PropTypes.Search> = ({ query }) => {
    type stateType = {
        users: PartialUser.UserForCard[];
        searching: boolean;
        page: number;
    };

    const [state, setState] = useState<stateType>({ searching: false, users: [], page: 0 });
    const setPage = useCallback((page: number) => setState({ ...state, page }), [state]);

    const search = useCallback(async () => {
        setState({ searching: true, users: [], page: 0 });
        const users = await apiCallAsync<PartialUser.UserForCard[]>(
            HttpMethodTypes.GET,
            `/Search/Query?query=${encodeURIComponent(query)}`
        );
        setState({ users, searching: false, page: 0 });
        console.log(users);
    }, [setState, query]);

    // Update state with newest user on first render
    useEffect(() => {
        search();
    }, [search]);

    const activeUsers = state.users.filter((user) => {
        return user.status != 'Terminated';
    });
    const terminatedUsers = state.users.filter((user) => {
        return user.status == 'Terminated';
    });

    const terminatedfilteredUsers = terminatedUsers?.slice(
        state.page * NUM_USERS_PER_PAGE,
        state.page * NUM_USERS_PER_PAGE + NUM_USERS_PER_PAGE
    );
    const teminatedusersListMaybeNull = terminatedfilteredUsers.map((user, i) => (
        <Col xs={12} sm={12} md={6} lg={4} xl={3} key={i}>
            <UserCard key={i} user={user} />
        </Col>
    ));

    // Pagination
    const numUsers = activeUsers?.length ?? 0;
    const numTerminatedUsers = terminatedUsers?.length ?? 0;

    const pageCount = Math.ceil(numUsers / NUM_USERS_PER_PAGE);
    const pageCountTerminated = Math.ceil(numTerminatedUsers / NUM_USERS_PER_PAGE);

    const filteredUsers = activeUsers?.slice(
        state.page * NUM_USERS_PER_PAGE,
        state.page * NUM_USERS_PER_PAGE + NUM_USERS_PER_PAGE
    );

    const usersListMaybeNull = filteredUsers.map((user, i) => (
        <Col xs={12} sm={12} md={6} lg={4} xl={3} key={i}>
            <UserCard key={i} user={user} />
        </Col>
    ));

    const searching = <SearchFeedbackComponent>Searching...</SearchFeedbackComponent>;

    const noUsersFound = (
        <SearchFeedbackComponent>
            Your search returned no results. <Link to="/">Try again?</Link>
        </SearchFeedbackComponent>
    );

    const terminatedusersList =
        terminatedUsers.length > 0 ? teminatedusersListMaybeNull : state.searching ? searching : noUsersFound;
    const usersList = state.users.length > 0 ? usersListMaybeNull : state.searching ? searching : noUsersFound;
    const pageChooser = pageCount > 1 ? <PageChooser pageCount={pageCount} onChange={setPage} /> : null;
    const pageChooserTerminated =
        pageCountTerminated > 1 ? <PageChooser pageCount={pageCountTerminated} onChange={setPage} /> : null;

    return (
        <>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Active Users
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Container>
                                <Row>{usersList}</Row>
                            </Container>
                            {pageChooser}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Terminated Users
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <Container>
                                <Row>{terminatedusersList}</Row>
                            </Container>
                            {pageChooserTerminated}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>
    );
};

export default Search;
