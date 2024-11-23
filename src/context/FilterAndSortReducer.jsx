import {
  CLEAR_FILTERS,
  GET_FILTERS,
  GET_SORT,
  LOAD_PRODUCTS,
  SET_SORT,
  SHOW_GRID,
  SHOW_LIST,
} from "../utilities/Constants";

export default function FilterAndSortReducer(state, action) {
  switch (action.type) {
    case SHOW_GRID:
      return { ...state, gridView: true };
    case SHOW_LIST:
      return { ...state, gridView: false };
    case LOAD_PRODUCTS: {
      const price = action.payload.map((prod) => prod.price);
      const maxPrice = Math.max(...price);
      return {
        ...state,
        products: [...action.payload],
        filteredProducts: [...action.payload],
        filters: { ...state.filters, maxPrice: maxPrice, price: maxPrice },
      };
    }
    case GET_SORT:
      return { ...state, sort: action.payload };
    case SET_SORT: {
      let tempArr = [...state.filteredProducts];
      if (state.sort === "price-lowest") {
        tempArr.sort((a, b) => a.price - b.price);
      } else if (state.sort === "price-highest") {
        tempArr.sort((a, b) => b.price - a.price);
      } else if (state.sort === "name-a") {
        tempArr.sort((a, b) => a.name.localeCompare(b.name));
      } else if (state.sort === "name-z") {
        tempArr.sort((a, b) => b.name.localeCompare(a.name));
      }
      return { ...state, filteredProducts: tempArr };
    }
    case GET_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      };
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          price: state.filters.maxPrice,
          shipping: false,
        },
      };
    default:
      return state;
  }
}
