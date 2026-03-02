import {type ActionReducerMapBuilder, createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {ProductsState} from "../../types/product.ts";
import customAxios from "../customAxios.ts";

const initialState: ProductsState = {
    products: [],
    isLoading: false,
    error: null,
};

export const getAllProducts = createAsyncThunk(
    "products/getAll",
    async (_, {rejectWithValue}) => {
        try {
            const response = await customAxios.get('https://fakestoreapi.com/products');
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data || "Failed to get products!\n");
        }
    }
)

const settingsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<ProductsState>) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getAllProducts.fulfilled, (state, action: PayloadAction) => {
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(getAllProducts.rejected, (state, action: PayloadAction) => {
                state.isLoading = false;
                state.error = action.payload || "Failed to get products!\n";
            });
    }
});

export default settingsSlice.reducer;
