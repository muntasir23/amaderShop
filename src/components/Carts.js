import React from "react";
import { useSelector } from "react-redux";
import Cart from "./CartCard";

export default function Carts() {
  const carts = useSelector((state) => state.carts);

  console.log("carts");
  console.log(carts);

  return (
    <div className="mt-4">
      {carts.length === 0 && <h1 className="font-bold">No Products In The Cart!</h1> }
      {carts.map((cart) => (
        <Cart cart={cart} />
      ))}
    </div>
  );
}
