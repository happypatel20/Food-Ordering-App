import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      //mutating the state over here
      state.items.push(action.payload)
    },
    removeItems: (state, action) => {
      state.items.pop()
    },
    clearCart: (state, action) => {
      state.items.length = 0
    }

  }
})
export const {addItems, removeItems, clearCart} = cartSlice.actions;
export default cartSlice.reducer
