import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";

export default function ProductList() {
  const products = useSelector((state) => state.products);
  console.log("Product list");
  console.log(products);


  return (
    <div className="w-full mt-5 p-1 flex flex-wrap md:justify-start justify-center items-start md:gap-5 gap-2">
      {products.length === 0 && <h1 className="font-bold">No Product Available!</h1>}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}
