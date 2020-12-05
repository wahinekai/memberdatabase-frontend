/**
 * @file Contains all the components of the profile page, as well as its authentication status
 */

import React, { FC } from 'react';
import { BottomNavbar, LoginHeader } from '../components';
import { Logout, Profile } from '../containers';

/**
 * Contains the components and authentication status for the profile page
 *
 * @returns the Register page
 */
const ProfilePage: FC = () => (
    <>
        <Logout />
        <LoginHeader text="Profile" />
        <Profile />
        <BottomNavbar />
    </>
);

export default ProfilePage;
