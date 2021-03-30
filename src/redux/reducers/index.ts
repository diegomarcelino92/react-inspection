import { combineReducers } from 'redux';
import { ImmutableObject } from 'seamless-immutable';

import app, { AppState } from './app';
import inspections, { InpectionsState } from './inspections';

export interface RootState {
  app: ImmutableObject<AppState>;
  inspections: ImmutableObject<InpectionsState>;
}

const rootReducer = combineReducers({
  app,
  inspections,
});

export default rootReducer;
