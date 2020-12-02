/**
 * @file The root of the application, specifying mappings between pages and components
 */

import React, { FC } from 'react';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { PropTypes } from '../model';
import { LoginPage, ProfilePage, RegisterPage } from '../pages';

/**
 * The root of the application, specifying mappings between pages and components
 *
 * @returns The Main Router Component
 */
const MainRouter: FC<PropTypes.MainRouter> = () => (
    <Router>
        <Switch>
            <Route exact path="/register">
                <RegisterPage />
            </Route>
            <Route exact path="/login">
                <LoginPage />
            </Route>
            <Route exact path="/profile">
                <ProfilePage />
            </Route>
            <Route exact path="/">
                <Redirect to="/profile" />
            </Route>
        </Switch>
    </Router>
);

export default MainRouter;
