import ActionTypes from "./action-types";

const initialState = {
  getData: [],
};

export default function getDataReducer(state = initialState, action) {
  if (action.type === ActionTypes.get) {
    return { ...state, getData: action.payload };
  }

  return state;
}
