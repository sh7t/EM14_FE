import type {Category} from "../types/category.ts";
import type {Book} from "../types/book.ts";
import type {Author} from "../types/author.ts";
import type {User} from "../types/user.ts";
import type {BookWithAuthorName} from "../types/bookWithAuthorName.ts";

function getFromLocalStorage<T>(key: string): T | null {
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

export function getCategories(): Category[] | null {
    return getFromLocalStorage<Category[]>("categories")
}

export function getAuthors(): Author[] | null {
    return getFromLocalStorage<Author[]>("authors")
}

export function getBooks(): Book[] | null {
    return getFromLocalStorage<Book[]>("books")
}

function getPopularBooks(top: number = 8): Book[] | null {
    const books = getBooks();

    if (books) {
        return books
            .filter(book => book.topPlacement <= top)
            .slice()
            .sort((a, b) => a.topPlacement - b.topPlacement);
    }
    return null;
}

export function getNewestBooks(count: number = 5): Book[] | null {
    const books = getBooks();
    if (books) {
        return [...books]
            .sort((a, b) =>
                new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            )
            .slice(0, count);
    }

    return null;
}

export function getBookById(bookId: number): Book | null {
    const books = getBooks();
    if (books) {
        const book = books.find((b) => b.id === bookId);
        return book ? book : null;
    }
    return null;
}

export function getBooksWithAuthor(isPopular: boolean = false, top?: number): BookWithAuthorName[] | null {
    const books = isPopular ? getPopularBooks(top) : getBooks();
    const authors = getAuthors();

    if (books && authors) {
        return books.map(book => {
            const author = authors.find(a => a.id === book.authorId);
            return {
                ...book,
                authorName: author ? author.name : null
            };
        });
    }
    return null;
}
export function getBookWithAuthorById(bookId: number): BookWithAuthorName | null {
    const books = getBooks();
    const authors = getAuthors();

    if (books && authors) {
        const book = books.find((b) => b.id === bookId);
        if (book) {
            const author = authors.find(a => a.id === book.authorId);
            return {
                ...book,
                authorName: author ? author.name : null
            };
        }
    }
    return null;
}

export function saveUser(user: User) {
    const users = getFromLocalStorage<User[]>("users") || [];
    users.push(user);
    saveToLocalStorage<User[]>('users', users);
}

export function saveCurrentUserToken(token: string) {
    saveToLocalStorage<string>('currentUserToken', token);
}

export function checkToken(): boolean {
    let checkResult = false;
    const savedToken = getFromLocalStorage<string>('currentUserToken');
    const users = getFromLocalStorage<User[]>('users');
    users?.forEach(user => {
        if (user.token === savedToken) {
            checkResult = true;
        }
    });
    return checkResult;
}

export function loginUser(email: string, password: string): boolean {
    const users = getFromLocalStorage<User[]>('users');
    if (users) {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            saveCurrentUserToken(user.token);
            return true;
        }
    }
    return false;
}

export function isEmpty(str: string) {
    return str === undefined || str === null || str === "";
}