import React from "react";
import { Link } from "react-router-dom";
import useFormatNum from "../../hooks/useFormatNum";
import Btn from "./Btn";

export default function ProductListCard({ product }) {
  return (
    <div className="w-full mb-10 mx-2 pb-2 bg-white flex flex-col sm:flex-row items-center gap-6 hover:shadow border-gray-200 rounded-lg transition dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded w-1/2 sm:w-1/4 aspect-square"
        src={product.image}
        alt="product image"
      />
      <div className="flex-1 px-5">
        <Link to={`/products/${product?.id}`}>
          <h5 className="text-lg whitespace-nowrap overflow-clip my-2 font-semibold tracking-tight text-gray-900 dark:text-white">
            {product?.name}
          </h5>
        </Link>
        <span className="text-md mb-3 text-blue-500 dark:text-white">
          {useFormatNum(product?.price)}
        </span>
        <p className="text-md mb-3 dark:text-white">
          {product?.description?.substring(0, 150)}...
        </p>
        <Link to={`/products/${product?.id}}`}>
          <Btn>Details</Btn>
        </Link>
        {/* <button>add to cart</button> */}
      </div>
    </div>
  );
}
