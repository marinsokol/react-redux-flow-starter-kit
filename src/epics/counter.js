import { COUNTER } from '../constants/actionTypes';

export const doubleClick = action$ =>
  action$.ofType(COUNTER.doubleClick)
    .delay(1000)
    .mapTo({ type: COUNTER.doubleAdd });
