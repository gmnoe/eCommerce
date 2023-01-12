import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCartItems = createAsyncThunk(
    'cart/getCartItems',
    async (id) => {
        const response = await fetch(`http://localhost:5000/products/${id}`);
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
    cartArray: [],
    isLoading: true,
    errMsg: ''
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartArray = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartArray = state.cartArray.filter((item) => item.id !== itemId);
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartArray.find((item) => item.id === payload.id);
            cartItem.qty = cartItem.qty + 1;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartArray.find((item) => item.id === payload.id);
            cartItem.qty = cartItem.qty - 1;
        },
    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true;
        },
        [getCartItems.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.cartArray = action.payload;
        },
        [getCartItems.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message: 'Fetch failed';
        }
    }
});

export const cartReducer = cartSlice.reducer;

export const selectAllCart = (state) => {
    return state.products.productsArray;
};

// export const selectRandomProduct = () => {
//     return PRODUCTS[Math.floor(PRODUCTS.length * Math.random())];
// };

// export const selectProductById = (id) => (state) => {
//     return state.products.productsArray.find(
//         (product) => product.id === parseInt(id));
// };

// export const selectFeaturedProduct = () => {
//     return PRODUCTS.find((product) => product.featured);
// }