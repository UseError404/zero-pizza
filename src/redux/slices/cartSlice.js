import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0,
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action) {
            const findItem = state.items.find((obj) => obj.id === action.payload.id)
            if (!findItem) {
                state.items.push({...action.payload, count: 1})
            } else {
                findItem.count++;
            }

            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum;
            }, 0);

        },

        minusItem(state, action) {
            const findItem = state.items.find((obj) => obj.id === action.payload)
            if (findItem) {
                findItem.count--;
            }
        },
        removeProduct(state, action) {
            state.items = state.items.filter(obj => obj.id !== action.payload)
        },
        clearProduct(state) {
            state.items = [];
            state.totalPrice = 0;
        },

    }
});

export const {addProduct, clearProduct, minusItem, removeProduct} = cartSlice.actions;
export default cartSlice.reducer;