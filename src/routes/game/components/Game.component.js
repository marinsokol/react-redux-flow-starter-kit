// @flow
import React, { PureComponent } from 'react';
import { Card, Col } from 'antd';

type Slot = {
  src: number,
  selected: boolean,
};
type Props = {
  board: Array<Slot>,
  player: string,
  result: {
    x: number,
    o: number,
  },
  openSlot: Function,
  restartGame: Function,
};
type State = Object;

export default class extends PureComponent<void, Props, State> {
  static displayName = 'Game'

  state = {}

  componentDidUpdate(prevProps: Props) {
    if (this.props.player !== prevProps.player) {
      this.props.restartGame();
    }
  }

  getBoardDOM = () =>
    this.props.board.map((i, index) => (
      <Col md={6} xs={6} key={index}>
        <Card
          className="game-slot"
          onClick={() => this.handleClick(i)}
        >
          <img src={`/images/memory/${(i.selected || i.open) ? i.src : 'close'}.png`} alt="slot" />
        </Card>
      </Col>
    ))

  handleClick = (slot: Slot) => this.props.openSlot(slot)

  render() {
    const { result: { x, o }, player } = this.props;
    return (
      <div className="game">
        <div className="game-header">
          <div className="game-title">
            x : o <br />
            {x} : {o}
          </div>
          <div className="game-subtitle">
            {player}
          </div>
        </div>
        <div className="game-body">
          {this.getBoardDOM()}
        </div>
      </div>
    );
  }
}
