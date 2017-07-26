import game from '../../../../../src/routes/game/reducers';
import { GAME } from '../../../../../src/routes/game/constants/actionTypes';

const board = [
  { src: 1, selected: false, open: false, id: 0 },
  { src: 4, selected: false, open: false, id: 1 },
  { src: 1, selected: false, open: false, id: 2 },
  { src: 3, selected: false, open: false, id: 3 },
  { src: 5, selected: false, open: false, id: 4 },
  { src: 2, selected: false, open: false, id: 5 },
  { src: 8, selected: false, open: false, id: 6 },
  { src: 5, selected: false, open: false, id: 7 },
  { src: 4, selected: false, open: false, id: 8 },
  { src: 2, selected: false, open: false, id: 9 },
  { src: 6, selected: false, open: false, id: 10 },
  { src: 8, selected: false, open: false, id: 11 },
  { src: 7, selected: false, open: false, id: 12 },
  { src: 6, selected: false, open: false, id: 13 },
  { src: 3, selected: false, open: false, id: 14 },
  { src: 7, selected: false, open: false, id: 15 },
]
const initState = {
  board,
  player: 'x',
  turn: {
    x: 0,
    o: 0,
  },
  result: {
    x: 0,
    o: 0,
  },
};

describe('Game reducer', () => {

  it('Opens slot', () => {
    expect(
      game(initState, {
        type: GAME.open,
        payload: { src: 6, selected: false, open: false, id: 10 },
      })
    ).toEqual({
      ...initState,
      turn: {
        ...initState.turn,
        x: 1,
      },
      board: [
        { src: 1, selected: false, open: false, id: 0 },
        { src: 4, selected: false, open: false, id: 1 },
        { src: 1, selected: false, open: false, id: 2 },
        { src: 3, selected: false, open: false, id: 3 },
        { src: 5, selected: false, open: false, id: 4 },
        { src: 2, selected: false, open: false, id: 5 },
        { src: 8, selected: false, open: false, id: 6 },
        { src: 5, selected: false, open: false, id: 7 },
        { src: 4, selected: false, open: false, id: 8 },
        { src: 2, selected: false, open: false, id: 9 },
        { src: 6, selected: true, open: false, id: 10 },
        { src: 8, selected: false, open: false, id: 11 },
        { src: 7, selected: false, open: false, id: 12 },
        { src: 6, selected: false, open: false, id: 13 },
        { src: 3, selected: false, open: false, id: 14 },
        { src: 7, selected: false, open: false, id: 15 },
      ]
    });
  });

  it('opens pair of same slot', () => {
    expect(
      game({
        ...initState,
        turn: {
          ...initState.turn,
          x: 1,
        },
        board: [
          { src: 1, selected: false, open: false, id: 0 },
          { src: 4, selected: false, open: false, id: 1 },
          { src: 1, selected: false, open: false, id: 2 },
          { src: 3, selected: false, open: false, id: 3 },
          { src: 5, selected: false, open: false, id: 4 },
          { src: 2, selected: false, open: false, id: 5 },
          { src: 8, selected: false, open: false, id: 6 },
          { src: 5, selected: false, open: false, id: 7 },
          { src: 4, selected: false, open: false, id: 8 },
          { src: 2, selected: false, open: false, id: 9 },
          { src: 6, selected: true, open: false, id: 10 },
          { src: 8, selected: false, open: false, id: 11 },
          { src: 7, selected: false, open: false, id: 12 },
          { src: 6, selected: false, open: false, id: 13 },
          { src: 3, selected: false, open: false, id: 14 },
          { src: 7, selected: false, open: false, id: 15 },
        ]
      }, {
          type: GAME.open,
          payload: { src: 6, selected: false, open: false, id: 13 },
        })
    ).toEqual({
      ...initState,
      turn: {
        ...initState.turn,
        x: 2,
      },
      result: {
        ...initState.result,
        x: 1,
      },
      board: [
        { src: 1, selected: false, open: false, id: 0 },
        { src: 4, selected: false, open: false, id: 1 },
        { src: 1, selected: false, open: false, id: 2 },
        { src: 3, selected: false, open: false, id: 3 },
        { src: 5, selected: false, open: false, id: 4 },
        { src: 2, selected: false, open: false, id: 5 },
        { src: 8, selected: false, open: false, id: 6 },
        { src: 5, selected: false, open: false, id: 7 },
        { src: 4, selected: false, open: false, id: 8 },
        { src: 2, selected: false, open: false, id: 9 },
        { src: 6, selected: true, open: true, id: 10 },
        { src: 8, selected: false, open: false, id: 11 },
        { src: 7, selected: false, open: false, id: 12 },
        { src: 6, selected: true, open: true, id: 13 },
        { src: 3, selected: false, open: false, id: 14 },
        { src: 7, selected: false, open: false, id: 15 },
      ]
    });
  })

  it('restarts board', () => {
    expect(
      game({
        ...initState,
        turn: {
          ...initState.turn,
          x: 2,
        },
        result: {
          ...initState.result,
          x: 1,
        },
        board: [
          { src: 1, selected: false, open: false, id: 0 },
          { src: 4, selected: false, open: false, id: 1 },
          { src: 1, selected: false, open: false, id: 2 },
          { src: 3, selected: false, open: false, id: 3 },
          { src: 5, selected: false, open: false, id: 4 },
          { src: 2, selected: false, open: false, id: 5 },
          { src: 8, selected: false, open: false, id: 6 },
          { src: 5, selected: false, open: false, id: 7 },
          { src: 4, selected: false, open: false, id: 8 },
          { src: 2, selected: false, open: false, id: 9 },
          { src: 6, selected: true, open: true, id: 10 },
          { src: 8, selected: false, open: false, id: 11 },
          { src: 7, selected: false, open: false, id: 12 },
          { src: 6, selected: true, open: true, id: 13 },
          { src: 3, selected: false, open: false, id: 14 },
          { src: 7, selected: false, open: false, id: 15 },
        ]
      }, {
          type: GAME.resetBoard,
        })
    ).toEqual({
      ...initState,
      turn: {
        ...initState.turn,
        x: 2,
      },
      result: {
        ...initState.result,
        x: 1,
      },
      board: [
        { src: 1, selected: false, open: false, id: 0 },
        { src: 4, selected: false, open: false, id: 1 },
        { src: 1, selected: false, open: false, id: 2 },
        { src: 3, selected: false, open: false, id: 3 },
        { src: 5, selected: false, open: false, id: 4 },
        { src: 2, selected: false, open: false, id: 5 },
        { src: 8, selected: false, open: false, id: 6 },
        { src: 5, selected: false, open: false, id: 7 },
        { src: 4, selected: false, open: false, id: 8 },
        { src: 2, selected: false, open: false, id: 9 },
        { src: 6, selected: false, open: true, id: 10 },
        { src: 8, selected: false, open: false, id: 11 },
        { src: 7, selected: false, open: false, id: 12 },
        { src: 6, selected: false, open: true, id: 13 },
        { src: 3, selected: false, open: false, id: 14 },
        { src: 7, selected: false, open: false, id: 15 },
      ]
    });
  })

});
