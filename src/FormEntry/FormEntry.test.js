import React from 'react';
import { shallow } from 'enzyme';
import FormEntry from './FormEntry';

describe('FormEntry', () => {
  let wrapper;

  const mockedChangeFunction = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<FormEntry
      label="Cat"
      name="cat"
      value="purrfect"
      type="text"
      placeholder="Sir Meows a lot"
      handleChange={mockedChangeFunction}
      isValid
    />);
  });

  test('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
