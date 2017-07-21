// @flow
import { GAME } from '../../../constants/actionTypes';
import type { Slot, SlotAction } from '../types';

type State = {
  board: Array<Slot>,
  player: string,
  turn: number,
  result: {
    x: number,
    o: number,
  },
};

const board = [];
let id = 0;
while (board.length < 16) {
  const temp = Math.floor(Math.random() * 8) + 1;
  if (board.filter(i => i.src === temp).length < 2) {
    board.push({
      src: temp,
      selected: false,
      id,
    });
    id += 1;
  }
}

const initState = {
  board,
  player: 'x',
  turn: 0,
  result: {
    x: 0,
    o: 0,
  },
};

const checkBoard = (state: State, slot: Slot): State => {
  const { turn } = state;
  if (turn === 0) {
    return {
      ...state,
      turn: 1,
      board: state.board.map((i, index) => {
        if (slot.id === index) {
          return {
            ...i,
            selected: true,
          };
        }

        return { ...i };
      }),
    };
  } else if (turn === 1) {
    const index = state.board.findIndex(i => (i.src === slot.src && i.selected));

    console.log(index);
    console.log(state.board[index]);
  }

  return state;
};

export default (state: State = initState, { type, payload }: SlotAction): State => {
  switch (type) {
    case GAME.open:
      return checkBoard(state, payload);
    default:
      return state;
  }
};
