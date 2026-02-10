import "./style.css"
import BuyableBookPreview from "../../components/BuyableBookPreview";
import {getBooksWithAuthor, getCategories} from "../../services/localStorageHelper.ts";
import type {Category} from "../../types/category.ts";
import Layout from "../layout/Layout";
import type {BookWithAuthorName} from "../../types/bookWithAuthorName.ts";

const BooksPage = () => {
    const booksWithAuthorName = getBooksWithAuthor() || [];
    const categories: Category[] = getCategories() || [];

    return (
        <Layout>
            <main className="main">
                <div className="categories">
                    {categories.map((category: Category) => {
                        return (
                            <label className="category" key={category.id}>
                                <input type="checkbox" value={category.name} defaultChecked/>
                                <span>{category.name}</span>
                            </label>)
                    })}
                </div>
                <div className="books-preview">
                    {booksWithAuthorName.map((bookWithAuthorName: BookWithAuthorName)=> (
                        <BuyableBookPreview
                            key={bookWithAuthorName.id}
                            title={bookWithAuthorName.title}
                            authorName={bookWithAuthorName.authorName || "Author Name"}
                            coverUrl={bookWithAuthorName.image}
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
