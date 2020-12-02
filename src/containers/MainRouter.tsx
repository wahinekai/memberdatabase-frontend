import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Authenticated, BottomNavbar, Unauthenticated } from '../components';
import { PropTypes, ReduxState } from '../model';
import { Login, Profile, Register } from '.';

/**
 * @param root0
 * @param root0.user
 */
const MainRouter: FC<PropTypes.MainRouter> = ({ user }) => (
    <Router>
        <Switch>
            <Route exact path="/register">
                <Unauthenticated user={user}>
                    <Register />
                </Unauthenticated>
            </Route>
            <Route exact path="/login">
                <Unauthenticated user={user}>
                    <Login />
                </Unauthenticated>
            </Route>
            <Route exact path="/profile">
                <Authenticated user={user}>
                    <Profile />
                    <BottomNavbar />
                </Authenticated>
            </Route>
            <Route exact path="/">
                <Redirect to="/profile" />
            </Route>
        </Switch>
    </Router>
);

/**
 * @param root0
 * @param root0.user
 */
const mapStateToProps = ({ user }: ReduxState) => ({
    user,
});

export default connect(mapStateToProps, null)(MainRouter);
