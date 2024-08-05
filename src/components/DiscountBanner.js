import React from "react";

export default function DiscountBanner({ handleDiscountClose }) {
  return (
    <div className="w-[100%] bg-lime-200 grid place-items-center">
      <div className="md:w-[900px] w-[100%] flex justify-between items-center">
        <h1 className="font-semibold">
          Enjoy flash <span className="text-green-600">20%</span> of in this eid
        </h1>
        <p onClick={handleDiscountClose} className="cursor-pointer rotate-45 text-[35px] text-red-600">+</p>
      </div>
    </div>
  );
}
