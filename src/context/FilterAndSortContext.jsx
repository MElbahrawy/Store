import { createContext, useContext, useReducer } from "react";
import FilterAndSortReducer from "./FilterAndSortReducer";
import { SHOW_GRID, SHOW_LIST } from "../utilities/Constants";

const context = createContext();

export const useFilterAndSort = () => useContext(context);

const initialState = {
  gridView: true,
};
export const FilterAndSortProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FilterAndSortReducer, initialState);
  const showGrid = () => {
    dispatch({ type: SHOW_GRID });
  };
  const showList = () => {
    dispatch({ type: SHOW_LIST });
  };
  return (
    <context.Provider value={{ state, showGrid, showList }}>
      {children}
    </context.Provider>
  );
};
