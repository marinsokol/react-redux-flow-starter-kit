import React from 'react';
import renderer from 'react-test-renderer';
import Game from '../../../../src/routes/game/components/Game.component';

describe('Game Component', () => {
  const component = renderer.create(
    <Game />
  );
  it('Component renders', () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
