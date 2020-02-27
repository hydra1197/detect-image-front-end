import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, History } from '../containers';
import { Layout } from '../components';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/history'>
            <History />
          </Route>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
