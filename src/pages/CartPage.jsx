import React from "react";
import PageHeader from "../components/utilities/PageHeader";
import Cart from "../cart/Cart";

export default function CartPage() {
  return (
    <section>
      <PageHeader title="Cart" />
      <Cart />
    </section>
  );
}
