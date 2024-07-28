import React from "react";
import productPic from "../assets/lenovo.jpg";

export default function Product() {
  return (
    <div className="border p-2 md:w-[300px] w-[180px] rounded-sm shadow md:shadow-none">
      <div className="w-full md:max-h-[250px] max-h-[110px] overflow-hidden flex items-start justify-center">
        <img src={productPic} alt="" className="w-[100%]" />
      </div>
      <hr className="my-3"></hr>
      <div>
        <h1 className="md:text-[16px] text-[14px] font-bold mb-2">Lenovo</h1>
        <p className="mb-2 md:text-[14px] text-[12px]">Laptop</p>
        <div className="flex w-full items-center justify-between mb-2">
          <p className="md:text-[16px] text-[14px] font-bold">BDT-70000</p>
          <p className="md:text-[16px] text-[14px] font-bold">QYT 70000</p>
        </div>
        <hr className="my-3"></hr>
        <button className="w-full bg-black text-white md:p-2 p-1 rounded mb-1">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
