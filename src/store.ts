import { combineReducers, configureStore } from "@reduxjs/toolkit";
import scrollSlice from "@features/scroll/scrollSlice";

const reducer = combineReducers({
    scrollSlice: scrollSlice,
});

export const store = configureStore({
    reducer: reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

