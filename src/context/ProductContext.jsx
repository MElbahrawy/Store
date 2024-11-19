import { createContext, useContext, useEffect, useReducer } from "react";
import { productReducer } from "./ProductReducer";
import {
  allProductsUrl,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
  productUrl,
} from "../utilities/Constants";
import axios from "axios";

const context = createContext();
export const useProductsContext = () => useContext(context);

const initialState = {
  products: [],
  products_loading: false,
  products_error: false,
  single_product: {},
  single_product_loading: false,
  single_product_error: false,
};

export const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const GetProducts = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(allProductsUrl);
      const products = response.data;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };
  const GetSingleProduct = async (id) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await axios.get(`${productUrl}${id}`);
      const singleProduct = response.data;
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };
  useEffect(() => {
    GetProducts();
  }, []);

  return (
    <context.Provider value={{ ...state, GetSingleProduct }}>
      {children}
    </context.Provider>
  );
};
