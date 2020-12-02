/**
 * @file Contains all the components of the profile page, as well as its authentication status
 */

import React, { FC } from 'react';
import { BottomNavbar } from '..';
import { Authenticated, Profile } from '../../containers';

/**
 * Contains the components and authentication status for the profile page
 *
 * @returns the Register page
 */
const ProfilePage: FC = () => (
    <Authenticated>
        <Profile />
        <BottomNavbar />
    </Authenticated>
);

export default ProfilePage;
