import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import {CLEAR_STORED_DATA, FORM_DATA_FAIL, FORM_DATA_SUBMIT, FORM_DATA_SUCCESS} from './types';
import {getClearFormData, getFormDataSuccess, getFormSubmitError, getFormSubmitRequest} from './reducers';

const initialState = {
  interestData: [
      {
         id: 0,
         value: 'HTML',
      },
      {
          id: 1,
          value: 'PHP',
      },
      {
          id: 2,
          value: 'JAVASCRIPT',
      }
    ],
    genderData: [
        {
        id: 0,
        value: 'Male',
        },
        {
        id: 1,
        value: 'Female',
        }],
    formData: {},
    clearData: false
};

function formReducer(state = initialState, action) {
  const {type} = action;

  switch (type) {
    case FORM_DATA_SUBMIT:
      return getFormSubmitRequest(state, action);
    case FORM_DATA_SUCCESS:
      return getFormDataSuccess(state, action);
      case FORM_DATA_FAIL:
      return getFormSubmitError(state, action);
      case CLEAR_STORED_DATA:
          return getClearFormData(state, action);
    default:
      return state;
  }
}

const persistConfig = {
  key: 'form',
  storage: AsyncStorage,
};

export default persistReducer(persistConfig, formReducer);
