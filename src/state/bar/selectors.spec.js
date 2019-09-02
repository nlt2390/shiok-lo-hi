import {
  selectorPercentageBars,
  selectorBarOptions,
} from './selectors';

describe('selectorPercentageBars', () => {
  it('Should return an array of bar data with percentage < 100 if under limit', () => {
    const state = {
      bar: {
        displayBars: [{ id: 1, value: 10 }],
        apiResponse: {
          limit: 20,
        },
      },
    };

    const expectedBars = [{
      id: 1,
      value: 10,
      percentage: 50,
      isOverLimit: false,
    }];

    expect(
      selectorPercentageBars(state),
    ).toEqual(expectedBars);
  });

  it('Should return an array of bar data with percentage === 100 if over limit', () => {
    const state = {
      bar: {
        displayBars: [{ id: 1, value: 30 }],
        apiResponse: {
          limit: 20,
        },
      },
    };

    const expectedBars = [{
      id: 1,
      value: 30,
      percentage: 100,
      isOverLimit: true,
    }];

    expect(
      selectorPercentageBars(state),
    ).toEqual(expectedBars);
  });
});

describe('selectorBarOptions', () => {
  it('Should bar select options', () => {
    const state = {
      bar: {
        displayBars: [{ id: 1, value: 30 }],
      },
    };

    const expectedBarOptions = [{
      id: 1,
      value: 1,
      label: '#progress1',
    }];

    expect(
      selectorBarOptions(state),
    ).toEqual(expectedBarOptions);
  });
});
