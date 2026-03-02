import "./style.css";
import Layout from "../layout/Layout";
import SignUpForCollection from "../../components/SignUpForCollection";

const AboutPage = () => {
    return (
        <Layout>
            <main className="main">
                <div className="about-title">
                    <p>More about Book Haven</p>
                    <img src={"https://i.ibb.co/5XrCzbYb/Screenshot-2026-03-03-004229.png"} alt="Book Haven team"/>
                </div>
                <div className="about-content">
                    <h2>Welcome to <span>Book Haven</span> - a place where stories live and readers feel at home.</h2>
                    <h3><span>Book Haven</span> was created for people who love books and believe that every great journey begins
                        with a single page.</h3>
                    <h4>Our goal is simple: to make discovering, exploring, and buying books easy, enjoyable, and
                        accessible
                        to everyone.</h4>
                    <h5>We offer a carefully organized collection of books across multiple genres - from timeless
                        classics
                        to modern bestsellers.</h5>
                    <h6>Whether you're looking for inspiration, knowledge, or pure entertainment, <span>Book Haven</span> helps you
                        find
                        your next favorite read.</h6>
                    <p>Our platform is designed with readers in mind.</p>
                    <p>Clean navigation, quick search, personalized carts, and a smooth checkout experience make browsing
                        effortless.</p>
                    <p>We believe that buying books online should feel just as cozy as walking through your favorite
                        bookstore.</p>
                    <p>Book Haven isn’t just a store - it’s a community built around curiosity, imagination, and the love
                        of reading.</p>
                    <p>Thank you for being part of our story.</p>
                </div>
                <SignUpForCollection />
            </main>
        </Layout>
    );
};

export default AboutPage;
