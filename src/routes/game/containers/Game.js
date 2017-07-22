import { connect } from 'react-redux';
import Game from '../components/Game.component';
import {
  openSlot,
  restartGame,
  resetBoard,
} from '../actions';

const mapStateToProps = state => ({
  ...state.memory,
});

const mapDispatchToProps = dispatch => ({
  openSlot: data => dispatch(openSlot(data)),
  restartGame: () => dispatch(restartGame()),
  resetBoard: () => dispatch(resetBoard()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
