import type { CartItemType } from "./cartItem.ts";

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  token: string;
  cart?: CartItemType[];
  createdAt: Date;
};

export interface UserState {
  id: number;
  name: string;
  token: string;
  totalCount: number;
  cart?: CartItemType[];
}
