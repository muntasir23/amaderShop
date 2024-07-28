import React from "react";
import { FaBagShopping } from "react-icons/fa6";
import { ImAmazon } from "react-icons/im";

export default function Navbar() {
  return (
    <div className="w-[100%] h-full grid place-items-center p-1">
      <div className="md:w-[900px] w-[95%] flex items-center justify-between text-white">
        <div className="flex items-center justify-center gap-4">
          <p className="bg-zinc-950 p-3 text-[20px] rounded-full border border-green-400">
            <ImAmazon />
          </p>
          <h1 className="leading-4 font-semibold display text-[14px]">Amader <br></br> Shop</h1>
        </div>

        <div className="flex items-center justify-center gap-3">
          <p className="cursor-pointer hover:text-green-400">Home</p>
          <button className="bg-green-400 flex items-center gap-1 px-4 rounded-3xl text-black">
            <FaBagShopping />
            <p className="font-bold">0</p>
          </button>
        </div>
      </div>
    </div>
  );
}
