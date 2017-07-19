import { connect } from 'react-redux';
import Game from './components/Game.component';

const mapStateToProps = state => ({
  ...state.memory,
});

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
