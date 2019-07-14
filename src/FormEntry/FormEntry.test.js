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

  test('child components exist', () => {
    expect(wrapper.find('.formEntry').exists()).toBe(true);
    expect(wrapper.find('.formLabel').exists()).toBe(true);
    expect(wrapper.find('.formField').exists()).toBe(true);
  });

  test('handleChange gets called on change', () => {
    wrapper.find('.formField').simulate('change', {
      target: {
        value: 'even more purrfect',
      },
    });

    expect(mockedChangeFunction).toHaveBeenCalled();
  });

  test('gets invalid class when form is invalid', () => {
    wrapper.setProps({
      isValid: true,
    });
    expect(wrapper.find('.formEntryIsInvalid').exists()).toBe(false);

    wrapper.setProps({
      isValid: false,
    });
    expect(wrapper.find('.formEntryIsInvalid').exists()).toBe(true);
  });
});
