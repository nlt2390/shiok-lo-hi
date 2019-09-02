import * as types from './types';

import {
  getAppendedValue,
} from './helper';

const initState = {
  apiResponse: {
    buttons: [],
    bars: [],
    limit: 0,
  },
  displayBars: [],
  displayButtons: [],
};

export default function barReducer(state = initState, action) {
  switch (action.type) {
    case types.FETCH_SUCCESS:
      const {
        barData,
      } = action.payload;
      const {
        bars,
        buttons,
      } = barData;

      return {
        ...state,
        apiResponse: barData,
        displayBars: bars.map((bar, i) => {
          return {
            id: i + 1,
            value: bar,
          };
        }),
        displayButtons: buttons.map((button, i) => {
          return {
            id: i + 1,
            value: button,
          };
        }),
      };

    case types.SET:
      const {
        barId,
        appendValue,
      } = action.payload;

      const newDisplayBars = state.displayBars.map((bar) => {
        if (bar.id === barId) {
          const value = getAppendedValue({ value: bar.value, appendValue });

          return {
            ...bar,
            value,
          };
        }
        return bar;
      });

      return {
        ...state,
        displayBars: newDisplayBars,
      };

    default:
      return state;
  }
}
