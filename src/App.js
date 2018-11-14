import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import LoginPage from './login-page';
import {Dashboard} from './dashboard';
import {NotFound} from './notfound';

const Protected = () => (
  <h1>Protected page</h1>
)

const PrivateRoute = (props) => (
  <Route render={(props) => (
    props.loggedin === true ? <Dashboard />
    : <Redirect to="/" />
  )} />
)

const App = (props) => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <PrivateRoute path="/dashboard" component={Protected} logged={props.loggedin}/>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
  )
}

const mapStateToProps = (state) => ({
  loggedin: state.main.loggedin
})

export default connect(mapStateToProps)(App);