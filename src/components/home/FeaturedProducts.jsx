import React from "react";
import SectionHeader from "../utilities/SectionHeader";
import ProductCard from "../utilities/ProductCard";
import Container from "../utilities/Container";
import { useProductsContext } from "../../context/ProductContext";
import LoadingSpinner from "../utilities/LoadingSpinner";
import Error from "../utilities/Error";

export default function FeaturedProducts() {
  const { featuredProducts, products_loading, products_error } =
    useProductsContext();

  return (
    <section className="bg-slate-200 py-5">
      <Container>
        <SectionHeader>Featured Products</SectionHeader>
        {products_loading && <LoadingSpinner />}
        {products_error && <Error />}
        {featuredProducts && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.slice(0, 3).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <button className="block bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-600 transition mt-5 mx-auto">
              All Products
            </button>
          </>
        )}
      </Container>
    </section>
  );
}
