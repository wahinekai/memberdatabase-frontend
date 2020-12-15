/**
 * @file Contains all the components of the profile page, as well as its authentication status
 */

import React, { FC } from 'react';
import { ApplicationNavbar, Header, Profile } from '../components';
import { NavbarStyles } from '../model';

/**
 * Contains the components and authentication status for the profile page
 *
 * @returns the Register page
 */
const ProfilePage: FC = () => {
    return (
        <>
            <ApplicationNavbar style={NavbarStyles.primary} />
            <Header>Edit your profile</Header>
            <Profile />
        </>
    );
};

export default ProfilePage;
