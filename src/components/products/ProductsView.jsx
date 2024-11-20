import React from "react";
import { useFilterAndSort } from "../../context/FilterAndSortContext";

export default function ProductsView() {
  const { showGrid, showList, state } = useFilterAndSort();
  return (
    <div className="flex gap-3">
      <div className="flex items-center gap-1">
        <button className="" onClick={() => showList()}>
          <i
            className={`fa-solid fa-grip-lines py-0.5 px-1 rounded border-2 border-black ${
              !state.gridView && "bg-black text-white"
            }`}
          ></i>
        </button>
        <button className="" onClick={() => showGrid()}>
          <i
            className={`fa-solid fa-grip py-0.5 px-1 rounded border-2 border-black ${
              state.gridView && "bg-black text-white"
            }`}
          ></i>
        </button>
      </div>
      <p>{state.filteredProducts.length} Products Found</p>
    </div>
  );
}
