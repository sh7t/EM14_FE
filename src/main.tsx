import "./index.css";
import {createRoot} from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "./pages/HomePage"
import BooksPage from "./pages/BooksPage";
import BookPage from "./pages/BookPage";
import AboutPage from "./pages/AboutPage";
import SignUpPage from "./pages/SignUpPage";
// import authors from "./fixtures/authors.json"
//import books from "./fixtures/books.json"
// import categories from "./fixtures/categories.json"

// localStorage.setItem("authors", JSON.stringify(authors));
// localStorage.setItem("books", JSON.stringify(books));
// localStorage.setItem("categories", JSON.stringify(categories));


createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/books" element={<BooksPage/>}/>
            <Route path="/book" element={<BookPage/>}/>
            <Route path="/signup" element={<SignUpPage />}/>
        </Routes>
    </BrowserRouter>
);


