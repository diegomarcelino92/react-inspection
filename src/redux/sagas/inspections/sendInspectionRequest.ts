import { put, takeLatest, call } from 'redux-saga/effects';

import { Creators as AppCreators } from '@reducers/app';
import { Creators, Types } from '@reducers/inspections';

import { inspectionAPI } from '@API/inspections';

type AddressRequestParams = { cep: string; type: string };

function* sendInspectioRequest({ cep }: AddressRequestParams) {
  try {
    const data: any = yield call(inspectionAPI.inspection, cep);

    yield put(Creators.sendInspectionRequest(data));
    yield put(
      AppCreators.showSnackbar({
        open: true,
        severity: 'success',
        message: 'Endereço encontrado!',
      })
    );
  } catch (error) {
    yield put(Creators.sendInspectionSuccess(error));
    yield put(
      AppCreators.showSnackbar({
        open: true,
        severity: 'error',
        message: 'Não encontramos nenhum endereço',
      })
    );
  }
}

export default function* watch() {
  yield takeLatest(Types.SEND_INSPECTION_REQUEST, sendInspectioRequest);
}
