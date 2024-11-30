import React from "react";
import CartItem from "./CartItem";
import { useCartContext } from "../context/CartContext";

export default function CartContainer() {
  const { state } = useCartContext();

  return (
    <div className=" border-y-2 border-gray-300 py-2">
      {state.cart.map((item, index) => (
        <CartItem key={index} product={item} />
      ))}
    </div>
  );
}
