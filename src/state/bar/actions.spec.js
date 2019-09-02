import sinon from 'sinon';
import { runSaga } from 'redux-saga';

import {
  fetchBarData,

} from './actions';
import API from '../../utils/api';
import * as types from './types';

describe('fetchBarData', () => {
  it(`Should fetch GET "/bars" and dispatch "${types.FETCH_SUCCESS}"`, async () => {
    const dispatched = [];
    const url = 'bars';
    const expectedSuccessAction = {
      type: types.FETCH_SUCCESS,
      payload: {
        barData: {
          buttons: [37],
          bars: [63],
          limit: 220,
        },
      },
    };

    sinon.stub(API, 'get').callsFake(() => ({
      response: {
        buttons: [37],
        bars: [63],
        limit: 220,
      },
    }));


    await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, fetchBarData).toPromise();

    expect(API.get.calledWith(url)).toBe(true);
    expect(dispatched[0]).toEqual(expectedSuccessAction);
  });
});
