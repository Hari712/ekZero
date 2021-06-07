import {CLEAR_STORED_DATA, FORM_DATA_FAIL, FORM_DATA_SUBMIT, FORM_DATA_SUCCESS} from './types';

export const getFormDataSuccess = formData => ({
  type: FORM_DATA_SUCCESS,
  formData,
});

export const FormSubmitRequest = payload => ({
  type: FORM_DATA_SUBMIT,
  payload
});

export const FormSubmitFail = error => ({
  type: FORM_DATA_FAIL,
  error
})

export const getClearStoredData = () => ({
  type: CLEAR_STORED_DATA
})
