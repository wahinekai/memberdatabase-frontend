/**
 * @file The root of the application, specifying mappings between pages and components
 */

import React, { FC } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { PropTypes } from '../model';
import { ProfilePage } from '../pages';

/**
 * The root of the application, specifying mappings between pages and components
 *
 * @returns The Main Router Component
 */
const MainRouter: FC<PropTypes.MainRouter> = () => (
    <Router>
        <Switch>
            <Route exact path="/">
                <ProfilePage />
            </Route>
        </Switch>
    </Router>
);

export default MainRouter;
