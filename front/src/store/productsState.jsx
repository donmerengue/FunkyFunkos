import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  productsList: [],
  error:'',
}

export const fetchProducts = createAsyncThunk('PRODUCTS', ()=>{
    return axios
      .get("http://localhost:3001/api/funkos")
      .then((response) => {
        console.log("response", response);
        console.log("el resultado del axios: ", response.data)
        return response.data
      })
      .catch((error) => error);
    }
)

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state)=>{
      state.loading = true
    })
    builder.addCase(fetchProducts.fulfilled, (state,action)=>{
      state.loading = false
      state.productsList = action.payload
      state.error = ''
    })
    builder.addCase(fetchProducts.rejected, (state,action)=>{
      state.loading = false
      state.productsList = []
      state.error = action.error.message
    })
  }
})



export default productsSlice.reducer;
