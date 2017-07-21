import { connect } from 'react-redux';
import Game from '../components/Game.component';
import { openSlot } from '../actions';

const mapStateToProps = state => ({
  ...state.memory,
});

const mapDispatchToProps = dispatch => ({
  openSlot: data => dispatch(openSlot(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
