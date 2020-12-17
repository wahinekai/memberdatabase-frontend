/**
 * @file Contains all the components of the create user page, as well as its authentication status
 */

import React, { FC } from 'react';
import { ApplicationNavbar, Header, CreateUser } from '../components';
import { NavbarStyles } from '../model';

/**
 * Contains the components and authentication status for the profile page
 *
 * @returns the Register page
 */
const CreateUserPage: FC = () => (
    <>
        <ApplicationNavbar style={NavbarStyles.primary} />
        <Header>Create User</Header>
        <CreateUser />
    </>
);

export default CreateUserPage;
