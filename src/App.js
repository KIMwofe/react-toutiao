import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AuthRoute from './utils/Auth';
import Login from './views/login/index';
import Home from './views/home/index';
import Search from './views/search/index';
import Searchfor from './views/searchfor';
import Content from './views/content';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/search" component={Search} />
          <Route path="/searchfor" component={Searchfor} />
          <Route path="/content" component={Content} />
          <AuthRoute path="/" component={Home} />
        </Switch>
      </Router>
    )
  }
}
