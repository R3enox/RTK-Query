import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterComment: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { filterComment } = filterSlice.actions;

export default filterSlice.reducer;

//Selectors

export const selectFilter = (state) => state.filter.filter;
