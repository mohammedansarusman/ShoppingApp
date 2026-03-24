import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../utils/types";

type CartStateProp = {
  basket: CartItem[];
};
const initialState: CartStateProp = {
  basket: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.basket.push(action.payload);
    },
  },
});

export default cartSlice.reducer;
export const { addItem } = cartSlice.actions;
