import { createContext, useContext, useEffect, useReducer } from "react";
import FilterAndSortReducer from "./FilterAndSortReducer";
import {
  CLEAR_FILTERS,
  GET_FILTERS,
  GET_SORT,
  LOAD_PRODUCTS,
  SET_FILTERS,
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
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    minPrice: 0,
    maxPrice: 0,
    price: 0,
    shipping: false,
  },
};
export const FilterAndSortProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FilterAndSortReducer, initialState);
  const { products } = useProductsContext();
  // for loading data
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);
  // for sorting and filtering
  useEffect(() => {
    dispatch({ type: SET_FILTERS });
    dispatch({ type: SET_SORT });
  }, [state.sort, products, state.filters]);
  const showGrid = () => {
    dispatch({ type: SHOW_GRID });
  };
  const showList = () => {
    dispatch({ type: SHOW_LIST });
  };
  const getSort = (e) => {
    dispatch({ type: GET_SORT, payload: e.target.value });
  };
  const getFilter = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "category" || name === "color") {
      value = e.target.dataset.value;
    }
    if (name === "price") {
      value = Number(value);
    }
    if (name === "shipping") {
      value = e.target.checked;
    }
    dispatch({ type: GET_FILTERS, payload: { name, value } });
  };
  const resetFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };
  return (
    <context.Provider
      value={{
        state,
        products,
        showGrid,
        showList,
        getSort,
        getFilter,
        resetFilters,
      }}
    >
      {children}
    </context.Provider>
  );
};
