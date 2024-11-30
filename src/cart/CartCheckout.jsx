import React from "react";
import useFormatNum from "../hooks/useFormatNum";
import { useCartContext } from "../context/CartContext";

export default function CartCheckout() {
  const { state } = useCartContext();
  const { total, shipping } = state;
  return (
    <div className="border-2 border-gray-300 rounded p-4">
      <div className="flex justify-between">
        <p className="font-bold">SubTotals:</p>
        <p>{useFormatNum(total)}</p>
      </div>
      <div className="flex justify-between mt-4 mb-6">
        <p className="font-bold">Shipping Fee:</p>
        <p>{useFormatNum(shipping)}</p>
      </div>
      <hr className="" />
      <div className="flex justify-between my-5">
        <p className="font-bold">Total:</p>
        <p>{useFormatNum(total + shipping)}</p>
      </div>
      <button className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        Checkout
      </button>
    </div>
  );
}
