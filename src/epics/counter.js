import { COUNTER } from '../constants/actionTypes';

type ActionsObservable = {
  source: Object,
  _isScalar: boolean,
  ofType: Function,
}

export const doubleClick = (action$: ActionsObservable) =>
  action$.ofType(COUNTER.doubleClick)
    .delay(1000)
    .mapTo({ type: COUNTER.doubleAdd });
