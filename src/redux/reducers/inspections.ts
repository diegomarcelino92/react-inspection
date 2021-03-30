import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { AnyAction } from 'redux';

export interface InpectionsState {
  address: any;
  error: ReducerError;
  loading: boolean;
}

export type InspectionsCreators = {
  sendInspectionRequest(cep: string): AnyAction;
  sendInspectionSuccess(data: any): AnyAction;
  sendInpesctionError(error: ReducerError): AnyAction;
};

export type InpetionTypes = {
  SEND_INSPECTION_REQUEST: string;
  SEND_INSPECTION_SUCCESS: string;
  SEND_INSPECTION_ERROR: string;
};

export const { Types, Creators } = createActions<
  InpetionTypes,
  InspectionsCreators
>({
  sendInspectionRequest: ['cep'],
  sendInspectionSuccess: ['address'],
  sendInspectionError: ['error'],
});

const INITIAL_STATE = Immutable<InpectionsState>({
  address: {},
  error: {},
  loading: false,
});

const sendInspectionRequest = (state = INITIAL_STATE) =>
  state.merge({ loading: true, address: {} });

const sendInespectionSuccess = (
  state = INITIAL_STATE,
  { address }: { address: any }
) => state.merge({ address, loading: false });

const sendInspectionError = (
  state = INITIAL_STATE,
  { error }: { error: ReducerError }
) => state.merge({ loading: false, error });

export default createReducer(INITIAL_STATE, {
  [Types.SEND_INSPECTION_REQUEST]: sendInspectionRequest,
  [Types.SEND_INSPECTION_SUCCESS]: sendInespectionSuccess,
  [Types.SEND_INSPECTION_ERROR]: sendInspectionError,
});
