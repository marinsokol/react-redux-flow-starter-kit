// @flow
import React, { PureComponent } from 'react';
import {
  Badge,
  Row,
  Button,
  Col,
} from 'antd';

type Props = {
  counter: number,
  addCounter: Function,
  addTwoCounter: Function,
};
type State = Object;

export default class extends PureComponent<void, Props, State> {
  static displayName = 'Home'

  state = {}

  handleClick = () => this.props.addCounter()

  handleDoubleClick = () => this.props.addTwoCounter()

  render() {
    const { counter } = this.props;

    return (<div className="home">
      <img
        src="/images/koala.png"
        alt="React/Redux Serverless"
        onClick={this.handleClick}
      />
      <Row>
        <Col md={8} xs={8}>
          <Button
            ghost
            type="primary"
            onClick={this.handleClick}
          >
            Click
          </Button>
        </Col>
        <Col md={8} xs={8}>
          <Button
            ghost
            type="danger"
            onClick={this.handleDoubleClick}
            style={{height: '100% '}}
          >
            Double Click <br />
            <small>(1s delay)</small>
          </Button>
        </Col>
        <Col md={8} xs={8}>
          <Badge count={counter}>
            Koala pressed
        </Badge>
        </Col>
      </Row>
    </div>);
  }
}
