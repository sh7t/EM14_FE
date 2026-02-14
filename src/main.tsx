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
import NotFoundPage from "./pages/NotFoundPage";
import ScrollToTop from "./components/ScrollToTop";
import authors from "./fixtures/authors.json"
import books from "./fixtures/books.json"
import categories from "./fixtures/categories.json"
import CartPage from "./pages/CartPage";

localStorage.setItem("authors", JSON.stringify(authors));
localStorage.setItem("books", JSON.stringify(books));
localStorage.setItem("categories", JSON.stringify(categories));


createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about_us" element={<AboutPage/>}/>

            <Route path="/sign_up" element={!checkToken() ? <SignUpPage/> : <Navigate to="/"/>}/>
            <Route path="/sign_in" element={!checkToken() ? <SignInPage/> : <Navigate to="/"/> }/>

            <Route path="/cart" element={checkToken() ? <CartPage /> : <Navigate to="/sign_in"/>}/>
            <Route path="/books" element={checkToken() ? <BooksPage/> : <Navigate to="/sign_in"/>}/>
            <Route path="/book/:bookId" element={checkToken() ? <BookPage/> : <Navigate to="/sign_in" />}/>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
);


