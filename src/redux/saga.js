import {all, call, put, takeLatest} from 'redux-saga/effects';
import * as actions from './actions';
import * as actionTypes from './types';
import {} from '../services/api';

function* getSubmitFormData() {
  try {
  } catch (e) {}
}
export function* formSaga() {
  return yield all([
    yield takeLatest(actionTypes.FORM_DATA_SUBMIT, getSubmitFormData),
  ]);
}
