import React from 'react';
import { mount } from 'enzyme';
import Game from '../../../../../src/routes/game/components/Game.component';

const setup = () => {
  const props = {
    board: [
      {
        src: 1,
        selected: false,
        open: false,
        id: 0,
      },
      {
        src: 2,
        selected: false,
        open: false,
        id: 1,
      },
      {
        src: 3,
        selected: false,
        open: false,
        id: 2,
      },
    ],
    player: 'x',
    result: {
      x: 2,
      o: 1,
    },
    openSlot: jest.fn(),
    restartGame: jest.fn(),
    resetBoard: jest.fn(),
  };

  const enzymeWrapper = mount(<Game {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('Game', () => {

  it('should render self', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('button.ant-btn').length).toBe(1);
    expect(enzymeWrapper.find('.game-header .ant-col-md-8').at(1).text()).toBe('2 : 1');
    expect(enzymeWrapper.find('.game-slot').length).toBe(3)
  })

  it('restarts game', () => {
    const { enzymeWrapper, props } = setup();
    const input = enzymeWrapper.find('.game-header button');

    input.props().onClick();
    expect(props.restartGame.mock.calls.length).toBe(1);
  })

  it('opens game slot', () => {
    const { enzymeWrapper, props } = setup();
    const input = enzymeWrapper.find('.game-body .game-slot').at(0);

    input.props().onClick();
    expect(props.openSlot.mock.calls.length).toBe(1);
  })

})
