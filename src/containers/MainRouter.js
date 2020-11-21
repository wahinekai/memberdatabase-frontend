import React from "react";
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Authenticated, Profile, Login, Register, Unauthenticated } from "./"
import { BottomNavbar } from '../components'

const MainRouter = () => (
  <Router>
      <Switch>
        <Route exact path="/register">
          {/* <Unauthenticated> */}
            <Register />
          {/* </Unauthenticated> */}
        </Route>
        <Route exact path="/login">
          {/* <Unauthenticated> */}
            <Login />
          {/* </Unauthenticated> */}
        </Route>
        <Route exact path="/profile">
          {/* <Authenticated> */}
            <Profile />
            <BottomNavbar />
          {/* </Authenticated> */}
        </Route>
        <Route exact path="/">
          <Redirect to="/profile" />
        </Route>
      </Switch>
  </Router>
)

const mapStateToProps = ({user}) => ({
    user
})

export default connect(mapStateToProps, null)(MainRouter)