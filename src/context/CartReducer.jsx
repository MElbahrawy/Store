import {
  ADD_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART,
  TOGGLE_AMOUNT,
} from "../utilities/Constants";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_CART: {
      const { id, color, amount, product } = action.payload;
      const tempItem = state.cart.find((item) => item.id === id + color);
      if (tempItem) {
        const tempCart = state.cart.map((item) => {
          if (item.id === id + color) {
            let newAmount = item.amount + amount;
            return { ...item, amount: newAmount };
          } else {
            return item;
          }
        });
        return { ...state, cart: tempCart };
      } else {
        const newItem = {
          id: id + color,
          amount,
          color,
          img: product.images[0].url,
          price: product.price,
          max: product.stock,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    }
    case TOGGLE_AMOUNT: {
      const { id, value } = action.payload;
      const tempCart = state.cart.map((item) => {
        if (item.id === id) {
          if (value === "inc") {
            let newAmount = item.amount + 1;
            if (newAmount > item.max) {
              newAmount = item.max;
            }
            return { ...item, amount: newAmount };
          } else if (value === "dec") {
            let newAmount = item.amount - 1;
            if (newAmount < 1) {
              newAmount = 1;
            }
            return { ...item, amount: newAmount };
          }
          return item;
        } else {
          return item;
        }
      });
      return { ...state, cart: tempCart };
    }
    case REMOVE_CART: {
      const tempCart = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: tempCart };
    }
    case CLEAR_CART:
      return { ...state, cart: [] };
    case COUNT_CART_TOTALS: {
      const { total, amount } = state.cart.reduce(
        (result, item) => {
          const { price, amount } = item;
          result.total += price * amount;
          result.amount += amount;
          return result;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      return { ...state, total, amount };
    }
  }
  return state;
};
