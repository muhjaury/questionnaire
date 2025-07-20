import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: any = { start: false };

const dataSlice = createSlice({
  name: "DATA",
  initialState,
  reducers: {
    ADD_DATA: (state, action: PayloadAction<any>) => {
      return { ...state, ...action.payload };
    },
    DELETE_DATA: () => {
      return {};
    },
  },
});

export const { ADD_DATA, DELETE_DATA } = dataSlice.actions;
export default dataSlice.reducer;
