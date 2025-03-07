import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  id: string;
}

const initialState: CounterState = {
  id: "63701cc1f03239b7f700000e",
};

export const setmode = createSlice({
  name: "user",
  initialState,
  reducers: {
    finder: (state: any) => {
      state.id = "1";
    },
  },
});

export const { finder } = setmode.actions;

export default setmode.reducer;
