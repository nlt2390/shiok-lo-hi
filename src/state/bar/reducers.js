import * as types from './types';

const initState = {
  buttons: [],
  bars: [],
  limit: 0,
};

export default function post(state = initState, action) {
  switch (action.type) {
    case types.FETCH_SUCCESS:
      const {
        barData,
      } = action.payload;

      return {
        ...state,
        ...barData,
      };

    default:
      return state;
  }
}
