import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./redux/productsSlice";
import App from "./App";
import cartReducer from "./redux/cartSlice"

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

