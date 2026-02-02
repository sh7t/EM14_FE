import "./style.css"
import logo from "../../assets/UI/book-haven.svg";
import {FaTwitter, FaFacebook, FaLinkedin, FaYoutube} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="footer-container">
                    <div className="subscription">
                        <span className="subscription-text">Subscribe to our new offers!</span>
                        <div className="subscription-input">
                            <form className="form" action="">
                                <span className="form-icon">✉</span>
                                <input className="form-input"
                                       id="email"
                                       name="email"
                                       autoComplete="email"
                                       placeholder="Input your email"
                                       type="email"
                                       pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                                       required/>
                                <button className="form-button" type="button">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className="footer-navigation">
                        <a href="/" className="logo-link">
                            <img src={logo} alt="Book Haven" width="49px" height="48px"/>
                            <span>Book Haven</span>
                        </a>
                        <div className="routes">
                            <a className="route" href="/">Home</a>
                            <a className="route" href="/about">About us</a>
                            <a className="route" href="/books">Books</a>
                            <a className="route" href="https://tinyurl.com/thinking-gif" target="_blank">Help Center</a>
                            <a className="route" href="https://tinyurl.com/thinking-gif" target="_blank">Contact us</a>
                            <a className="route" href="https://tinyurl.com/thinking-gif" target="_blank">FAQs</a>
                            <a className="route" href="https://tinyurl.com/thinking-gif" target="_blank">Careers</a>
                        </div>
                    </div>
                    <hr/>
                    <div className="metadata">
                        <div className="locale-dropdown">
                            <img src="https://placehold.co/127x35" alt="placehold.co"/>
                        </div>
                        <div className="legal">
                            <p>© 2026 by numb
                                • <a href="https://github.com/sh7t" target="_blank">Privacy</a>
                                • <a href="https://github.com/sh7t" target="_blank">Terms</a>
                                • <a href="/">Sitemap</a></p>
                        </div>
                        <div className="social">
                            <a href="https://x.com/kaar1mka" target="_blank"><FaTwitter size={24} color="#4CD2FF"/></a>
                            <a href="https://www.facebook.com/kar1mka" target="_blank"><FaFacebook size={24}
                                                                                                   color="#4C8AFF"/></a>
                            <a href="https://www.linkedin.com/" target="_blank"><FaLinkedin size={24} color="#5378D0"/></a>
                            <a href="https://www.youtube.com/@kaar1mka" target="_blank"><FaYoutube size={24}
                                                                                                   color="#FF4C4C"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
