import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import portfolioSlice from "../slices/portfolioSlice";

const store = configureStore({
  reducer: {
    portfolio: portfolioSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
