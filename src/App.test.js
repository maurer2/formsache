import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import Meter from './Meter/Meter';
import FormEntry from './FormEntry/FormEntry';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('child components exist', () => {
    expect(wrapper.find('.form').exists()).toBe(true);
    expect(wrapper.find('.formRow').exists()).toBe(true);
    expect(wrapper.find(FormEntry).exists()).toBe(true);
    expect(wrapper.find('[name="email"]').exists()).toBe(true);
    expect(wrapper.find('[name="password"]').exists()).toBe(true);
    expect(wrapper.find(Meter).exists()).toBe(true);
    expect(wrapper.find('.formButton').exists()).toBe(true);
  });
});
