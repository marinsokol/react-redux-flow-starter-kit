import React, { PureComponent } from 'react';

export default class extends PureComponent {
  static displayName = 'Home'

  state = {}

  render() {
    return (<div className="home">
      <img src="/images/koala.png" alt="React/Redux Serverless" />
    </div>);
  }
}
