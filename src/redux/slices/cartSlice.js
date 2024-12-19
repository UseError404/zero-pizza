import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0,
    items: [],
    itemsCount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action) {
            /* state.items.push(action.payload);
             state.totalPrice = state.items.reduce((sum, obj) => {
                 return obj.price + sum;
             }, 0)*/

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
        removeProduct(state, action) {
            state.items = state.items.filter(obj => obj.id !== action.payload)
        },
        clearProduct(state) {
            state.items = [];
        },

    }
});

export const {addProduct, clearProduct, removeProduct} = cartSlice.actions;
export default cartSlice.reducer;