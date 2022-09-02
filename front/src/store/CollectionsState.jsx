import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  collectionsList: [],
  error: "",
};

export const getCollections = createAsyncThunk("GET-COLLECTIONS", () => {
  return axios
    .get("http://localhost:3001/api/collection")
    .then((response) => response.data)
    .catch((error) => error);
});

const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCollections.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCollections.fulfilled, (state, action) => {
      state.loading = false;
      state.collectionsList = action.payload;
    });
    builder.addCase(getCollections.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default collectionsSlice.reducer;
