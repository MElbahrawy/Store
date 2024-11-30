import React from "react";
import Container from "../components/utilities/Container";
import CartHeader from "./CartHeader";
import CartContainer from "./CartContainer";
import CartActions from "./CartActions";
import CartCheckout from "./CartCheckout";
import { useCartContext } from "../context/CartContext";
import Error from "../components/utilities/Error";
import Btn from "../components/utilities/Btn";
import { Link } from "react-router-dom";

export default function Cart() {
  const { state } = useCartContext();
  return (
    <main className="py-10">
      {state.cart.length > 0 ? (
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <div className="col-span-2">
              <CartHeader />
              <CartContainer />
              <CartActions />
            </div>
            <CartCheckout />
          </div>
        </Container>
      ) : (
        <>
          <Error />
          <Container>
            <Link to={"/products"} className="flex justify-center">
              <Btn>Continue Shopping</Btn>
            </Link>
          </Container>
        </>
      )}
    </main>
  );
}
