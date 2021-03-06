/**
 * @file Contains all the components of the search page, as well as its authentication status
 */

import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { parse } from 'query-string';

import { Header, Search } from '../components';
import { Ensure } from '../utils';

/**
 * Contains the components and authentication status for the search page
 *
 * @returns the Register page
 */
const SearchPage: FC = () => {
    const location = useLocation();
    const { q } = parse(location.search);

    const query = Ensure.isNotNullOrWhitespace(() => q?.toString());

    return (
        <>
            <Header>Search Results</Header>
            <Search query={query} />
        </>
    );
};

export default SearchPage;
