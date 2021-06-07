import {all} from 'redux-saga/effects';
import {formSaga} from '../redux/saga';
export function* rootSaga() {
  return yield all([formSaga()]);
}
