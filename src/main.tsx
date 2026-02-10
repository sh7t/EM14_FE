import "./index.css";
import {createRoot} from "react-dom/client";
import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import HomePage from "./pages/HomePage"
import BooksPage from "./pages/BooksPage";
import BookPage from "./pages/BookPage";
import AboutPage from "./pages/AboutPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import {checkToken} from "./services/localStorageHelper.ts";
// import authors from "./fixtures/authors.json"
// import books from "./fixtures/books.json"
// import categories from "./fixtures/categories.json"
// import popularBooks from "./fixtures/popularBooks.json"

// localStorage.setItem("authors", JSON.stringify(authors));
// localStorage.setItem("books", JSON.stringify(books));
// localStorage.setItem("categories", JSON.stringify(categories));
// localStorage.setItem("popularBooks", JSON.stringify(popularBooks));


createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/sign_up" element={<SignUpPage/>}/>
            <Route path="/sign_in" element={<SignInPage/>}/>
            <Route path="/about_us" element={<AboutPage/>}/>
            <Route path="/books" element={checkToken() ? <BooksPage/> : <Navigate to="/sign_in"/>}/>
            <Route path="/book/:bookId" element={checkToken() ? <BookPage/> : <Navigate to="/sign_in" />}/>
        </Routes>
    </BrowserRouter>
);


