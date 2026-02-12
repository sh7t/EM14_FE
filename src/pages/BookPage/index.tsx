import "./style.css"
import Layout from "../layout/Layout";
import {useNavigate, useParams} from "react-router";
import {getBookWithAuthorById, getNewestBooksWithAuthor} from "../../services/localStorageHelper.ts";
import SignUpForCollection from "../../components/SignUpForCollection";
import BookPreview from "../../components/BookPreview";
import AddToCart from "../../components/AddToCart";

const BookPage = () => {
    const {bookId} = useParams();
    const navigate = useNavigate();

    const bookIdNum = Number(bookId);
    const book = getBookWithAuthorById(bookIdNum);
    if (!book) {
        navigate("/not-found");
        return null;
    }
    const newReleasedBooks = getNewestBooksWithAuthor() || [];

    return (
        <Layout>
            <main className="main">
                <div className="book-info-card">
                    <div className="book-info-container">
                        <img src={book.image} alt={book.title} height={450}/>
                        <div className="book-info-text">
                            <h2>{book.title}</h2>
                            <h3>{book.authorName}</h3>
                            <p>{book.shortDescription}</p>
                            <p>Added <span>{new Date(book.createdAt).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            })}</span></p>
                            <p>Price <span>${book.price}</span></p>
                            <p>Status - <span>{book.status.charAt(0).toUpperCase() + book.status.slice(1).toLowerCase()}</span></p>
                            <AddToCart />
                        </div>
                    </div>
                    <div className="book-info-description">
                        <h4>Book description</h4>
                        <p>{book.description}</p>
                    </div>
                </div>
                <div className="new-released">
                    <h2>New Released</h2>
                    <div className="new-released-books-preview">
                        {newReleasedBooks.map((newBookWithAuthorName) => (
                            <BookPreview key={newBookWithAuthorName.id} id={newBookWithAuthorName.id}
                                         title={newBookWithAuthorName.title} variant={"buyable"}
                                         authorName={newBookWithAuthorName.authorName || "Author Name"}
                                         coverUrl={newBookWithAuthorName.image} price={newBookWithAuthorName.price}/>
                        ))}
                    </div>
                </div>
                <SignUpForCollection/>
            </main>
        </Layout>
    );
};

export default BookPage;
