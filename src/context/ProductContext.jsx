import { createContext, useContext, useReducer } from "react";

const context = createContext();
export const useProductsContext = () => useContext(context);

const initialState = {
  products: [],
};

export const ProductsContextProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  return <context.Provider value={initialState}>{children}</context.Provider>;
};
