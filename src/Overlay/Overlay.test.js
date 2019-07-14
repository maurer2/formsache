import React from 'react';
import { shallow } from 'enzyme';
import Overlay from './Overlay';

describe('Overlay', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Overlay
      message="Mewo Meow"
    />);
  });

  test('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('child component exist', () => {
    expect(wrapper.find('.overlay').exists()).toBe(true);
  });
});
