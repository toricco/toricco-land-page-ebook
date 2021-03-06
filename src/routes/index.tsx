import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../screens/Home';

const Routes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>
);

export default Routes;
