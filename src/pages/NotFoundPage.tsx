/**
 * @file Contains all the components of the not found page, as well as its authentication status
 */

import React, { FC } from 'react';
import { Header } from '../components';

/**
 * Contains the components and authentication status for the not found page
 *
 * @returns the Register page
 */
const NotFoundPage: FC = () => {
    return (
        <>
            <Header>404: Page not Found</Header>
        </>
    );
};

export default NotFoundPage;
