/**
 * @file Contains all the components of the list all users page, as well as its authentication status
 */

import React, { FC } from 'react';

import { AdminTools, Header } from '../components';

/**
 * Contains the components and authentication status for the list all users page
 *
 * @returns the Register page
 */
const AdminToolsPage: FC = () => (
    <>
        <Header>Administrator Tools</Header>
        <AdminTools />
    </>
);

export default AdminToolsPage;
