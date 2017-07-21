import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';

/**
 *  Make Root Reducer
 */
export const makeRootReducer = asyncReducers => (
  combineReducers({
    routing: routerReducer,
    counter,
    ...asyncReducers,
  })
);

/**
 *  Inject Reducer
 */
export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer; // eslint-disable-line
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};
