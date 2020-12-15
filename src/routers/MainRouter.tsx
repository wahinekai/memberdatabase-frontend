/**
 * @file The root of the application, specifying mappings between pages and components
 */

import React, { FC } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { EditUserPage, HomePage, NotFoundPage, ProfilePage } from '../pages';

/**
 * The root of the application, specifying mappings between pages and components
 *
 * @returns The Main Router Component
 */
const MainRouter: FC = () => (
    <Router>
        <Switch>
            <Route exact path="/profile">
                <ProfilePage />
            </Route>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/users/:userId">
                <EditUserPage />
            </Route>
            <Route>
                <NotFoundPage />
            </Route>
        </Switch>
    </Router>
);

export default MainRouter;
