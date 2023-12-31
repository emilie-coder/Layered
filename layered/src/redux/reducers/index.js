// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from '@reduxjs/toolkit';

import CountReducer from './count-reducer';
import authReducer from './auth-reducer';
import projectReducer from './project-reducer';

const rootReducer = combineReducers({
  count: CountReducer,
  project: projectReducer,
  auth: authReducer,
});

export default rootReducer;
