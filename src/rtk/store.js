import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/product-slice";
import cartReducer from "./slices/cart-slice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});
