import { combineReducers } from "redux";

import { getDataReducer, itemsQuantityReducer } from "./Data/reducer";

const rootReducer = combineReducers({ getDataReducer, itemsQuantityReducer });

export default rootReducer;
