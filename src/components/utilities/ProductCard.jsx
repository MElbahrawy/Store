import React from "react";
import img from "../../assets/imgs/apple-watch.png";
import { Link } from "react-router-dom";
import useFormatNum from "../../hooks/useFormatNum";
import { useCartContext } from "../../context/CartContext";
export default function Card({ product }) {
  const { addToCart } = useCartContext();
  return (
    <div className="w-full mx-auto max-w-sm bg-white border shadow hover:shadow-xl border-gray-200 rounded-lg transition dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/products/${product?.id}`}>
        <img
          className="rounded-t-lg w-fit aspect-square"
          src={product.image}
          alt="product image"
        />
      </Link>
      <div className="px-2 mb-5">
        <Link to={`/products/${product?.id}`}>
          <h5 className="text-lg whitespace-nowrap overflow-clip my-2 font-semibold tracking-tight text-gray-900 dark:text-white">
            {product?.name}
          </h5>
        </Link>

        <div className="flex flex-wrap items-center justify-between">
          <span className="text-md mb-3  text-gray-900 dark:text-white">
            {useFormatNum(product?.price)}
          </span>
          <button
            // onClick={() => addToCart(product.id, product.colors[0], 1, product)}
            className="text-white sm:w-full bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-600"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
