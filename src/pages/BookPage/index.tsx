import "./style.css"
import Layout from "../layout/Layout";
import {useParams} from "react-router";
import {getBookById} from "../../services/localStorageHelper.ts";

const BookPage = () => {
    const { bookId } = useParams();
    const bookIdNum = Number(bookId);
    console.log(bookIdNum);
    const book = bookId ? getBookById(bookIdNum) : null;

    return (
        <Layout>
            <main className="main">
                <p>Single book! {book?.id}</p>
            </main>
        </Layout>
    );
};

export default BookPage;
