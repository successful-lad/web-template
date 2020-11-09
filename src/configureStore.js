import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';
import thunk from "redux-thunk";

const configureStore = () => {
  let middlewares = [];

  if (process.env.NODE_ENV !== 'production') {
    middlewares = [...middlewares, logger];
  }

  middlewares = applyMiddleware(...middlewares, thunk);

  return createStore(
    reducers,
    middlewares,
  );
};
const store = configureStore();

export default store;