import React, { useState } from "react";
import Btn from "../utilities/Btn";
import ColorBtn from "../utilities/ColorBtn";
import { useCartContext } from "../../context/CartContext";

export default function ProductAction({ product = {} }) {
  const { colors, stock, id, price } = product;
  const { addToCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);
  const [mainColor, setMainColor] = useState(colors[0]);
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
        <div id="colors" className="flex">
          {colors.map((color) => (
            <ColorBtn
              color={color}
              mainColor={mainColor}
              setMainColor={setMainColor}
              key={color}
            />
          ))}
        </div>
      </p>
      <div className="flex gap-5 items-center mb-6">
        <button onClick={() => decrease()}>-</button>
        <span className="font-bold text-2xl">{quantity}</span>
        <button onClick={() => increase()}>+</button>
      </div>
      <Btn>
        <button onClick={() => addToCart(id, mainColor, quantity, product)}>
          Add To Cart
        </button>
      </Btn>
    </div>
  );
}
