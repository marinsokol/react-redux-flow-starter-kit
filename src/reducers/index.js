import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import type { Store } from '../types';

type Reducer = {
  key: string,
  reducer: Object,
}

/**
 *  Make Root Reducer
 */
export const makeRootReducer = (asyncReducers: Reducer) => (
  combineReducers({
    routing: routerReducer,
    counter,
    ...asyncReducers,
  })
);

/**
 *  Inject Reducer
 */
export const injectReducer = (store: Store, { key, reducer }: Reducer) => {
  store.asyncReducers[key] = reducer; // eslint-disable-line
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};
