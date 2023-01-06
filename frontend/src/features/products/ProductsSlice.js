import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PRODUCTS } from '../../app/shared/oldData/PRODUCTS';
import { baseUrl } from '../../app/shared/baseUrl';

// export const fetchProduct = createAsyncThunk(
//     'products/fetchProducts',
//     async () => {
//         const response = await fetch(baseUrl + 'products');
//         if (!response.ok) {
//             return Promise.reject('Unable to fetch, status: ' + response.status);
//         }
//         const data = await response.json();
//         return data;
//     }
// );

const initialState = {
    productsArray: PRODUCTS
};

const productsSlice = createSlice({
    name: 'products',
    initialState
});

export const productsReducer = productsSlice.reducer;

export const selectAllProducts = (state) => {
    return state.products.productsArray;
};

// export const selectRandomProduct = () => {
//     return PRODUCTS[Math.floor(PRODUCTS.length * Math.random())];
// };

export const selectProductById = (id) => (state) => {
    return state.products.productsArray.find(
        (product) => product.id === parseInt(id));
};

// export const selectFeaturedProduct = () => {
//     return PRODUCTS.find((product) => product.featured);
// }