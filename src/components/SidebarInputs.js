import React from "react";

export default function SidebarInputs() {
  return (
    <div className="border mt-5 md:w-[100%] w-[95%] p-3 rounded-sm">
      <h1 className="text-center font-bold md:text-[18px] text-[15px] mb-3">
        Add New Product
      </h1>

      <from>
        <label htmlFor="productName" className="font-semibold">Product Name</label> <br></br>
        <input id="productName" className="w-full border bg-white p-2 rounded mb-3" />{" "}
        <br></br>
        <label htmlFor="category" className="font-semibold">Category</label> <br></br>
        <input id="category" className="w-full border bg-white p-2 rounded mb-3" /> <br></br>
        <label htmlFor="imgUrl" className="font-semibold">Image Url</label> <br></br>
        <input id="imgUrl" className="w-full border bg-white p-2 rounded mb-3"  /> <br></br>
        <div className="flex items-center justify-center gap-3 mb-3">
          <div>
            <label htmlFor="price" className="font-semibold">Price</label> <br></br>
            <input
              id="price"
              type="number"
              className="w-[100%] border bg-white p-2 rounded"
            />{" "}
            <br></br>
          </div>
          <div>
            <label htmlFor="qunatity" className="font-semibold">Qunatity</label> <br></br>
            <input
              id="qunatity"
              type="number"
              className="w-[100%] border bg-white p-2 rounded"
            />{" "}
            <br></br>
          </div>
        </div>
        <button
          type="button"
          className="w-full bg-black text-white font-semibold mt-3 p-2 rounded"
        >
          Add Product
        </button>
      </from>
    </div>
  );
}
