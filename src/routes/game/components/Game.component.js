// @flow
import React, { PureComponent } from 'react';
import { Card, Col } from 'antd';

type Slot = {
  src: number,
  selected: boolean,
};
type Props = {
  board: Array<Slot>,
  openSlot: Function,
};
type State = Object;

export default class extends PureComponent<void, Props, State> {
  static displayName = 'Game'

  state = {}

  getBoardDOM = () =>
    this.props.board.map((i, index) => (
      <Col md={6} xs={6}>
        <Card
          className="game-slot"
          key={index}
          onClick={() => this.handleClick(i)}
        >
          <img src={`/images/memory/${(i.selected) ? i.src : 'close'}.png`} alt="slot" />
        </Card>
      </Col>
    ))

  handleClick = (slot: Slot) => this.props.openSlot(slot)

  render() {
    return (
      <div className="game">
        <div className="game-header">
          0:0
        </div>
        <div className="game-body">
          {this.getBoardDOM()}
        </div>
      </div>
    );
  }
}
