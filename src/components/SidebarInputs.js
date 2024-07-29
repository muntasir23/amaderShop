import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { added } from "../redux/product/action";

export default function SidebarInputs() {
  const [productData, setProductData] = useState([
    {
      productName: "",
      category: "",
      imgUrl: "",
      price: "",
      quantity: "",
    },
  ]);

   const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
    setProductData({
      productName: "",
      category: "",
      imgUrl: "",
      price: "",
      quantity: "",
    });
    dispatch(added(productData))
  };

  return (
    <div className="border mt-5 md:w-[100%] w-[95%] p-3 rounded-sm">
      <h1 className="text-center font-bold md:text-[18px] text-[15px] mb-3">
        Add New Product
      </h1>

      <form onSubmit={handleSubmit} >
        <label htmlFor="productName" className="font-semibold">
          Product Name
        </label>{" "}
        <br></br>
        <input
          id="productName"
          value={productData.productName}
          name="productName"
          onChange={handleChange}
          required
          className="w-full border bg-white p-2 rounded mb-3"
        />{" "}
        <br></br>
        <label htmlFor="category" className="font-semibold">
          Category
        </label>{" "}
        <br></br>
        <input
          id="category"
          value={productData.category}
          name="category"
          onChange={handleChange}
          required
          className="w-full border bg-white p-2 rounded mb-3"
        />{" "}
        <br></br>
        <label htmlFor="imgUrl" className="font-semibold">
          Image Url
        </label>{" "}
        <br></br>
        <input
          id="imgUrl"
          value={productData.imgUrl}
          onChange={handleChange}
          name="imgUrl"
          required
          className="w-full border bg-white p-2 rounded mb-3"
        />{" "}
        <br></br>
        <div className="flex items-center justify-center gap-3 mb-3">
          <div>
            <label htmlFor="price" className="font-semibold">
              Price
            </label>{" "}
            <br></br>
            <input
              id="price"
              type="number"
              name="price"
              value={productData.price}
              required
              onChange={handleChange}
              className="w-[100%] border bg-white p-2 rounded"
            />{" "}
            <br></br>
          </div>
          <div>
            <label htmlFor="qunatity" className="font-semibold">
              Qunatity
            </label>{" "}
            <br></br>
            <input
              id="qunatity"
              type="number"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              className="w-[100%] border bg-white p-2 rounded"
            />{" "}
            <br></br>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white font-semibold mt-3 p-2 rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
