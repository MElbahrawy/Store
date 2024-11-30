import React from "react";
import useFormatNum from "../hooks/useFormatNum";
import ColorBtn from "../components/utilities/ColorBtn";
import { useCartContext } from "../context/CartContext";
export default function CartItem({ product }) {
  const { id, color, amount, img, price } = product;

  const { toggleAmount, removeItem } = useCartContext();
  return (
    <div className="grid grid-cols-4 sm:grid-cols-6  my-6 items-center justify-center border-b-2 sm:border-0 border-gray-300 pb-2">
      <div className="flex gap-2 col-span-4 sm:col-span-2 mb-2">
        <img src={img} alt="" className="object-cover w-20 h-20 rounded" />
        <div>
          <p className="font-bold mb-2">Product Name</p>
          <div className="flex items-center">
            <span className="mr-2 font-bold">Color:</span>
            <ColorBtn color={color} />
          </div>
        </div>
      </div>
      <p className="text-blue-500">{useFormatNum(price)}</p>
      <div className="flex">
        <button
          onClick={() => toggleAmount(id, "dec")}
          className="rounded-l-md px-2"
        >
          -
        </button>
        <p className=" border-gray-300 px-2">{amount}</p>
        <button
          onClick={() => toggleAmount(id, "inc")}
          className="rounded-r-md px-2"
        >
          +
        </button>
      </div>
      <p>{useFormatNum(price * amount)}</p>
      <div className=" text-center">
        <button
          onClick={() => removeItem(id)}
          className="bg-red-500 text-white rounded px-2 "
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
