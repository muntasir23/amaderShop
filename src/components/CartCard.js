import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { decrement, increment, removeFromCart } from "../redux/carts/action";
import { stockDecrement, stockIncrement } from "../redux/product/action";

export default function Cart({ cart }) {
  const { id, qyt } = cart;

  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
    dispatch(stockIncrement(id, qyt));
    console.log(id);
  };

  const handleIncrement = () => {
    dispatch(increment(id))
    dispatch(stockDecrement(id));
  };
  const handleDecrement = () => {
    dispatch(decrement(id))
    dispatch(stockIncrement(id, qyt));
  };

  return (
    <div className="border p-2 flex items-center justify-between md:w-[700px] w-[100%] shadow mb-3">
      {/* <h1>{cart.productName}</h1>
      <h1>{cart.price}</h1>
      <h1>{cart.qyt}</h1>
      <h1>{cart.quantity}</h1> */}
      <div className="w-[100px] h-[70px] overflow-hidden">
        <img src={cart.imgUrl} alt="" className="w-[100%]" />
      </div>
      <div className="flex items-center justify-center gap-5">
        <div className="flex items-center justify-center gap-2">
          <button onClick={handleIncrement} className="font-bold md:text-[18px] text-[14px]">+</button>
          <p className="md:text-[18px] text-[14px]">{cart.qyt}</p>
          <button onClick={handleDecrement} className="font-bold md:text-[18px] text-[14px]">-</button>
        </div>
        <h3 className="font-bold">BDT {cart.price * cart.qyt}</h3>
      </div>
      <button
        onClick={handleRemoveFromCart}
        className="text-red-500 md:text-[18px] text-[14px] cursor-pointer"
      >
        <MdDelete />
      </button>
    </div>
  );
}
