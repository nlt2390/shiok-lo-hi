import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { BarGroupContainer } from './BarGroupContainer';

const renderBarGroupContainer = (props = {}) => {
  return (
    <BarGroupContainer
      { ...props }
    />
  );
};

const mountBarGroupContainer = (props = {}) => mount(renderBarGroupContainer(props));

describe('<BarGroupContainer>', () => {
  it('Should fetch bar data after mounting', () => {
    const fetchBarData = sinon.spy();

    mountBarGroupContainer({
      fetchBarData,
    });

    expect(fetchBarData.calledOnce).toBe(true);
  });
});
