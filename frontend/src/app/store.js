import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import logger from 'redux-logger';
import { cartReducer } from '../features/cart/CartSlice';
import { productsReducer } from '../features/products/ProductsSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: persistedReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});