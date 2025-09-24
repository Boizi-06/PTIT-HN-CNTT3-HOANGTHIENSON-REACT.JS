import { createSlice } from "@reduxjs/toolkit";

interface NumberState {
  list: number[];
}

export const initialState: NumberState = { list: [] };

const numberSlice = createSlice({
  name: "numbers",
  initialState,
  reducers: {
    addRandom: (state) => {
      const randomInt = Math.floor(Math.random() * 11); // 0–10
      state.list.push(randomInt);
    },
  },
});

export const { addRandom } = numberSlice.actions;
export default numberSlice.reducer;
