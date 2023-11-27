import { createSlice } from "@reduxjs/toolkit";

export interface IUserState {
  firstname: string;
  lastname: string;
  id: string;
}

const initialState: IUserState = {
  firstname: "name",
  lastname: "last",
  id: "id",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: () => initialState,
  },
});

export const userReducer = userSlice.reducer;
export const userAction = userSlice.actions;
