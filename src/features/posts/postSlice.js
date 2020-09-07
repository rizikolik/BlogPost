import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "First Post", content: "   hELLO!" },
  {
    id: 2,
    title: "Second POst",
    content: "This is raw data"
  }
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    }
  }
});
export const { postAdded } = postSlice.actions;

export default postSlice.reducer;
