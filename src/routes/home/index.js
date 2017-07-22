// @flow
import { connect } from 'react-redux';
import Home from './components/Home.component';
import { addCounter, addTwoCounter } from '../../actions';

type State = {
  counter: number
};

const mapStateToProps = (state: State) => ({
  counter: state.counter,
});

const mapDispatchToProps = dispatch => ({
  addCounter: () => dispatch(addCounter()),
  addTwoCounter: () => dispatch(addTwoCounter()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
