import { createSlice } from "@reduxjs/toolkit";

const initialState = { userData: null };

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.userData = action.payload;
    },
    logout(state) {
      state.userData = null;
    },
  },
});

export const userActions = userSlice.actions;
// export const selectUser = (state) => state.user.userData

export default userSlice.reducer;

// TODO: incorporar ruta de login y tal vez asyncThunk
