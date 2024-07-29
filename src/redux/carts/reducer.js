import { ADD_TO_CART } from "./actionTypes";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingProduct = state.find(
        (cart) => cart.id === action.payload.id
      );
      if (existingProduct) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...existingProduct, qyt: existingProduct.qyt + 1 }
            : item
        );
      } else {
        return [
          ...state,
          {
            ...action.payload,
            qyt: 1,
            quantity: action.payload.quantity - 1,
          },
        ];
      }

      

    default:
      return state;
  }
};
export default cartReducer
