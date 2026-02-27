import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserState } from "../../types/user.ts";
import {
  getCurrentCart,
  getCurrentUser,
  saveToLocalStorage,
} from "../../services/localStorageHelper.ts";
import type { CartItemType } from "../../types/cartItem.ts";

const localUser = getCurrentUser();
const currentUser = localUser
  ? { cart: getCurrentCart(), ...localUser }
  : { id: 0, name: "", token: "", cart: [] };

const initialState: UserState = currentUser
  ? {
      id: currentUser.id,
      name: currentUser.name,
      token: currentUser.token,
      totalCount: 0,
      cart: currentUser.cart ?? [],
    }
  : {
      id: 0,
      name: "",
      token: "",
      totalCount: 0,
      cart: [],
    };

const changeTotalCount = (state: UserState) => {
  if (!state.cart) {
    state.totalCount = 0;
  } else {
    state.totalCount = state.cart.reduce((acc, item) => acc + item.quantity, 0);
  }
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addBookToCart: (state, action: PayloadAction<CartItemType>) => {
      if (!state.cart) state.cart = [];
      const item = state.cart.find(
        (item) => item.book.id === action.payload.book.id,
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
      saveToLocalStorage("cart", state.cart);
      changeTotalCount(state);
    },
    removeBookFromCart: (state, action: PayloadAction<number>) => {
      if (!state.cart) return;
      state.cart = state.cart.filter((item) => item.book.id !== action.payload);
      saveToLocalStorage("cart", state.cart);
      changeTotalCount(state);
    },
    updateBookQuantity: (state, action: PayloadAction<CartItemType>) => {
      if (!state.cart) return;
      const item = state.cart.find((i) => i.book.id === action.payload.book.id);
      if (item) item.quantity = action.payload.quantity;

      saveToLocalStorage("cart", state.cart);
      changeTotalCount(state);
    },
  },
});

export const { addBookToCart, removeBookFromCart, updateBookQuantity } =
  userSlice.actions;
export default userSlice.reducer;
