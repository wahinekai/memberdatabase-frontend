/**
 * @file The root of the application, specifying mappings between pages and components
 */

import React, { FC, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { HttpMethodTypes } from '../model';
import {
    CreateUserPage,
    EditUserPage,
    HomePage,
    ListAllUsersPage,
    NotFoundPage,
    ProfilePage,
    SearchPage,
} from '../pages';
import { apiCallAsync, Ensure } from '../utils';

/**
 * Gets the profile of the authenticated user
 *
 * @returns The authenticated user's profile
 */
const getIsAdminAsync = (): Promise<boolean> => apiCallAsync<boolean>(HttpMethodTypes.GET, '/Users/IsAdmin/Me');

/**
 * The root of the application, specifying mappings between pages and components
 *
 * @returns The Main Router Component
 */
const MainRouter: FC = () => {
    // Overall check - only admin users can use this application at the moment
    // Will throw error and go to error page if user is not an admin (or backend throws error)
    useEffect(() => {
        getIsAdminAsync().then((isAdmin) => Ensure.isTrue(() => isAdmin));
    });

    return (
        <Router>
            <Switch>
                <Route exact path="/users/create">
                    <CreateUserPage />
                </Route>
                <Route exact path="/users/:userId">
                    <EditUserPage />
                </Route>
                <Route exact path="/search/all">
                    <ListAllUsersPage />
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
