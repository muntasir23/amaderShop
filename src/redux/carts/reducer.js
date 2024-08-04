import {
  ADD_TO_CART,
  DECREMENT,
  INCREMENT,
  REMOVE_FROM_CART,
} from "./actionTypes";

const initialState = [];

const nextId = (products) => {
  const maxId = products.reduce(
    (maxId, product) => Math.max(product.id, maxId),
    -1
  );
  return maxId + 1;
};

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
            id: nextId(state),
            qyt: 1,
          },
        ];
      }

    case REMOVE_FROM_CART:
      return state.filter((cart) => cart.id !== action.payload);

    case INCREMENT:
      return state.map((cart) => {
        if (cart.id === action.payload) {
          return {
            ...cart,
            qyt: cart.qyt + 1,
          };
        } else {
          return cart;
        }
      });

    case DECREMENT:
      return state.map((cart) => {
        if (cart.id === action.payload) {
          return {
            ...cart,
            qyt: cart.qyt - 1,
          };
        } else {
          return cart;
        }
      });

    default:
      return state;
  }
};
export default cartReducer;
