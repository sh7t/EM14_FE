import "./style.css"
import Layout from "../layout/Layout";
import {useParams} from "react-router";

const BookPage = () => {
    const bookId = useParams();


    return (
        <Layout>
            <main className="main">
                <p>Single book!</p>
            </main>
        </Layout>
    );
};

export default BookPage;
