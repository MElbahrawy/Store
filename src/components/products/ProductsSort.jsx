import React from "react";

export default function ProductsSort() {
  return (
    <div className="flex items-center">
      <p className="">Sort By:</p>
      <select className="border-none font-bold focus:border-none">
        <option value="priceL">Price (Lowest)</option>
        <option value="priceH">Price (highest)</option>
        <option value="nameL">name (Lowest)</option>
        <option value="nameH">name (highest)</option>
      </select>
    </div>
  );
}
