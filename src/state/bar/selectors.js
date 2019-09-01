import { createSelector } from 'reselect';

import {
  getBarPercentage,
} from './helper';

export const selectorBar = (state) => state.bar;
export const selectorApiResponse = (state) => selectorBar(state).apiResponse;

export const selectorDisplayBars = (state) => selectorBar(state).displayBars;
export const selectorDisplayButtons = (state) => selectorBar(state).displayButtons;
export const selectorBarLimit = (state) => selectorApiResponse(state).limit;

export const selectorPercentageBars = createSelector(
  [selectorDisplayBars, selectorBarLimit],
  (bars, limit) => {
    return bars.map((bar) => {
      const {
        value,
      } = bar;

      const percentage = getBarPercentage({
        value,
        limit,
      });

      return {
        ...bar,
        percentage,
        isOverLimit: value > limit,
      };
    });
  },
);
