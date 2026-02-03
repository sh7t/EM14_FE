import "./style.css"
import BookPreview from "../../components/BookPreview";
import {getAuthors, getBooks} from "../../services/localStorageHelper.ts";
import type { Book } from "../../types/book.ts";
import type {Author} from "../../types/author.ts";

const BooksPage = () => {
    const books: Book[] = getBooks() || [];
    const authors: Author[] = getAuthors() || [];

    return (
        <main className="main">
            <div className="books-preview">
                {books.map((book: Book) => (
                    <BookPreview
                        key={book.id}
                        title={book.title}
                        authorName={authors.find((author: Author) => author.id === book.authorId)?.name || "John Doe"}
                        coverUrl={book.image}
                    />
                ))}
            </div>
            <div className="sign-up">
                <span>Sign up for our new collection</span>
                <button>Sign Up</button>
            </div>
        </main>
    );
};

export default BooksPage;
