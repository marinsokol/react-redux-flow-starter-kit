import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { makeRootReducer } from '../reducers';

export default (initalState = {}) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    makeRootReducer(),
    initalState,
    composeEnhancers(
      applyMiddleware(
        reduxImmutableStateInvariant()
      )
    )
  );

  store.asyncReducers = {};

  return store;
};
