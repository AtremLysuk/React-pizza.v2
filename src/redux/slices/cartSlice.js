import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};
const cartSlise = createSlice({
  name: "cart",
  initialState: initialState,

  reducers: {

    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,

        }); 
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return (obj.price * obj.count) + sum;
      }, 0);
    },

    minusItem(state, action){
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count-- ;
      };
    },

    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);

    },

    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const selectCartItemById = (id) => (state) => state.cart.items.find((obj) => obj.id === id);

export const selectCart = (state) => state.cart;

export const { addItem, removeItem, clearItems, minusItem } = cartSlise.actions;

export default cartSlise.reducer;
