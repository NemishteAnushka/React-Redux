import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0, userName: "Anushka" };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
const counterReducer = counterSlice.reducer;
export default counterReducer;
