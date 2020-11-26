import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Profile, Login, Register } from './';
import { Authenticated, BottomNavbar, Unauthenticated } from '../components';

const MainRouter = () => (
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

const mapStateToProps = ({ user }) => ({
    user,
});

export default connect(mapStateToProps, null)(MainRouter);
