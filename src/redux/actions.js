import {FORM_DATA_SUBMIT, FORM_DATA_SUCCESS} from './types';

export const getFormSuccess = formData => ({
  type: FORM_DATA_SUCCESS,
  formData,
});

export const getFormSubmitRequest = isDefaultLabel => ({
  type: FORM_DATA_SUBMIT,
});
