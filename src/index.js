import React from 'react';
import { Switch, Route, Router } from 'react-router';
import { history } from "./appConfig";
import routes from "./consts/routes";

import {
  MainScreen,
  SecondScreen,
} from '../src/screens';


import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router history={ history }>
      <Switch>
        <Route path={routes.getSecondScreen()} component={SecondScreen} />
        <Route path={routes.getMainScreen()} component={MainScreen} />
        {/*<Route path={routes.getMainScreen()} component={MainScreen} />*/}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
