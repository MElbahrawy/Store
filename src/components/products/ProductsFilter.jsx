import React, { useState } from "react";
import ColorBtn from "../utilities/ColorBtn";
import { useFilterAndSort } from "../../context/FilterAndSortContext";
import useUniqueValues from "../../hooks/useUniqueValues";
import useFormatNum from "../../hooks/useFormatNum";

export default function ProductsFilter({ className }) {
  const {
    state: {
      filters: {
        text,
        category,
        company,
        color,
        minPrice,
        maxPrice,
        price,
        shipping,
      },
    },
    getFilter,
    products,
    resetFilters,
  } = useFilterAndSort();

  const categories = useUniqueValues(products, "category");
  const companies = useUniqueValues(products, "company");
  const colors = useUniqueValues(products, "colors");

  return (
    <div className={`px-1 ${className}`}>
      <input
        type="text"
        placeholder="Search"
        name="text"
        value={text}
        onChange={(e) => getFilter(e)}
        className="border-2 border-slate-200 rounded-md bg-slate-200 focus:border-slate-200 focus:ring-0 py-2 px-3"
      />
      <div id="category" className="mt-3">
        <p className="font-bold mb-2">Category</p>
        {categories.map((cat, index) => (
          <button
            key={index}
            name="category"
            data-value={cat}
            className={`block w-fit cursor-pointer mb-1 border-b-2 transition ${
              category === cat
                ? "border-black text-black"
                : "text-slate-400 border-white"
            }`}
            onClick={(e) => getFilter(e)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div id="company" className="mt-3">
        <p className="font-bold mt-3 mb-2">Company</p>
        <select
          name="company"
          id=""
          value={company}
          onChange={(e) => getFilter(e)}
          className="px-2 border-slate-200 rounded-md p-1 bg-slate-200 focus:border-none focus:ring-0"
        >
          {companies.map((com, index) => (
            <option key={index} value={com} name="company">
              {com}
            </option>
          ))}
        </select>
      </div>
      <div id="colors" className="mt-3">
        <p className="font-bold mt-3 mb-2">Colors</p>
        <div className="flex items-center">
          {colors.map((curr, index) => (
            <ColorBtn
              color={curr}
              key={index}
              currentColor={color}
              getFilter={getFilter}
            />
          ))}
        </div>
      </div>
      <div id="price" className="mt-3">
        <p className="font-bold mt-3 mb-2">Price</p>
        <p htmlFor="price">{useFormatNum(price)}</p>
        <input
          type="range"
          name="price"
          className="accent-blue-400"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={(e) => getFilter(e)}
        />
      </div>
      <div className="mt-3">
        <p className="font-bold mt-3 mb-2">Shipping</p>
        <label>
          Free Shipping
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            className="ms-2 rounded"
            checked={shipping}
            onChange={(e) => getFilter(e)}
          />
        </label>
      </div>
      <button
        className="bg-red-500 hover:bg-red-600 w-full text-white px-2 py-1 rounded-md mt-3"
        onClick={() => resetFilters()}
      >
        Clear
      </button>
    </div>
  );
}
