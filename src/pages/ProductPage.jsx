import React from "react";
import { useParams } from "react-router-dom";
import Product from "../components/product/Product";
import PageHeader from "../components/utilities/PageHeader";

export default function ProductPage() {
  const { id } = useParams();
  return (
    <section className="">
      <PageHeader title={id} product />
      <Product />
    </section>
  );
}
