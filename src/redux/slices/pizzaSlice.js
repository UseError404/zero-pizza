import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params, thunkAPI) => {
        const {category, sort, order, search, currentPage} = params;
        const {data} = await axios.get(
            `https://673607b65995834c8a951d71.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sort}&order=${order}${search}`
        );

        if(data.length === 0) {
            return thunkAPI.rejectWithValue('Пиццы пустые')
        }

        return thunkAPI.fulfillWithValue(data);
    }
)

const initialState = {
    items: [],
    status: '', // 'loading', 'succeeded', 'failed'
}

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        // setItems(state, action) {
        //     state.items = action.payload;
        // }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzas.pending, (state) => {
                state.status = 'loading';
                state.items = []; // Очищаем предыдущие данные при новой загрузке
            })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'succeeded';
            })
            .addCase(fetchPizzas.rejected, (state) => {
                state.status = 'error';
                state.items = [];
            });
    }
});
export const selectPizzaData = state => state.pizza;
export const {setItems} = pizzaSlice.actions;
export default pizzaSlice.reducer;