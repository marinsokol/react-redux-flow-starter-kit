// @flow
import React, { PureComponent } from 'react';
import { Badge } from 'antd';

type Props = {
  counter: number,
  addCounter: Function,
};
type State = Object;

export default class extends PureComponent<void, Props, State> {
  static displayName = 'Home'

  state = {}

  handleClick = () => this.props.addCounter()

  render() {
    const { counter } = this.props;

    return (<div className="home">
      <img
        src="/images/koala.png"
        alt="React/Redux Serverless"
        onClick={this.handleClick}
      />
      <Badge count={counter}>
        Koala pressed
      </Badge>
    </div>);
  }
}
