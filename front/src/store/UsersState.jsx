import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  usersList: [],
};

export const getUsers = createAsyncThunk("GET-USERS", () => {
  return axios
    .get("http://localhost:3001/api/user/all")
    .then((response) => response.data)
    .catch((error) => error);
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.usersList = action.payload;
    });
  },
});

export default usersSlice.reducer;
