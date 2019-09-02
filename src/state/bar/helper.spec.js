import {
  getBarPercentage,
  getAppendedValue,
} from './helper';

describe('getBarPercentage', () => {
  it('Should return bar percentage if 0 < value < limit', () => {
    expect(
      getBarPercentage({ value: 10, limit: 100 }),
    ).toBe(10);
  });
  it('Should return 100 if value > limit', () => {
    expect(
      getBarPercentage({ value: 120, limit: 100 }),
    ).toBe(100);
  });
  it('Should return 0 if value < 0', () => {
    expect(
      getBarPercentage({ value: -10, limit: 100 }),
    ).toBe(0);
  });
});

describe('getAppendedValue', () => {
  it('Should return a positive value', () => {
    expect(
      getAppendedValue({ value: 10, appendValue: 10 }),
    ).toBe(20);

    expect(
      getAppendedValue({ value: 10, appendValue: -20 }),
    ).toBe(0);
  });
});
