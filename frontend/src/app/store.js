import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { productsReducer } from '../features/products/ProductsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
