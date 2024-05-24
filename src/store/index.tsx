import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/index";

const rootReducer = combineReducers({
  endow: userSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

  // devTools: false 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;