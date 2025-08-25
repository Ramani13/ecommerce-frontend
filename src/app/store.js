import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productSlice";
import authReducer from "../features/auth/authSlice";
import searchReducer from "../features/search/searchSlice";
import cartReducer from "../features/cart/cartSlice"; // ✅ add this

const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
    search: searchReducer,
    cart: cartReducer, // ✅ add to store
  },
});

export default store;
