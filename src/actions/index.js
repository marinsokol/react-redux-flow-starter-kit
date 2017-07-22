import { COUNTER } from '../constants/actionTypes';

export const addCounter = () => ({
  type: COUNTER.add,
});

export const addTwoCounter = () => ({
  type: COUNTER.doubleClick,
});
