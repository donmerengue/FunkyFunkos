import { DirectionsBusFilledRounded } from "@mui/icons-material";
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    product: {},
    reviews: [],
    error: ''
}

export const getSingleProduct = createAsyncThunk('SINGLE-PRODUCT', (productId)=>{
   return axios
    .get(`https://dummyjson.com/products/${productId}`)
    .then(response => response.data)
    .catch((error) => error);
})

const singleProductSlice = createSlice({
    name: "singleProduct",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getSingleProduct.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(getSingleProduct.fulfilled, (state,action)=>{
            state.loading = false
            state.product = action.payload
        })
        builder.addCase(getSingleProduct.rejected, (state,action)=>{
            state.error = action.error.message
        })
    }
})

export default singleProductSlice.reducer