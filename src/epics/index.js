import { combineEpics } from 'redux-observable';
import { doubleClick } from './counter';

export default combineEpics(
  doubleClick,
);
