import "./index.css";
import {createRoot} from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "./pages/HomePage"
import BooksPage from "./pages/BooksPage";
import BookPage from "./pages/BookPage";
import Layout from "./pages/layout/Layout";
import AboutPage from "./pages/AboutPage";
// import authors from "./fixtures/authors.json"
//import books from "./fixtures/books.json"
// import categories from "./fixtures/categories.json"

// localStorage.setItem("authors", JSON.stringify(authors));
// localStorage.setItem("books", JSON.stringify(books));
// localStorage.setItem("categories", JSON.stringify(categories));


createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout><HomePage /></Layout>}/>
            <Route path="/about" element={<Layout><AboutPage /></Layout>}/>
            <Route path="/books" element={<Layout><BooksPage /></Layout>}/>
            <Route path="/book" element={ <Layout><BookPage /></Layout>}/>
        </Routes>
    </BrowserRouter>
);


