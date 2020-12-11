/**
 * @file The root of the application, specifying mappings between pages and components
 */

import React, { FC } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { ProfilePage } from '../pages';
import { signInAuthProvider } from '../utils';

/**
 * Logout component for logout link
 *
 * @returns never returns, just logs out the user
 */
const Logout: FC = () => {
    signInAuthProvider.logout();
    return null;
};

/**
 * The root of the application, specifying mappings between pages and components
 *
 * @returns The Main Router Component
 */
const MainRouter: FC = () => (
    <Router>
        <Switch>
            <Route exact path="/search">
                <Redirect to="/" />
            </Route>
            <Route exact path="/profile">
                <ProfilePage />
            </Route>
            <Route exact path="/logout">
                <Logout />
            </Route>
            <Route exact path="/">
                <Redirect to="/profile" />
            </Route>
        </Switch>
    </Router>
);

export default MainRouter;
