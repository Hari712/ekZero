import {all, call, put, takeLatest} from 'redux-saga/effects';
import * as actions from './actions';
import * as actionTypes from './types';
import {submitForm} from '../services/api';

function* getSubmitFormData(data) {
  try {
    const responseData = yield call(submitForm, data.payload);
    console.log("response",responseData)
    yield put(actions.getFormDataSuccess(responseData));
  } catch (e) {
    yield put(actions.FormSubmitFail('Something is Wrong! can not submit the Form.'));
  }
}
export function* formSaga() {
  return yield all([
    yield takeLatest(actionTypes.FORM_DATA_SUBMIT, getSubmitFormData),
  ]);
}
