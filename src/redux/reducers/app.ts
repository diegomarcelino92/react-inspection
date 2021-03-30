import { createReducer, createActions } from 'reduxsauce';
import immutable from 'seamless-immutable';

import { AnyAction } from 'redux';

export interface AppState {
  snackbar: any;
}

export type AppCreators = {
  showSnackbar(snackbar: any): AnyAction;
};

export type AppTypes = {
  SHOW_SNACKBAR: string;
};

export const { Types, Creators } = createActions<AppTypes, AppCreators>({
  showSnackbar: ['props'],
});

const INITIAL_STATE = immutable<AppState>({
  snackbar: {},
});

const showSnackbar = (state = INITIAL_STATE, { props }: { props: any }) =>
  state.merge({ snackbar: props });

export default createReducer(INITIAL_STATE, {
  [Types.SHOW_SNACKBAR]: showSnackbar,
});
