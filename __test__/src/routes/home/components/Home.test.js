import React from 'react';
import { mount } from 'enzyme';
import Home from '../../../../../src/routes/home/components/Home.component';

const setup = () => {
  const props = {
    counter: 2,
    addCounter: jest.fn(),
    addTwoCounter: jest.fn(),
  };

  const enzymeWrapper = mount(<Home {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('Home', () => {

  it('should render self', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('button.ant-btn').length).toBe(2);
    expect(enzymeWrapper.find('.ant-badge-count .current').text()).toBe('2')
  })

  it('should call addCounter', () => {
    const { enzymeWrapper, props } = setup();
    const input = enzymeWrapper.find('button.ant-btn-primary');
    input.props().onClick();
    expect(props.addCounter.mock.calls.length).toBe(1);
  })

  it('should call addTwoCounter', () => {
    const { enzymeWrapper, props } = setup();
    const input = enzymeWrapper.find('button.ant-btn-danger');
    input.props().onClick();
    expect(props.addTwoCounter.mock.calls.length).toBe(1);
  })

})
