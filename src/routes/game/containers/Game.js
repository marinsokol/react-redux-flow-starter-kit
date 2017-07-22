import { connect } from 'react-redux';
import Game from '../components/Game.component';
import {
  openSlot,
  restartGame,
  resetBoard,
} from '../actions';
import type { Slot } from '../types';

type Memory = {
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
type State = {
  counter: number,
  memory: Memory,
};

const mapStateToProps = (state: State): Memory => ({
  ...state.memory,
});

const mapDispatchToProps = dispatch => ({
  openSlot: (data: Slot) => dispatch(openSlot(data)),
  restartGame: () => dispatch(restartGame()),
  resetBoard: () => dispatch(resetBoard()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
