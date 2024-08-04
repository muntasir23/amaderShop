import { ADDED, STOCKDECRMENT, STOCKINCREMENT } from "./actionTypes";
import { initialState } from "./initialState";

const nextId = (products) => {
  const maxId = products.reduce(
    (maxId, product) => Math.max(product.id, maxId),
    -1
  );
  return maxId + 1;
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextId(state),
          productName: action.payload.productName,
          category: action.payload.category,
          imgUrl: action.payload.imgUrl,
          price: action.payload.price,
          quantity: parseInt(action.payload.quantity),
        },
      ];

    case STOCKDECRMENT:
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        } else {
          return item;
        }
      });

    case STOCKINCREMENT:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + action.payload.quantity,
          };
        } else {
          return item;
        }
      });

    default:
      return state;
  }
};

export default productReducer;
