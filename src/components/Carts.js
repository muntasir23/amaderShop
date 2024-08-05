import React from "react";
import { useSelector } from "react-redux";
import Cart from "./CartCard";
import PricinigSection from "./PricinigSection";

export default function Carts() {
  const carts = useSelector((state) => state.carts);
  return (
    <div className="mt-4 p-2 w-[100%] flex items-start justify-center gap-6 md:flex-row flex-col-reverse">
      <div className="w-[100%]">
        {carts.length === 0 && (
          <h1 className="font-bold">No Products In The Cart!</h1>
        )}
        {carts.map((cart) => (
          <Cart cart={cart} />
        ))}
      </div>
      <div className="w-[100%]">
        <PricinigSection />
      </div>
    </div>
  );
}
