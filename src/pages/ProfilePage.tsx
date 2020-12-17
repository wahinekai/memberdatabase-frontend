/**
 * @file Contains all the components of the profile page, as well as its authentication status
 */

import React, { FC } from 'react';
import { Header, Profile } from '../components';

/**
 * Contains the components and authentication status for the profile page
 *
 * @returns the Register page
 */
const ProfilePage: FC = () => {
    return (
        <>
            <Header>Edit your profile</Header>
            <Profile />
        </>
    );
};

export default ProfilePage;
