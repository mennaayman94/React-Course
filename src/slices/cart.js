import { createSlice } from "@reduxjs/toolkit";
const state = {
  //[{title" , qu: , id:}]
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState:state,
  reducers: {
    addToCart: (state, action) => {
        console.log(state,action,"slice")
      const item = state.items.find((item) => item.id === action.payload.id);
      console.log(item,"iem")
      if (item) {
        item.quantity += 1;
      } else {
        console.log(action.payload,"payload")
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});
export const {addToCart,clearCart,removeItem}=cartSlice.actions;
export const cartReducer=cartSlice.reducer;
export const selectorCartCount=(state)=>state.cart.items?.reduce((total, item)=>total+item.quantity,0)
