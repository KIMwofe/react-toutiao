import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

class AuthRoute extends React.Component {
  render() {
    let { component: Component, login, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={routerProps => {
          if (login.username) {
            return <Component {...routerProps} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: '/login',
                  state: { redirect: routerProps.match.url }
                }}
              />
            );
          }
        }}
      />
    );
  }
}

export default connect(
  ({ login }) => {
    return {
      login
    };
  },
  null
)(AuthRoute);