import { useFilterAndSort } from "../../context/FilterAndSortContext";
import ProductsGridView from "./ProductsGridView";
import ProductsListView from "./ProductsListView";

export default function ProductsContainer() {
  const { state } = useFilterAndSort();
  return (
    <>
      {state.gridView ? (
        <ProductsGridView products={state.filteredProducts} />
      ) : (
        <ProductsListView products={state.filteredProducts} />
      )}
    </>
  );
}
