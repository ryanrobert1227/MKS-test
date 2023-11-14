import ActionTypes from "./action-types";

const initialState = {
  getData: [],
  eachQuantity: [0, 0, 0, 0, 0, 0, 0, 0],
  sumItems: 0,
  itemsInCart: [],
};

export function getDataReducer(state = initialState, action) {
  if (action.type === ActionTypes.get) {
    return { ...state, getData: action.payload };
  }

  return state;
}

export function itemsQuantityReducer(state = initialState, action) {
  if (action.type === ActionTypes.eachQuantity) {
    return { ...state, eachQuantity: action.payload };
  }

  if (action.type === ActionTypes.sumItems) {
    return { ...state, sumItems: action.payload };
  }

  if (action.type === ActionTypes.itemsInCart) {
    return { ...state, itemsInCart: action.payload };
  }

  return state;
}
