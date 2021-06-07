import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './saga';
import {persistStore} from 'redux-persist';
import form from '../redux';

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const appReducer = combineReducers({
  form,
});

const rootReducer = (state, action) => appReducer(state, action);

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware),
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
