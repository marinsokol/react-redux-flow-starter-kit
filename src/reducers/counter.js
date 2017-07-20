import { COUNTER } from '../constants/actionTypes';

export default function (state = 0, { type }) {
  switch (type) {
    case COUNTER.add:
      return state + 1;
    default:
      return state;
  }
}
