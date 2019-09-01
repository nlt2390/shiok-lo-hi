import {
  getBarPercentage,
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
