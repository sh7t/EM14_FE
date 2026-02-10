import "./style.css"
import Layout from "../layout/Layout";
import homeSearchImage from "../../assets/UI/home-search.svg"
import {FaSearch} from "react-icons/fa"
import UnbuyableBookPreview from "../../components/UnbuyableBookPreview";
import {getBooksWithAuthor} from "../../services/localStorageHelper.ts";

const HomePage = () => {
    const popularBooksWithAuthorName = getBooksWithAuthor(true) || [];

    return (
        <Layout>
            <main className="main">
                <div className="home-search">
                    <div className="home-search-wrapper">
                        <div className="home-search-container">
                            <div className="home-title">
                                <h2>Find your next great read at our online book store</h2>
                                <h3>Explore our current collection</h3>
                            </div>
                            <div className="home-search-div">
                                <FaSearch size={30} color="#474747" className="home-search-magnifying-glass"/>
                                <form>
                                    <input className="search-input"
                                           id="search"
                                           name="search"
                                           autoComplete="search"
                                           placeholder="Find your books here...."
                                           type="search"
                                    />
                                    <input className="search-button" type="submit" value="Search Now"/>
                                </form>
                            </div>
                        </div>
                        <div className="home-search-image">
                            <img src={homeSearchImage} alt="Search"/>
                        </div>
                    </div>
                </div>
                <div className="popular-books">
                    <h2 className="popular-books-title">Popular books</h2>
                    <div className="popular-books-preview">
                        {popularBooksWithAuthorName.map((bookWithAuthorName) => (
                            <UnbuyableBookPreview title={bookWithAuthorName.title}
                                                  authorName={bookWithAuthorName.authorName || "Author Name"}
                                                  coverUrl={bookWithAuthorName.image} price={bookWithAuthorName.price}/>
                        ))}
                    </div>
                </div>
                <div className="reading-journey">
                    <h2>Start your reading journey</h2>
                    <h3>No subscription needed. Drive into a world of stories today.</h3>
                    <button>Start Buying</button>
                </div>
                <div className="home-feedback">
                    <h2 className="home-feedback-title">Buyer’s feedback</h2>
                    <div className="feedback-slider">

                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default HomePage;