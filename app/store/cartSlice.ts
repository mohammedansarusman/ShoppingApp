import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemWithUnits } from "../utils/types"; // type CartItem  + units

type CartStateProp = {
  basket: CartItemWithUnits[];
  // cartQuantity: number;
};
const initialState: CartStateProp = {
  basket: [],
  // cartQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItemWithUnits>) => {
      const existingItem = state.basket.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.units += 1;
      } else {
        state.basket.push(action.payload);
      }
    },
    addQuantity: (state, action: PayloadAction<CartItemWithUnits>) => {
      // state.cartQuantity = state.cartQuantity+action.payload;
      const existing = state.basket.find(
        (item) => item.id === action.payload.id,
      );
      if (existing) {
        existing.units += 1;
      }
    },
    minusQuantity: (state, action: PayloadAction<CartItemWithUnits>) => {
      const existing = state.basket.find(
        (item) => item.id === action.payload.id,
      );
      if (existing) {
        existing.units -= 1;
      }
    },
  },
});

export default cartSlice.reducer;
export const { addItem, addQuantity, minusQuantity } = cartSlice.actions;
