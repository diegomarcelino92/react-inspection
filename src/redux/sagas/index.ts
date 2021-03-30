import { all, fork } from 'redux-saga/effects';

import inspectionSagas from './inspections';

function* rootSaga() {
  yield all([fork(inspectionSagas)]);
}

export default rootSaga;
