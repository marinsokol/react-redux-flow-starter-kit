import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../../../src/routes/home/components/Home.component';

describe('Home Component', () => {
  const component = renderer.create(
    <Home />
  );
  it('Component renders', () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
