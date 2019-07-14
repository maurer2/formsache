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
});
