/**
 * @file Contains all the components of the home page, as well as its authentication status
 */

import React, { FC } from 'react';
import { ApplicationNavbar, Home } from '../components';
import { NavbarStyles } from '../model';

/**
 * Contains the components and authentication status for the home page
 *
 * @returns the Register page
 */
const HomePage: FC = () => {
    return (
        <>
            <ApplicationNavbar style={NavbarStyles.light} />
            <Home />
        </>
    );
};

export default HomePage;
