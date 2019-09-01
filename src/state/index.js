import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import {
  barActions,
  barReducer,
} from './bar';

export const rootReducer = combineReducers({
  bar: barReducer,
});

export function* rootSaga() {
  yield all([
    barActions.watchBarActions(),
  ]);
}
