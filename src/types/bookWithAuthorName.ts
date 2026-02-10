import type {Book} from "./book.ts";

export type BookWithAuthorName = Book & { authorName: string | null };