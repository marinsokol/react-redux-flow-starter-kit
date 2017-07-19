import React, { PureComponent } from 'react';
import {
  Row,
  Col,
} from 'antd';

export default class extends PureComponent {
  static displayName = 'Game'

  state = {}

  getBoardDOM = () =>
    this.props.board.map((i, index) => (
      <Col span={6} key={index}>
        <img src={`/images/memory/${i}.png`} alt="slot" />
      </Col>
    ))

  render() {
    console.log(this.props);

    return (
      <div className="game">
        {this.getBoardDOM()}
      </div>
    )

    // return (<div className="game">
    //   <Row>
    //     <Col span={6}>
    //       test
    //     </Col>
    //     <Col span={6}>
    //       test
    //     </Col>
    //     <Col span={6}>
    //       test
    //     </Col>
    //     <Col span={6}>
    //       test
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col span={6}>
    //       test
    //     </Col>
    //     <Col span={6}>
    //       test
    //     </Col>
    //     <Col span={6}>
    //       test
    //     </Col>
    //     <Col span={6} >
    //       test
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col span={6}>
    //       test
    //     </Col>
    //     <Col span={6}>
    //       test
    //     </Col>
    //     <Col span={6}>
    //       test
    //     </Col>
    //     <Col span={6}>
    //       test
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col span={6}>
    //       test
    //     </Col>
    //     <Col span={6}>
    //       test
    //     </Col>
    //     <Col span={6}>
    //       test
    //     </Col>
    //     <Col span={6}>
    //       test
    //     </Col>
    //   </Row>
    // </div>);
  }
}
