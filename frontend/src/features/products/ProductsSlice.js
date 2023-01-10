import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { PRODUCTS } from '../../app/shared/oldData/PRODUCTS';
// import { baseUrl } from '../../app/shared/baseUrl';
// import { mapImageUrl } from '../../utils/mapImageUrl';
// import axios from 'axios';



export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await fetch('http://localhost:5000/product');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        // console.log(data);
        // console.log(response);
        return data;
    }
);


const initialState = {
    productsArray: [],
    isLoading: true,
    errMsg: ''
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.productsArray = action.payload.PRODUCTS;
        },
        [fetchProducts.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message: 'Fetch failed';
        }
    }
});

export const productsReducer = productsSlice.reducer;

export const selectAllProducts = (state) => {
    console.log(state.products.productsArray);
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