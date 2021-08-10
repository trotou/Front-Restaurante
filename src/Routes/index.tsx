import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <HomePage />
    </Route>
    <Route>
      <NotFoundPage />
    </Route>
  </Switch>
);

export default Routes;
