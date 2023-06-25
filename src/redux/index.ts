import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import listsSlice from "./lists-slice";

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const action = {
  auth: authSlice.actions,
  lists: listsSlice.actions,
};

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    lists: listsSlice.reducer,
  },
});

export default store;
