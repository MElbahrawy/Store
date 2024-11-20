import React, { useState } from "react";
import ColorBtn from "../utilities/ColorBtn";

export default function ProductsFilter({ className }) {
  const [mainCategory, setMainCategory] = useState("all");
  const cat = [
    "all",
    "Electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  const colors = ["#ff0000", "#00ff00", "#0000ff"];
  const [color, setColor] = useState(colors[0]);
  return (
    <div className={`px-1 ${className}`}>
      <input
        type="text"
        placeholder="Search"
        className="border-2 border-slate-200 rounded-md p-1 bg-slate-200 focus:border-none focus:ring-0"
      />
      <div id="category" className="mt-3">
        <p className="font-bold mb-2">Category</p>
        {cat.map((category, index) => (
          <p
            key={index}
            className={`" text-slate-400 w-fit cursor-pointer mb-1 border-b-2 border-white transition ${
              mainCategory === category && " border-black text-black"
            }`}
            onClick={() => setMainCategory(category)}
          >
            {category}
          </p>
        ))}
      </div>
      <div id="company" className="mt-3">
        <p className="font-bold mt-3 mb-2">Company</p>
        <select
          name="company"
          id=""
          className="px-2 border-slate-200 rounded-md p-1 bg-slate-200 focus:border-none focus:ring-0"
        >
          <option value="all">All</option>
        </select>
      </div>
      <div id="colors" className="mt-3">
        <p className="font-bold mt-3 mb-2">Colors</p>
        <div className="flex items-center">
          <span className="mr-2">All</span>
          {colors.map((curr, index) => (
            <ColorBtn
              color={curr}
              key={index}
              setMainColor={setColor}
              mainColor={color}
            />
          ))}
        </div>
      </div>
      <div id="price" className="mt-3">
        <p className="font-bold mt-3 mb-2">Price</p>
        <p htmlFor="price">200</p>
        <input
          type="range"
          name="price"
          className="accent-blue-400"
          min={0}
          max={1000}
        />
      </div>
      <div id="shipping" className="mt-3">
        <p className="font-bold mt-3 mb-2">Shipping</p>
        <label htmlFor="shipping">Free Shipping</label>
        <input type="checkbox" name="shipping" className="ms-2 rounded" />
      </div>
      <button className="bg-red-500 hover:bg-red-600 w-full text-white px-2 py-1 rounded-md mt-3">
        Clear
      </button>
    </div>
  );
}
