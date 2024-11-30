import React, { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./CartReducer";
import {
  ADD_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART,
  TOGGLE_AMOUNT,
} from "../utilities/Constants";

const context = createContext();
export const useCartContext = () => useContext(context);

const getCart = () => JSON.parse(localStorage.getItem("cart")) || [];

const initialState = {
  cart: getCart(),
  amount: 0,
  total: 0,
  shipping: 534,
};

export function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_CART, payload: { id, color, amount, product } });
  };
  const toggleAmount = (id, value) => {
    dispatch({ type: TOGGLE_AMOUNT, payload: { id, value } });
  };
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART, payload: id });
  };
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    dispatch({ type: COUNT_CART_TOTALS });
  }, [state.cart]);
  return (
    <context.Provider
      value={{ state, addToCart, toggleAmount, removeItem, clearCart }}
    >
      {children}
    </context.Provider>
  );
}
