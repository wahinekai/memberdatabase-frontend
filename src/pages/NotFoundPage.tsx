/**
 * @file Contains all the components of the not found page, as well as its authentication status
 */

import React, { FC } from 'react';
import { ApplicationNavbar, Header } from '../components';
import { NavbarStyles } from '../model';

/**
 * Contains the components and authentication status for the not found page
 *
 * @returns the Register page
 */
const NotFoundPage: FC = () => {
    return (
        <>
            <ApplicationNavbar style={NavbarStyles.primary} />
            <Header>404: Page not Found</Header>
        </>
    );
};

export default NotFoundPage;
