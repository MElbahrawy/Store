import { createContext, useContext, useEffect, useReducer } from "react";
import FilterAndSortReducer from "./FilterAndSortReducer";
import {
  GET_SORT,
  LOAD_PRODUCTS,
  SET_SORT,
  SHOW_GRID,
  SHOW_LIST,
} from "../utilities/Constants";
import { useProductsContext } from "./ProductContext";

const context = createContext();

export const useFilterAndSort = () => useContext(context);

const initialState = {
  gridView: true,
  sort: "price-lowest",
  products: [],
  filteredProducts: [],
};
export const FilterAndSortProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FilterAndSortReducer, initialState);
  const { products } = useProductsContext();
  // for loading data
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);
  // for sorting
  useEffect(() => {
    dispatch({ type: SET_SORT });
  }, [state.sort, products]);
  const showGrid = () => {
    dispatch({ type: SHOW_GRID });
  };
  const showList = () => {
    dispatch({ type: SHOW_LIST });
  };
  const getSort = (e) => {
    dispatch({ type: GET_SORT, payload: e.target.value });
  };
  return (
    <context.Provider value={{ state, showGrid, showList, getSort }}>
      {children}
    </context.Provider>
  );
};
