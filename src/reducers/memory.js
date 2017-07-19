import { GAME } from '../constants/actionTypes';

const board = [];
while (board.length < 16) {
  const temp = Math.floor(Math.random() * 8) + 1;
  if (board.filter(i => i === temp).length < 2) {
    board.push(temp);
  }
}

const initState = {
  board,
  played: [],
};

export default function (state = initState, { type, payload }) {
  switch (type) {
    case GAME.play:
      return state;
    default:
      return state;
  }
}
