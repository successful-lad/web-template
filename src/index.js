import React from 'react';
import { Switch, Route, Router } from 'react-router';
import { Provider } from 'react-redux';
import { history } from "./appConfig";
import routes from "./consts/routes";
import store from "./configureStore";

import {
  MainScreen,
  SecondScreen,
} from '../src/screens';


import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={ history }>
        <Switch>
          <Route path={routes.getSecondScreen()} component={SecondScreen} />
          <Route path={routes.getMainScreen()} component={MainScreen} />
          {/*<Route path={routes.getMainScreen()} component={MainScreen} />*/}
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
