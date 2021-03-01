/**
 * @file Definition of Wahine Kai Search Results List Component
 */

import React, { FC, useEffect, useState, useCallback } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import { HttpMethodTypes, PartialUser, PropTypes } from '../model';
import { apiCallAsync } from '../utils';
import UserCard from './UserCard';
import { TextCenter } from './Style';

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
    };

    const [state, setState] = useState<stateType>({ searching: false, users: [] });

    const search = useCallback(async () => {
        setState({ searching: true, users: [] });
        const users = await apiCallAsync<PartialUser.UserForCard[]>(
            HttpMethodTypes.GET,
            `/Search/Query?query=${query}`
        );
        setState({ users, searching: false });
    }, [setState, query]);

    // Update state with newest user on first render
    useEffect(() => {
        search();
    }, [search]);

    const usersListMaybeNull = state.users.map((user, i) => (
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

    const usersList = state.users.length > 0 ? usersListMaybeNull : state.searching ? searching : noUsersFound;

    return (
        <Container>
            <Row>{usersList}</Row>
        </Container>
    );
};

export default Search;
