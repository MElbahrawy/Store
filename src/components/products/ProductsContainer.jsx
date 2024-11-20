import React from "react";
import ProductCard from "../utilities/ProductCard";
import { useProductsContext } from "../../context/ProductContext";

export default function ProductsContainer() {
  const { products } = useProductsContext();

  return (
    <div>
      {products && (
        <div className="grid grid-cols-1 p-5 sm:p-0  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
