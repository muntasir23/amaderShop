import { ADDED } from "./actionTypes";
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
          quantity: action.payload.quantity,
        },
      ];

    default:
      return state
  }
};

export default productReducer