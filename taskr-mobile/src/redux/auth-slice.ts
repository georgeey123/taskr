import { IUser } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  isAuthenticated: boolean;
  user: IUser | null;
};

const initialState: initialStateType = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser | null>) {
      state.user = action.payload;
    },
    setIsAuthenticated(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
  },
});

export default authSlice;
