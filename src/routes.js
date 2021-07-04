import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  WelcomePage,
  FormPage,
  ConfirmPage
} from './containers';

const routes = () => 
    <Switch>
      <Route path='/form'>
        <FormPage />
      </Route>
      <Route path='/confirm'>
        <ConfirmPage />
      </Route>
      <Route path='/'>
        <WelcomePage />
      </Route>
    </Switch>
  
export default routes;