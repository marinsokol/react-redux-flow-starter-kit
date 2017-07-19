import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import memory from './memory';

export default combineReducers({
  memory,
  routing: routerReducer,
});
