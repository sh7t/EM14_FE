import type {Category} from "../types/category.ts";
import type {Book} from "../types/book.ts";
import type {Author} from "../types/author.ts";

function getFromLocalStorage<T>(key: string):T | null
{
    try {
        const value = localStorage.getItem(key);
        if (value) {
            return JSON.parse(value) as T;
        }
    } catch (error) {
        console.error("Error getting from localStorage", error);
    }
    return null;
}
export function saveToLocalStorage<T>(key: string, value: T): void {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error("Error saving to localStorage", error);
    }
}
export function removeFromLocalStorage(key: string): void {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error("Error removing from localStorage", error);
    }
}
export function getCategories(): Category[] | null
{
    return getFromLocalStorage<Category[]>("categories")
}

export function getBooks(): Book[] | null
{
    return getFromLocalStorage<Book[]>("books")
}

export function getAuthors(): Author[] | null
{
    return getFromLocalStorage<Author[]>("authors")
}