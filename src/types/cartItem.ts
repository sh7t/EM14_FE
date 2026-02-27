import type { Book } from "./book.ts";

export type CartItemType = {
  book: Book;
  quantity: number;
};
