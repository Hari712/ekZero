export const getFormDataSuccess = (state, {formData}) => {
  return {
    ...state,
    formData,
  };
};

export const getFormSubmitRequest = (state, {isDefaultLabel}) => ({
  ...state,
});
