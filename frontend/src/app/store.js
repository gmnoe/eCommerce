import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import { cartReducer } from '../features/cart/CartSlice';
import { productsReducer } from '../features/products/ProductsSlice';

const reducers = combineReducers({
    products: productsReducer,
    cart: cartReducer
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
