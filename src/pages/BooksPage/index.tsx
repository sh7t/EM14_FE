import "./style.css"
import BuyableBookPreview from "../../components/BuyableBookPreview";
import {getAuthors, getBooks, getCategories} from "../../services/localStorageHelper.ts";
import type {Book} from "../../types/book.ts";
import type {Author} from "../../types/author.ts";
import type {Category} from "../../types/category.ts";
import Layout from "../layout/Layout";

const BooksPage = () => {
    const books: Book[] = getBooks() || [];
    const authors: Author[] = getAuthors() || [];
    const categories: Category[] = getCategories() || [];

    return (
        <Layout>
            <main className="main">
                <div className="categories">
                    {categories.map((category: Category) => {
                        return (
                            <label className="category">
                                <input type="checkbox" value={category.name} defaultChecked/>
                                <span>{category.name}</span>
                            </label>)
                    })}
                </div>
                <div className="books-preview">
                    {books.map((book: Book) => (
                        <BuyableBookPreview
                            key={book.id}
                            title={book.title}
                            authorName={authors.find((author: Author) => author.id === book.authorId)?.name || "Author Name"}
                            coverUrl={book.image}
                        />
                    ))}
                </div>
                <div className="sign-up">
                    <span>Sign up for our new collection</span>
                    <button>Sign Up</button>
                </div>
            </main>
        </Layout>
    );
};

export default BooksPage;
