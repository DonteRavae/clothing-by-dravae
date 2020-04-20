import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
  catalog: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_CATALOG:
      return {
        ...state,
        catalog: action.payload
      }
    default:
      return state;
  }
}

export default shopReducer;