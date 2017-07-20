import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'antd';

export default class extends PureComponent {
  static displayName = 'Home'

  static propTypes = {
    counter: PropTypes.number,
    addCounter: PropTypes.func,
  }

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
