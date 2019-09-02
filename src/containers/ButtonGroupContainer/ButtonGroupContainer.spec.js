import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { ButtonGroupContainer } from './ButtonGroupContainer';

const buttonsProp = [
  {
    id: 1,
    value: 1,
  },
];

const barOtionsProp = [{
  id: 1,
  label: '#progress1',
  value: 1,
}];

const renderButtonGroupContainer = (props = {}) => {
  return (
    <ButtonGroupContainer
      buttons={ buttonsProp }
      barOptions={ barOtionsProp }
      { ...props }
    />
  );
};

const shallowButtonGroupContainer = (props = {}) => mount(renderButtonGroupContainer(props));

describe('<ButtonGroupContainer>', () => {
  it('Should call setBarData action when clicking on buttons', () => {
    const setBarData = sinon.spy();

    const wrapper = shallowButtonGroupContainer({
      setBarData,
    });

    const button = wrapper.find('button');
    button.simulate('click');

    expect(setBarData.calledOnce).toBe(true);
  });
});
