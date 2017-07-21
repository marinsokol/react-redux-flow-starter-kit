// @flow
import { GAME } from '../../../constants/actionTypes';
import type { Slot, SlotAction } from '../types';

type State = {
  board: Array<Slot>,
}

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
};

export default (state: State = initState, { type, payload }: SlotAction): State => {
  switch (type) {
    case GAME.toggle:
      return {
        ...state,
        board: state.board.map((i, index) => {
          if (index === payload.id) {
            return {
              ...i,
              selected: !i.selected,
            };
          }

          return {
            ...i,
          };
        }),
      };
    default:
      return state;
  }
};
