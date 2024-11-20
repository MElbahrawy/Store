import { useEffect } from "react";
import ProductCard from "../utilities/ProductCard";

export default function ProductsGridView({ products }) {
  return (
    <div>
      {products && (
        <div className="grid grid-cols-1 p-5 sm:p-0  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 my-10">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
