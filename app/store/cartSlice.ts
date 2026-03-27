import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../utils/types";

type CartStateProp = {
  basket: CartItem[];
  cartQuantity: number;
};
const initialState: CartStateProp = {
  basket: [],
  cartQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.basket.push(action.payload);
    },
    addQuantity: (state, action: PayloadAction<number>)=>{
      state.cartQuantity = state.cartQuantity+action.payload;
    },
    minusQuantity: (state, action: PayloadAction<number>)=>{
      state.cartQuantity = state.cartQuantity-action.payload;
    }
  },
});

export default cartSlice.reducer;
export const { addItem, addQuantity, minusQuantity } = cartSlice.actions;
