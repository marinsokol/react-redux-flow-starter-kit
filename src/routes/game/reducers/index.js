// @flow
import { GAME } from '../constants/actionTypes';
import type { Slot, SlotAction } from '../types';

type State = {
  board: Array<Slot>,
  player: string,
  turn: {
    x: number,
    o: number,
  },
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
      open: false,
      id,
    });
    id += 1;
  }
}

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

const checkGame = (state: State, slot: Slot): State => {
  const slotIndex = state.board.findIndex(i => (i.src === slot.src && i.selected));

  if (slotIndex !== -1) {
    return {
      ...state,
      turn: {
        ...state.turn,
        [state.player]: state.turn[state.player] + 1,
      },
      result: {
        ...state.result,
        [state.player]: state.result[state.player] + 1,
      },
      board: state.board.map((i) => {
        if (slot.src === i.src) {
          return {
            ...i,
            selected: true,
            open: true,
          };
        }

        return { ...i };
      }),
    };
  }


  if ((state.turn[state.player] + 1) % 2 === 0) {
    return {
      ...state,
      player: (state.player === 'x') ? 'o' : 'x',
      turn: {
        ...state.turn,
        [state.player]: state.turn[state.player] + 1,
      },
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
  }

  return {
    ...state,
    turn: {
      ...state.turn,
      [state.player]: state.turn[state.player] + 1,
    },
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
};

export default (state: State = initState, { type, payload }: SlotAction): State => {
  switch (type) {
    case GAME.open:
      return checkGame(state, payload);
    case GAME.resetBoard:
      return {
        ...state,
        board: state.board.map(i => ({
          ...i,
          selected: false,
        })),
      };
    case GAME.restart:
      return initState;
    default:
      return state;
  }
};
