import * as types from './types';

const initState = {
  apiResponse: {
    buttons: [],
    bars: [],
    limit: 0,
  },
  displayBars: [],
  displayButtons: [],
};

export default function post(state = initState, action) {
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

    default:
      return state;
  }
}
