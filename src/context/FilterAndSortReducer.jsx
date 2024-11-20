import React from "react";
import { SHOW_GRID, SHOW_LIST } from "../utilities/Constants";

export default function FilterAndSortReducer(state, action) {
  switch (action.type) {
    case SHOW_GRID:
      return { ...state, gridView: true };
    case SHOW_LIST:
      return { ...state, gridView: false };
    default:
      return state;
  }
}
