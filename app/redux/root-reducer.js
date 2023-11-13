import { combineReducers } from "redux";

import getDataReducer from "./Data/reducer";

const rootReducer = combineReducers({ getDataReducer });

export default rootReducer;
