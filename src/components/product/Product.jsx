import { Link, useParams } from "react-router-dom";
import Btn from "../utilities/Btn";
import ProductImages from "./ProductImages";
import ProductRate from "./ProductRate";
import { randomText } from "../../utilities/Constants";
import ProductAction from "./ProductAction";
import { useProductsContext } from "../../context/ProductContext";
import { useEffect, useState } from "react";
import useFormatNum from "../../hooks/useFormatNum";
import LoadingSpinner from "../utilities/LoadingSpinner";
import Error from "../utilities/Error";

export default function Product() {
  const { id } = useParams();
  const { GetSingleProduct } = useProductsContext();
  const {
    single_product: product,
    single_product_loading: loading,
    single_product_error: error,
  } = useProductsContext();
  useEffect(() => {
    GetSingleProduct(id);
  }, [id]);
  return (
    <div className="container mx-auto py-20">
      <Link to={"/products"}>
        <Btn>Back To Products</Btn>
      </Link>
      {loading && <LoadingSpinner />}
      {error && <Error />}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          <ProductImages images={product.images} />
          <div>
            <h3 className="text-3xl font-bold">{product.name}</h3>
            <ProductRate reviews={product.reviews} stars={product.stars} />
            <p className="text-2xl text-blue-500">
              {useFormatNum(product.price)}
            </p>
            <p className="my-4">{product.description}</p>
            <p>
              <span className="font-bold">Availability:</span>{" "}
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </p>
            <p className="my-4">
              <span className="font-bold">Brand:</span> {product.company}
            </p>
            <hr />
            {product.stock > 0 && <ProductAction product={product} />}
          </div>
        </div>
      )}
    </div>
  );
}
