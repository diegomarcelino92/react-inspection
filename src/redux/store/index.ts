import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import immutable from 'seamless-immutable';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';
import rootSagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  immutable(rootReducer),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSagas);

export default store;
