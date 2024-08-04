import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/carts/action";
import { stockDecrement } from "../redux/product/action";

export default function Product({ product }) {
  const { id, productName, imgUrl, category, price, quantity } = product;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    dispatch(stockDecrement(id));
  };

  return (
    <div className="border p-2 md:w-[260px] w-[180px] rounded-sm shadow md:shadow-none">
      <div className="w-full h-[250px] max-h-[110px] overflow-hidden flex items-start justify-center">
        <img src={imgUrl} alt="" className="w-[100%]" />
      </div>
      <hr className="my-3"></hr>
      <div>
        <h1 className="md:text-[16px] text-[14px] font-bold mb-2">
          {productName}
        </h1>
        <p className="mb-2 md:text-[14px] text-[12px]">{category} </p>
        <div className="flex w-full items-center justify-between mb-2">
          <p className="md:text-[16px] text-[14px] font-bold">BDT-{price}</p>
          <p className="md:text-[16px] text-[14px] font-bold">
            QYT: {quantity}
          </p>
        </div>
        <hr className="my-3"></hr>
        <button
          disabled={quantity === 0}
          onClick={handleAddToCart}
          className="w-full bg-black text-white md:p-2 p-1 rounded mb-1"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
