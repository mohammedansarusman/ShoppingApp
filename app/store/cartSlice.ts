import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    test:10,
  }, 
})

export default cartSlice.reducer