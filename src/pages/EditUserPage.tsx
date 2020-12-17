/**
 * @file Contains all the components of the edit user page, as well as its authentication status
 */

import { Guid } from 'guid-typescript';
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Header, EditUser } from '../components';
import { PropTypes } from '../model';
import { Ensure } from '../utils';

/**
 * Contains the components and authentication status for the profile page
 *
 * @returns the Register page
 */
const EditUserPage: FC = () => {
    const { userId } = useParams<PropTypes.EditUserPage>();
    const userIdString = Ensure.isNotNullOrWhitespace(() => userId);
    const id = Guid.parse(userIdString);

    return (
        <>
            <Header>View/Edit User</Header>
            <EditUser id={id} />
        </>
    );
};

export default EditUserPage;
