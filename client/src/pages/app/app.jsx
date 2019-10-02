import React from 'react';
import { Router, Route } from 'react-router-dom';

import LandingPage from 'client/src/pages/landing';
import LoginPage from 'client/src/pages/login';
import withSession from 'client/src/pages/Session/withSession';

import * as routes from 'client/src/constants/routes';
import history from 'client/src/constants/history';

const App = ({ session, refetch }) => {
  if (session.me) {
    return (
      <Router history={history}>
        <div>
          <Route
            exact
            path={routes.LANDING}
            component={() => <LandingPage />}
          />{/*
          <Route
            exact
            path={routes.SIGN_UP}
            component={() => <SignUpPage refetch={refetch} />}
          />
          <Route
            exact
            path={routes.SIGN_IN}
            component={() => <SignInPage refetch={refetch} />}
          />
          <Route
            exact
            path={routes.ACCOUNT}
            component={() => <AccountPage />}
          />
          <Route
            exact
            path={routes.ADMIN}
            component={() => <AdminPage />}
          /> */}
        </div>
      </Router>
    );
  }

  return (
    <Router history={history}>
      <Route
        exact
        path={routes.LANDING}
        component={() => <LoginPage />}
      />
    </Router>
  );
};

export default withSession(App);
