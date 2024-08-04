import {
  ADD_TO_CART,
  DECREMENT,
  INCREMENT,
  REMOVE_FROM_CART,
} from "./actionTypes";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (cartId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: cartId,
  };
};

export const increment = (cartId) => {
  return {
    type: INCREMENT,
    payload: cartId,
  };
};

export const decrement = (cartId) => {
  return {
    type: DECREMENT,
    payload: cartId,
  };
};
