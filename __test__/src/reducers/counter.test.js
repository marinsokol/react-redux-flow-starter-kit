import counter from '../../../src/reducers/counter';
import { COUNTER } from '../../../src/constants/actionTypes';

describe('Counter reducer', () => {

  it('Has default state', () => {
    expect(
      counter(undefined, { type: undefined })
    ).toEqual(0);
  });

  it('Handles 1 increment', () => {
    expect(
      counter(5, {
        type: COUNTER.add,
      })
    ).toEqual(6);
  })

  it('Handles 2 increment', () => {
    expect(
      counter(5, {
        type: COUNTER.doubleAdd,
      })
    ).toEqual(7);
  })

});
