import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import memory from './memory';
import counter from './counter';

export default combineReducers({
  memory,
  counter,
  routing: routerReducer,
});
