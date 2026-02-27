import "./style.css";
import {
    getBooksWithAuthor,
    getCategories,
} from "../../services/localStorageHelper.ts";
import type {Category} from "../../types/category.ts";
import Layout from "../layout/Layout";
import type {BookWithAuthorName} from "../../types/bookWithAuthorName.ts";
import BookPreview from "../../components/BookPreview";
import SignUpForCollection from "../../components/SignUpForCollection";
import {useState} from "react";

const BooksPage = () => {
    const booksWithAuthorName = getBooksWithAuthor() || [];
    const categories: Category[] = getCategories() || [];

    const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>(categories.map(category => category.id));

    const handleCategoryChange = (categoryId: number) => {
        setSelectedCategoryIds(prev => prev.includes(categoryId) ? prev.filter(id => id !== categoryId) : [...prev, categoryId]);
    };
    return (
        <Layout>
            <main className="main">
                <div className="categories">
                    {categories.map((category: Category) => {
                        return (
                            <label className="category" key={category.id}>
                                <input type="checkbox" value={category.name}
                                       checked={selectedCategoryIds.includes(category.id)}
                                       onChange={() => handleCategoryChange(category.id)}/>
                                <span>{category.name}</span>
                            </label>
                        );
                    })}
                </div>
                <div className="books-preview">
                    {booksWithAuthorName
                        .filter(book => selectedCategoryIds.includes(book.categoryId))
                        .map((bookWithAuthorName: BookWithAuthorName) => (
                            <BookPreview
                                key={bookWithAuthorName.id}
                                id={bookWithAuthorName.id}
                                title={bookWithAuthorName.title}
                                variant={"buyable"}
                                authorName={bookWithAuthorName.authorName || "Author Name"}
                                coverUrl={bookWithAuthorName.image}
                            />
                        ))}
                </div>
                <SignUpForCollection/>
            </main>
        </Layout>
    );
};

export default BooksPage;
