import React, { PureComponent } from 'react';
import {
  Card,
  Col,
  Button,
} from 'antd';
import type { Slot } from '../types';

type Props = {
  board: Array<Slot>,
  player: string,
  result: {
    x: number,
    o: number,
  },
  openSlot: Function,
  restartGame: Function,
  resetBoard: Function,
};
type State = {
  disableClick: boolean,
};

export default class extends PureComponent<void, Props, State> {
  static displayName = 'Game'

  state = {
    disableClick: false,
  }

  componentWillUpdate(nextProps: Props) {
    if (this.props.player !== nextProps.player) {
      this.setState({ disableClick: true });
      setTimeout(() => {
        this.props.resetBoard();
        this.setState({ disableClick: false });
      }, 1000);
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

  handleClick = (slot: Slot) => {
    const { disableClick } = this.state;
    if (slot.selected || slot.open || disableClick) return;

    this.props.openSlot(slot);
  }

  handleRestart = () => this.props.restartGame()

  render() {
    const { result: { x, o }, player } = this.props;

    return (
      <div className="game">
        <div className="game-header">
          <Col md={8} xs={8}>
            <Button
              type="dashed"
              onClick={this.handleRestart}
            >
              NEW GAME
             </Button>
          </Col>
          <Col md={8} xs={8}>
            {x} : {o}
          </Col>
          <Col md={8} xs={8}>
            Playing: <b>{player}</b>
          </Col>
        </div>
        <div className="game-body">
          {this.getBoardDOM()}
        </div>
      </div>
    );
  }
}
