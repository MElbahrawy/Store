import React from "react";
import { useFilterAndSort } from "../../context/FilterAndSortContext";

export default function ProductsSort() {
  const { sort, getSort } = useFilterAndSort();
  return (
    <div className="flex items-center">
      <p className="">Sort By:</p>
      <select
        className="border-none font-bold focus:border-none"
        value={sort}
        onChange={getSort}
      >
        <option value="price-lowest">Price (Lowest)</option>
        <option value="price-highest">Price (highest)</option>
        <option value="name-a">name (A-Z)</option>
        <option value="name-z">name (Z-A)</option>
      </select>
    </div>
  );
}
