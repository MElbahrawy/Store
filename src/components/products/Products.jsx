import PageHeader from "../utilities/PageHeader";
import { useProductsContext } from "../../context/ProductContext";
import LoadingSpinner from "../utilities/LoadingSpinner";
import Error from "../utilities/Error";
import ProductsFilter from "./ProductsFilter";
import ProductsView from "./ProductsView";
import ProductsSort from "./ProductsSort";
import ProductsContainer from "./ProductsContainer";
import ProductsDrawer from "./ProductsDrawer";
export default function Products() {
  const { products_loading, products_error } = useProductsContext();

  return (
    <div>
      <PageHeader title="Products" />
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-6 my-20">
        {products_loading && <LoadingSpinner />}
        {products_error && <Error />}
        {/*  */}
        <ProductsDrawer />
        <ProductsFilter className="hidden sm:block" />
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-5">
            <ProductsView />
            <hr className="flex-1 border-black border-2" />
            <ProductsSort />
          </div>
          <ProductsContainer />
        </div>
      </div>
    </div>
  );
}
