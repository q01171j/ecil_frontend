import { combineReducers, configureStore } from "@reduxjs/toolkit";
import scrollSlice from "@features/scroll/scrollSlice";
import userSlice from "@features/user/userSlice";

const reducer = combineReducers({
    scrollSlice: scrollSlice,
    userSlice: userSlice,
});

export const store = configureStore({
    reducer: reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

