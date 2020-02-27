import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './';

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false })
    : compose;

const storeConfigure = () => {
  const middleWares = [thunk, logger];
  const enhancers = [applyMiddleware(...middleWares)];

  return createStore(rootReducer, composeEnhancers(...enhancers));
};

export default storeConfigure;
