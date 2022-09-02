import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  collectionsList: [],
};

export const getCollections = createAsyncThunk("GET-COLLECTIONS", () => {
  return axios
    .get("http://localhost:3001/api/collection")
    .then((response) => response.data)
    .catch((error) => error);
});

export const addCollection = createAsyncThunk("CREATE_COLLECTION", (data) => {
  return axios
    .post("http://localhost:3001/api/collection", data)
    .then((response) => response.data)
    .catch((error) => error);
});

const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCollections.fulfilled, (state, action) => {
      state.collectionsList = action.payload;
    });
    builder.addCase(addCollection.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});

export default collectionsSlice.reducer;
