import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createEpicMiddleware } from 'redux-observable';
import { makeRootReducer } from '../reducers';
import epics from '../epics';
import type { Store } from '../types';

export default (initalState: Object = {}): Store => {
  const epicMiddleware = createEpicMiddleware(epics);
  let composeEnhancers = compose;

  if (process.env.NODE_ENV !== 'production') {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }

  const store = createStore(
    makeRootReducer({ key: '', reducer: {} }),
    initalState,
    composeEnhancers(
      applyMiddleware(
        epicMiddleware,
        reduxImmutableStateInvariant()
      )
    )
  );

  store.asyncReducers = {};

  return store;
};
