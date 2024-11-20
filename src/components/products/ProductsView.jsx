import React from "react";

export default function ProductsView() {
  return (
    <div className="flex gap-3">
      <div className="flex items-center gap-1">
        <button className="">
          <i className="fa-solid fa-grip-lines py-0.5 px-1 rounded border-2 border-black"></i>
        </button>
        <button className="">
          <i className="fa-solid fa-grip py-0.5 px-1 rounded border-2 border-black"></i>
        </button>
      </div>
      <p>15 Products Found</p>
    </div>
  );
}
