// @flow
import { COUNTER } from '../constants/actionTypes';

type State = number;
type Action = {
  type: string,
}

export default function (state: State = 0, { type }: Action): State {
  switch (type) {
    case COUNTER.add:
      return state + 1;
    default:
      return state;
  }
}
