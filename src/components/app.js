import React, { PureComponent } from 'react';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';

type Props = {
  store: Object,
  routes: Object,
};
type State = {};

export default class extends PureComponent<void, Props, State> {
  static displayName = 'App'

  state = {}

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { store, routes } = this.props;

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory} routes={routes} />
        </div>
      </Provider>
    );
  }
}
