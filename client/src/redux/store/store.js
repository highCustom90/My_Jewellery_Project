import { thunk } from "redux-thunk";

import { combineReducers, legacy_createStore, applyMiddleware } from 'redux';
import { reducer as themeReducer } from "../theme/reducer";

// enter your reducers
const rootReducer = combineReducers({ themeReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));