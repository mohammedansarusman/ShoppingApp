import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"

const appStore = configureStore({
    reducer:{
        cart: cartSlice,
    },
})

export default appStore;
export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;