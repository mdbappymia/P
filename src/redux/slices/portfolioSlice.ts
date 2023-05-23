import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  data: {},
};

const portfolioSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setAllData(state, action) {
      state.data = action.payload;
    },
    todoToggled(state, action) {},
  },
});

export const { setAllData, todoToggled } = portfolioSlice.actions;
export default portfolioSlice.reducer;
