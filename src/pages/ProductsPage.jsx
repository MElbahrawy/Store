import React from "react";
import { useProductsContext } from "../context/ProductContext";

export default function ProductsPage() {
  const { products } = useProductsContext();

  return <div>productsPage</div>;
}
