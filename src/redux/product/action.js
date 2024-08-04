import { ADDED, STOCKDECRMENT, STOCKINCREMENT } from "./actionTypes";

export const added = (products) => {
  return {
    type: ADDED,
    payload: products,
  };
};

export const stockDecrement = (id) => {
  return {
    type: STOCKDECRMENT,
    payload: id,
  };
};
export const stockIncrement = (id, quantity) => {
  return {
    type: STOCKINCREMENT,
    payload: {
      id,
      quantity,
    },
  };
};
