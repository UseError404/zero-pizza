import {createSlice} from "@reduxjs/toolkit";

const initialState = {

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart(state, action) {
            state.categoryId = action.payload;
        } ,

    }
});

export const {setCart} = cartSlice.actions;
export default cartSlice.reducer;