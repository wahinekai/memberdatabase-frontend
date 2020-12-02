/**
 * @file Contains all the components of the profile page, as well as its authentication status
 */

import React, { FC } from 'react';
import { BottomNavbar } from '../components';
import { Authenticated, Logout, Profile } from '../containers';
import LoginHeader from '../components/LoginHeader';

/**
 * Contains the components and authentication status for the profile page
 *
 * @returns the Register page
 */
const ProfilePage: FC = () => (
    <Authenticated>
        <Logout />
        <LoginHeader text="Profile" />
        <Profile />
        <BottomNavbar />
    </Authenticated>
);

export default ProfilePage;
