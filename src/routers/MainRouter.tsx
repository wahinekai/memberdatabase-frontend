/**
 * @file The root of the application, specifying mappings between pages and components
 */

import React, { FC, useContext } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { IsAdminContext } from '../contexts';
import {
    CreateUserPage,
    EditUserPage,
    HomePage,
    AdminToolsPage,
    NotFoundPage,
    ProfilePage,
    SearchPage,
} from '../pages';
import { Ensure } from '../utils';

/**
 * The root of the application, specifying mappings between pages and components
 *
 * @returns The Main Router Component
 */
const MainRouter: FC = () => {
    const isAdmin = useContext(IsAdminContext);

    // Overall check - only admin users can use this application at the moment
    // Will throw error and go to error page if user is not an admin (or backend throws error)
    Ensure.isTrue(() => isAdmin);

    return (
        <Router>
            <Switch>
                <Route exact path="/users/create">
                    <CreateUserPage />
                </Route>
                <Route exact path="/users/:userId">
                    <EditUserPage />
                </Route>
                <Route exact path="/admin">
                    <AdminToolsPage />
                </Route>
                <Route exact path="/search">
                    <SearchPage />
                </Route>
                <Route exact path="/profile">
                    <ProfilePage />
                </Route>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>
    );
};

export default MainRouter;
