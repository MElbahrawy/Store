import React, { useState } from "react";
import Btn from "../utilities/Btn";

export default function ProductAction({ colors = [], stock = 0 }) {
  const [quantity, setQuantity] = useState(1);
  const [Color, setColor] = useState(colors[0]);

  const increase = () => {
    setQuantity((prev) => (prev < stock ? prev + 1 : prev));
  };
  const decrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };
  return (
    <div>
      <p className="my-4 flex gap-5 items-center">
        <div className="font-bold">Colors: </div>
        <div>
          {colors.map((color) => (
            <span
              key={color}
              className="inline-block my-auto w-5 h-5 rounded-full border border-gray-500 mr-2"
              style={{ backgroundColor: color }}
              onClick={() => setColor(color)}
            ></span>
          ))}
        </div>
      </p>
      <div className="flex gap-5 items-center mb-6">
        <button onClick={() => decrease()}>-</button>
        <span className="font-bold text-2xl">{quantity}</span>
        <button onClick={() => increase()}>+</button>
      </div>
      <Btn>Add To Cart</Btn>
    </div>
  );
}
