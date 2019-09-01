import React from 'react';
import {
  Route,
  Router,
  Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import {
  HomePage,
  Error404Page,
} from '../pages';

const history = createBrowserHistory();

const MainLayout = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={Error404Page} />
      </Switch>
    </Router>
  );
};

export default MainLayout;
