import {
  put,
  call,
  all,
  takeLatest,
} from 'redux-saga/effects';
import * as types from './types';
import API from '../../utils/api';

export const actionFetchBarData = () => ({
  type: types.FETCH,
});

export const actionFetchBarDataSuccess = (barData) => ({
  type: types.FETCH_SUCCESS,
  payload: {
    barData,
  },
});

export const actionSetBarData = ({ barId, appendValue = 0 }) => ({
  type: types.SET,
  payload: {
    barId,
    appendValue,
  },
});

export function* fetchBarData() {
  const { response, error } = yield call(() => API.get('bars'));
  if (response) {
    yield put(actionFetchBarDataSuccess(response));
  } else {
    console.log('FETCH ERROR:', error);
  }
}

export function* watchBarActions() {
  yield all([
    takeLatest(types.FETCH, fetchBarData),
  ]);
}
