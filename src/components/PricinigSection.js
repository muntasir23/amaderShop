import React from "react";
import { useSelector } from "react-redux";

export default function PricinigSection() {
  const carts = useSelector((state) => state.carts);
  const total = carts.reduce((prev, curr) => prev + curr.price * curr.qyt, 0);
  const vat = total * (5 / 100);
  const discount = total * (20 / 100);
  const grandTotal = vat + total - discount;

  return (
    <div className="border md:w-[300px] w-[100%] p-2 md:sticky top-0">
      <h1 className="font-bold text-center mb-5">Bill Details</h1>
      <div className="w-full flex items-center justify-between mb-2">
        <h1>Sub Total</h1>
        <p>{total}</p>
      </div>
      <div className="w-full flex items-center justify-between mb-2">
        <h1>Discount</h1>
        <p>{discount}</p>
      </div>
      <div className="w-full flex items-center justify-between mb-2">
        <h1>Vat</h1>
        <p>{vat}</p>
      </div>
      <div className="w-full flex items-center justify-between font-bold">
        <h1>Total</h1>
        <p>{grandTotal}</p>
      </div>
      <hr className="my-5"></hr>
      <button className="font-bold w-full p-1 bg-black text-white rounded">
        PLACE ORDER
      </button>
    </div>
  );
}
