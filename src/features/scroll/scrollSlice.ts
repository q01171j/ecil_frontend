import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ScrollState {
    scrollY: number;
}

const initialState: ScrollState = {
    scrollY: 0
}

export const scrollSlice = createSlice({
    name: 'scroll',
    initialState,
    reducers: {
        setScrollY: (state, action: PayloadAction<number>) => {
            state.scrollY = action.payload
        }
    }
})

export const { setScrollY } = scrollSlice.actions

export default scrollSlice.reducer
