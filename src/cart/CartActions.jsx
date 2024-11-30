import React from "react";
import { Link } from "react-router-dom";
import Btn from "../components/utilities/Btn";
import { useCartContext } from "../context/CartContext";

export default function CartActions() {
  const { clearCart } = useCartContext();
  return (
    <div className="flex justify-between my-2">
      <Btn>
        <Link to={"/products"}>Continue Shopping</Link>
      </Btn>
      <Btn>
        <button onClick={() => clearCart()}>Clear Cart</button>
      </Btn>
    </div>
  );
}
