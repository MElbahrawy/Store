import React from "react";
import PageHeader from "../utilities/PageHeader";
import { useProductsContext } from "../../context/ProductContext";
import LoadingSpinner from "../utilities/LoadingSpinner";
import ProductCard from "../utilities/ProductCard";
import Error from "../utilities/Error";
export default function Products() {
  const { products, products_loading, products_error } = useProductsContext();

  return (
    <div>
      <PageHeader title="Products" />
      <div className="container mx-auto">
        {products_loading && <LoadingSpinner />}
        {products_error && <Error />}
        {products && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
