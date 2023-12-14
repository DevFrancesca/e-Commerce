import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './Slice'

export const Store = configureStore({
    reducer: CartSlice.reducer
})