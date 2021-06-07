import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import {FORM_DATA_SUBMIT, FORM_DATA_SUCCESS} from './types';
import {getFormDataSuccess, getFormSubmitRequest} from './reducers';

const initialState = {};

function timerReducer(state = initialState, action) {
  const {type} = action;

  switch (type) {
    case FORM_DATA_SUBMIT:
      return getFormSubmitRequest(state, action);
    case FORM_DATA_SUCCESS:
      return getFormDataSuccess(state, action);
    default:
      return state;
  }
}

const persistConfig = {
  key: 'timer',
  storage: AsyncStorage,
};

export default persistReducer(persistConfig, timerReducer);
