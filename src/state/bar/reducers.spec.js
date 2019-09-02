import barReducer from './reducers';
import * as types from './types';

describe(types.FETCH_SUCCESS, () => {
  it('Should return bars and buttons with IDs', () => {
    const action = {
      type: types.FETCH_SUCCESS,
      payload: {
        barData: {
          buttons: [37],
          bars: [63],
          limit: 220,
        },
      },
    };

    const expectedState = {
      apiResponse: {
        buttons: [37],
        bars: [63],
        limit: 220,
      },
      displayBars: [{ id: 1, value: 63 }],
      displayButtons: [{ id: 1, value: 37 }],
    };

    expect(
      barReducer(undefined, action),
    ).toEqual(expectedState);
  });
});
