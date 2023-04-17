import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    updateStatus: (state, action) => {
      state.value = action.payload;
    },
  },
});


// Action creators are generated for each case reducer function
export const { updateStatus } = statusSlice.actions;

export default statusSlice.reducer;
