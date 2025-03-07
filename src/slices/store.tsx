import { configureStore } from "@reduxjs/toolkit";
import dark from "./dark";
import { emptySplitApi } from "./apislice";
export const store = configureStore({
  reducer: {
    setter: dark,
    [emptySplitApi.reducerPath]: emptySplitApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emptySplitApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
