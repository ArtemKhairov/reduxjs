import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user";
import { userApi } from "./api/userApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
