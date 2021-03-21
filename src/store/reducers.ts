import { combineReducers } from '@reduxjs/toolkit';

import modalReducer from './modal/modal.reducers';

const rootReducer = combineReducers({ modal: modalReducer });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
