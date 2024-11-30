import React from "react";

export default function CartHeader() {
  return (
    <div className="sm:grid grid-cols-6 py-2 font-bold uppercase hidden">
      <p className="col-span-2">Item</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>SubTotal</p>
      <p></p>
    </div>
  );
}
