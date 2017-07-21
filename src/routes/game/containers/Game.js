import { connect } from 'react-redux';
import Game from '../components/Game.component';
import { toggleSlot } from '../actions';

const mapStateToProps = state => ({
  ...state.memory,
});

const mapDispatchToProps = dispatch => ({
  toggleSlot: data => dispatch(toggleSlot(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
