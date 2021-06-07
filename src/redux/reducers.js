export const getFormDataSuccess = (state, {formData}) => {
  return {
    ...state,
    formData,
  };
};

export const getFormSubmitRequest = (state, {isDefaultLabel}) => ({
  ...state,
  clearData: false
});

export const getFormSubmitError = (state, {error}) => ({
  ...state,
  error
})

export const getClearFormData = (state, action) => ({
  ...state,
  formData: {},
  clearData: true
})
