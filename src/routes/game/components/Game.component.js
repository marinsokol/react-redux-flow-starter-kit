// @flow
import React, { PureComponent } from 'react';
import { Col } from 'antd';

type Slot = {
  src: number,
  selected: boolean,
};
type Props = {
  board: Array<Slot>,
  toggleSlot: Function,
};
type State = Object;

export default class extends PureComponent<void, Props, State> {
  static displayName = 'Game'

  state = {}

  getBoardDOM = () =>
    this.props.board.map((i, index) => (
      <Col
        className="game-slot"
        span={5}
        key={index}
        onClick={() => this.handleClick(i)}
      >
        <img src={`/images/memory/${(i.selected) ? i.src : 'close'}.png`} alt="slot" />
      </Col>
    ))

  handleClick = (slot: Slot) => this.props.toggleSlot(slot)

  render() {
    return (
      <div className="game">
        <div className="game-body">
          {this.getBoardDOM()}
        </div>
        <div className="game-footer">
          0:0
        </div>
      </div>
    );
  }
}
