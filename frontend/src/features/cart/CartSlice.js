import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const itemToAdd = createAsyncThunk(
    'cart/itemToAdd',
    async (productId, { dispatch }) => {
        const response = await fetch(`http://localhost:5000/products/${productId}`);
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        dispatch(addToCart(data));
    }
)

const initialState = {
    cartArray: [],
    isLoading: true,
    errMsg: ''
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            const itemInCart = state.cartArray.find((item) => item.id === payload.id);
            if (itemInCart) {
              itemInCart.qty += payload.qty;
            } else {
              state.cartArray.push(payload);
            }
        },
        incrementQty: (state, { payload }) => {
          const itemInCart = state.cartArray.find((item) => item.id === payload.id);
          itemInCart.qty++;
        },
        decrementQty: (state, { payload }) => {
          const itemInCart = state.cartArray.find((item) => item.id === payload.id);
          if (itemInCart.qty === 1) {
            itemInCart.qty = 1;
          } else {
            itemInCart.qty--;
          }
        },
        removeItem: (state, { payload }) => {
          const removeItem = state.cartArray.filter((item) => item.id !== payload.id);
          state.cartArray = removeItem;
        },
        emptyCart: (state) => {
            state.cartArray = [];
        }
    },
    extraReducers: {
        [itemToAdd.pending]: (state) => {
            state.isLoading = true;
        },
        [itemToAdd.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.cartArray = action.payload;
        },
        [itemToAdd.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message: 'Fetch failed';
        }
    }
});

export const cartReducer = cartSlice.reducer;

export const { addToCart, incrementQty, decrementQty, removeItem, emptyCart } = cartSlice.actions;

export const selectAllCart = (state) => {
    // console.log(state.cart.cartArray);
    return state.cart.cartArray;
};

// export const selectRandomProduct = () => {
//     return PRODUCTS[Math.floor(PRODUCTS.length * Math.random())];
// };

export const selectCartById = (id) => (state) => {
    return state.cart.cartArray.find(
        (product) => product.id === parseInt(id));
};

// export const selectFeaturedProduct = () => {
//     return PRODUCTS.find((product) => product.featured);
// }