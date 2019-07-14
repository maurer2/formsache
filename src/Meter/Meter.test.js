import React from 'react';
import { shallow } from 'enzyme';
import Meter from './Meter';

describe('Meter', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Meter
      min={0}
      max={3}
      value={2}
    />);
  });

  test('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('child components exist', () => {
    expect(wrapper.find('.meter').exists()).toBe(true);
    expect(wrapper.find('.description').exists()).toBe(true);
    expect(wrapper.find('.key').exists()).toBe(true);
    expect(wrapper.find('.value').exists()).toBe(true);
  });

  test('description not shown when invalid prop is set', () => {
    wrapper.setProps({
      value: 1,
    });
    expect(wrapper.find('.description').exists()).toBe(true);

    wrapper.setProps({
      value: 55,
    });
    expect(wrapper.find('.description').exists()).toBe(false);
  });

  test('value contains correct translation', () => {
    wrapper.setProps({
      value: 0,
    });
    expect(wrapper.find('.value').text()).toBe('invalid');

    wrapper.setProps({
      value: 1,
    });
    expect(wrapper.find('.value').text()).toBe('weak');

    wrapper.setProps({
      value: 2,
    });
    expect(wrapper.find('.value').text()).toBe('average');

    wrapper.setProps({
      value: 3,
    });
    expect(wrapper.find('.value').text()).toBe('strong');

    wrapper.setProps({
      value: 4,
    });
    expect(wrapper.find('.value').text()).toBe('strong');
  });
});
