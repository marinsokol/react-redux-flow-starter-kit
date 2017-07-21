import { connect } from 'react-redux';
import Game from '../components/Game.component';
import { openSlot, restartGame } from '../actions';

const mapStateToProps = state => ({
  ...state.memory,
});

const mapDispatchToProps = dispatch => ({
  openSlot: data => dispatch(openSlot(data)),
  restartGame: () => dispatch(restartGame()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
