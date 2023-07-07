import { TASKR_AUTH } from "@/constants";
import { IUser } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";

type initialStateType = {
  isAuthenticated: boolean;
  user: IUser | null;
  accessToken: null | string;
};

const initialState: initialStateType = {
  isAuthenticated: false,
  user: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<initialStateType>) {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = action.payload.isAuthenticated;
      SecureStore.setItemAsync(TASKR_AUTH, JSON.stringify(action.payload));
    },
    setAccessToken(state, action: PayloadAction<string | null>) {
      state.accessToken = action.payload;
    },
    setUser(state, action: PayloadAction<IUser | null>) {
      state.user = action.payload;
    },
    setIsAuthenticated(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
  },
});

export default authSlice;
