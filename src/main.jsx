import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ProductsContextProvider } from "./context/ProductContext.jsx";
import { FilterAndSortProvider } from "./context/FilterAndSortContext.jsx";
import { CartContextProvider } from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductsContextProvider>
      <FilterAndSortProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </FilterAndSortProvider>
    </ProductsContextProvider>
  </BrowserRouter>
);
