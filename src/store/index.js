import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createEpicMiddleware } from 'redux-observable';
import { makeRootReducer } from '../reducers';
import epics from '../epics';

export default (initalState = {}) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const epicMiddleware = createEpicMiddleware(epics);

  const store = createStore(
    makeRootReducer(),
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
