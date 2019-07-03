import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AuthRoute from './utils/Auth';
import Login from './views/login/index';
import Home from './views/home/index';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    )
  }
}
