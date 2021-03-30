import { all, fork } from 'redux-saga/effects';

import sendInspectionRequest from './sendInspectionRequest';

function* appSagas() {
  yield all([fork(sendInspectionRequest)]);
}

export default appSagas;
