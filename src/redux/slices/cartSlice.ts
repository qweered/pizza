import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartItem } from '../../@types/custom';

interface CartSliceState {
  items: ICartItem[];
  totalCount: number;
  totalPrice: number;
}

const initialState: CartSliceState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    appendToCart: (state, action: PayloadAction<ICartItem>) => {
      state.items.push(action.payload);
      state.totalCount++;
      state.totalPrice += action.payload.price;
    },
    removeFromCart: (
      state,
      action: PayloadAction<{ _id: number; size: string; dough: string }>
    ) => {
      const item = state.items.find(
        (item) =>
          item._id === action.payload._id &&
          item.size === action.payload.size &&
          item.dough === action.payload.dough
      );
      if (item) {
        state.items = state.items.filter((cartItem) => cartItem !== item);
        state.totalCount -= item.count;
        state.totalPrice -= item.count * item.price;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
    increaseCount: (
      state,
      action: PayloadAction<{ _id: number; size: string; dough: string }>
    ) => {
      const item = state.items.find(
        (item) =>
          item._id === action.payload._id &&
          item.size === action.payload.size &&
          item.dough === action.payload.dough
      );
      if (item) {
        item.count++;
        state.totalCount++;
        state.totalPrice += item.price;
      }
    },
    decreaseCount: (
      state,
      action: PayloadAction<{ _id: number; size: string; dough: string }>
    ) => {
      const item = state.items.find(
        (item) =>
          item._id === action.payload._id &&
          item.size === action.payload.size &&
          item.dough === action.payload.dough
      );
      if (item) {
        item.count--;
        state.totalCount--;
        state.totalPrice -= item.price;
      }
    },
  },
});

export const {
  appendToCart,
  clearCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
} = cartSlice.actions;

export default cartSlice.reducer;
