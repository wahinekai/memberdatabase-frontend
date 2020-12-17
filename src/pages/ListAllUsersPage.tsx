/**
 * @file Contains all the components of the list all users page, as well as its authentication status
 */

import React, { FC } from 'react';
import { Header, ListAllUsers } from '../components';

/**
 * Contains the components and authentication status for the list all users page
 *
 * @returns the Register page
 */
const ListAllUsersPage: FC = () => (
    <>
        <Header>All Members</Header>
        <ListAllUsers />
    </>
);

export default ListAllUsersPage;
