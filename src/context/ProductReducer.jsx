import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
} from "../utilities/Constants";

export const productReducer = (state, action) => {
  switch (action.type) {
    // get All Products Cases
    case GET_PRODUCTS_BEGIN:
      return { ...state, products_loading: true };

    case GET_PRODUCTS_SUCCESS: {
      let featuredProducts = action.payload.filter(
        (product) => product.featured === true
      );
      return {
        ...state,
        products_loading: false,
        products: action.payload,
        featuredProducts,
      };
    }

    case GET_PRODUCTS_ERROR:
      return { ...state, products_loading: false, products_error: true };

    // get Single Product Cases
    case GET_SINGLE_PRODUCT_BEGIN:
      return {
        ...state,
        single_product: {},
        single_product_loading: true,
        single_product_error: false,
      };

    case GET_SINGLE_PRODUCT_SUCCESS: {
      return {
        ...state,
        single_product_loading: false,
        single_product: action.payload,
      };
    }

    case GET_SINGLE_PRODUCT_ERROR:
      return {
        ...state,
        single_product_loading: false,
        single_product_error: true,
      };

    // other cases...
    default:
      return state;
    //   throw new Error(`no matching ${action.type} action type`);
  }
};
