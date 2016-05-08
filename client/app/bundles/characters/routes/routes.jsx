import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from '../layout/Layout';
import Roster from '../containers/Roster';
import Play from '../containers/Play';

export default (
  <Route path="/characters" component={Layout}>
      <IndexRoute component={Roster} />
      <Route path=":id" component={Play} />
  </Route>
);
