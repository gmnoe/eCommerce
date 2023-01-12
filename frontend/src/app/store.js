import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { cartReducer } from '../features/cart/CartSlice';
import { productsReducer } from '../features/products/ProductsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
