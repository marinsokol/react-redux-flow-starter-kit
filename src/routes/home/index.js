// @flow
import { connect } from 'react-redux';
import Home from './components/Home.component';
import { addCounter } from './actions';

type State = {
  counter: number
};

const mapStateToProps = (state: State) => ({
  counter: state.counter,
});

const mapDispatchToProps = dispatch => ({
  addCounter: data => dispatch(addCounter(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
